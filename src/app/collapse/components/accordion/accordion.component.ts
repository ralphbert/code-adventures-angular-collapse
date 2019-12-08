import { AfterViewInit, Component, ContentChildren, OnDestroy, OnInit, Output, QueryList } from '@angular/core';
import { CollapseMenuComponent } from '../collapse-menu/collapse-menu.component';
import { forkJoin, merge, Observable, of, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnDestroy, AfterViewInit {
  @ContentChildren(CollapseMenuComponent) collapseMenus: QueryList<CollapseMenuComponent>;
  private currentlyOpened: CollapseMenuComponent = null;
  private queryListSubscription: Subscription = null;

  ngAfterViewInit(): void {
    this.queryListSubscription = merge(of(this.collapseMenus), this.collapseMenus.changes)
      .pipe(switchMap(list => {
        const observables: Observable<boolean>[] = [];

        list.forEach(collapseMenu => {
          const observable = collapseMenu.collapseChange
            .pipe(tap(open => {
              if (open) {
                this.currentlyOpened = collapseMenu;

                list.forEach(otherCollapse => {
                  if (otherCollapse !== this.currentlyOpened) {
                    otherCollapse.closeCollapse();
                  }
                });
              }
            }));

          observables.push(observable);
        });

        return forkJoin(observables);
      }))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.queryListSubscription.unsubscribe();
  }

  closeAll() {
    if (this.currentlyOpened) {
      this.currentlyOpened.closeCollapse();
      this.currentlyOpened = null;
    }
  }
}
