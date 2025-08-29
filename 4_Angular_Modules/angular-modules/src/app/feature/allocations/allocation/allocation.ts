import { Component, inject, input, output } from '@angular/core';
import { Card } from '../../../shared/ui/card/card';
import { AllocationModel } from '../../../shared/models/allocation.model';
import { AllocationsService } from '../allocations.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-allocation',
  standalone: false,
  //imports: [Card, DatePipe],
  templateUrl: './allocation.html',
  styleUrl: './allocation.css',
})
export class Allocation {
  allocation = input.required<AllocationModel>();

  complete = output<string>();

  allocationsService = inject(AllocationsService);

  onComplete() {
    this.allocationsService.completeAllocation(this.allocation().id);
  }
}
