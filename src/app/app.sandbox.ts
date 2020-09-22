import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';


@Injectable()
export class AppSandbox {

  data$ = this.dataService.data$;

  constructor(private dataService: DataService) {}

  updateData(data: number): void {
    this.dataService.updateData(data);
  }

  resetData(): void {
    this.dataService.resetData();
  }
}
