import { Component, computed, input, signal } from '@angular/core';
import { Allocation } from './allocation/allocation';
import { NewAllocation } from './new-allocation/new-allocation';
import { type NewAllocationModel } from '../../shared/models/new-allocation.model';
import { AllocationsService } from './allocations.service';

@Component({
  selector: 'app-allocations',
  imports: [Allocation, NewAllocation],
  templateUrl: './allocations.html',
  styleUrl: './allocations.css',
})
export class Allocations {
  empId = input.required<string>();
  name = input.required<string>();

  isAddingAllocation = signal(false);

  nameTitle = computed(() => `${this.name()}'s Allocations`);

  //private allocationsService = new AllocationsService();
  private allocationsService: AllocationsService;

  constructor(allocationsService: AllocationsService) {
    this.allocationsService = allocationsService;
  }

  //allocations = signal(EMP_ALLOCATIONS);

  selectedEmpAllocations = computed(() => {
    //return this.allocations().filter((allocation) => allocation.empId === this.empId());
    return this.allocationsService.getSelectedEmpAllocations(this.empId());
  });

  // onCompleteAllocation(id: string) {
  //   //this.allocations.set(this.allocations().filter((allocation) => allocation.id !== id));
  // }

  onAddAllocation() {
    this.isAddingAllocation.set(true);
  }

  onCancelAllocation() {
    this.isAddingAllocation.set(false);
  }

  // onCreateAllocation(allocation: NewAllocationModel) {
  //   const newAllocation = {
  //     id: (this.allocations().length + 1).toString(),
  //     empId: this.empId(),
  //     project: allocation.project,
  //     desc: allocation.desc,
  //     due: allocation.due,
  //   };

  //   this.allocations.set([...this.allocations(), newAllocation]);

  //   this.isAddingAllocation.set(false);
  // }
}
