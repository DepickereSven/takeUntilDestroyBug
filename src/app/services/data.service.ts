import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data$ = new BehaviorSubject<number>(0);
  data$ = this._data$.asObservable();

  updateData(data: number): void {
    this._data$.next(data);
  }

  resetData(): void {
    this._data$.next(0);
  }
}
