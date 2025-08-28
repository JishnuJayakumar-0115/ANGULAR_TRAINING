import { Component, inject, input, output } from '@angular/core';
import { AllocationModel } from '../../../shared/models/allocation.model';
import { Card } from '../../../shared/ui/card/card';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { AllocationsService } from '../allocations.service';

// interface AllocationModel {
//   id: string;
//   empId: string;
//   title: string;
//   desc: string;
//   due: string;
// }

@Component({
  selector: 'app-allocation',
  imports: [Card, DatePipe],
  templateUrl: './allocation.html',
  styleUrl: './allocation.css',
})
export class Allocation {
  allocation = input.required<AllocationModel>();

  complete = output<string>();

  allocationsService = inject(AllocationsService);

  onComplete() {
    //this.complete.emit(this.allocation().id);
    this.allocationsService.completeAllocation(this.allocation().id);
  }
}
