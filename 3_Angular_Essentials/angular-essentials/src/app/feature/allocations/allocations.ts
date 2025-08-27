import { Component, computed, input, signal } from '@angular/core';
import { Allocation } from './allocation/allocation';
import { NewAllocation } from './new-allocation/new-allocation';
import { EMP_ALLOCATIONS } from '../../../../public/data/emp_allocations';

@Component({
  selector: 'app-allocations',
  imports: [Allocation, NewAllocation],
  templateUrl: './allocations.html',
  styleUrl: './allocations.css',
})
export class Allocations {
  empId = input<string>();
  name = input<string>();

  isAddingAllocation = signal(false);

  nameTitle = computed(() => `${this.name()}'s Allocations`);

  //allocations = signal(EMP_ALLOCATIONS);
  allocations = signal([
    {
      id: 'p1',
      empId: 'e1',
      title: 'Project 1',
      desc: 'project description',
      due: '12-09-2025',
    },
    {
      id: 'p2',
      empId: 'e2',
      title: 'Project 2',
      desc: 'project description',
      due: '13-09-2025',
    },
    {
      id: 'p3',
      empId: 'e2',
      title: 'Project 3',
      desc: 'project description',
      due: '15-09-2025',
    },
    {
      id: 'p4',
      empId: 'e2',
      title: 'Project 4',
      desc: 'project description',
      due: '15-09-2025',
    },
  ]);

  selectedEmpAllocations = computed(() => {
    return this.allocations().filter((allocation) => allocation.empId === this.empId());
  });

  onCompleteAllocation(id: string) {
    this.allocations.set(this.allocations().filter((allocation) => allocation.id !== id));
  }

  onAddAllocation() {
    this.isAddingAllocation.set(true);
  }

  onCancelAllocation() {
    this.isAddingAllocation.set(false);
  }
}
