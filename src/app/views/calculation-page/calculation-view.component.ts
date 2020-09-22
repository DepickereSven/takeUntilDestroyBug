import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSandbox } from '../../app.sandbox';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Destroy, takeUntilDestroy } from 'ngx-reactivetoolkit';

@Component({
  selector: 'app-calculation-view',
  template: `
  <h1>{{ dataShowToUser$ | async }}</h1>
  <a [routerLink]="'/other-page'">Move to other page</a>
  `
})
export class CalculationViewComponent implements OnInit, OnDestroy {

  private allData$: Observable<number>;

  dataShowToUser$: Observable<string>;

  constructor(private sb: AppSandbox) {}

  ngOnInit(): void {

    this.allData$ = this.sb.data$;

    // this.allData$
    //   .pipe(
    //     delay(2000),
    //     map(v => ++v),
    //     takeUntilDestroy(this)
    //   )
    //   .subscribe(value => {
    //     this.sb.updateData(value);
    //   }, v => console.log(v), () => console.log('complete'));
    //
    this.dataShowToUser$ = this.allData$.pipe(
      map(v => `Show number to user ${v}`)
    );

    this.allData$.pipe(takeUntilDestroy(this)).subscribe(v => {
      console.log(v);
    }, v => console.log(v), () => console.log('complete'));
  }

  ngOnDestroy(): void {}
}
