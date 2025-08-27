import { Component, input, output } from '@angular/core';
import { AllocationModel } from '../../../shared/models/allocation.model';

// interface AllocationModel {
//   id: string;
//   empId: string;
//   title: string;
//   desc: string;
//   due: string;
// }

@Component({
  selector: 'app-allocation',
  imports: [],
  templateUrl: './allocation.html',
  styleUrl: './allocation.css',
})
export class Allocation {
  allocation = input.required<AllocationModel>();

  complete = output<string>();

  onComplete() {
    this.complete.emit(this.allocation().id);
  }
}
