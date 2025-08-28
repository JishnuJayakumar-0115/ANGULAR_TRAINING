import { Injectable, signal } from '@angular/core';
import { NewAllocationModel } from '../../shared/models/new-allocation.model';
import { EMP_ALLOCATIONS } from '../../../../public/data/emp_allocations';

@Injectable({
  providedIn: 'root',
})
export class AllocationsService {
  private allocations = signal(EMP_ALLOCATIONS);

  constructor() {
    const allocations = localStorage.getItem('allocations');

    if (allocations) {
      this.allocations.set(JSON.parse(allocations));
    }
  }

  getSelectedEmpAllocations(empId: string) {
    return this.allocations().filter((allocation) => allocation.empId === empId);
  }

  createAllocation(allocation: NewAllocationModel, empId: string) {
    const newAllocation = {
      id: (this.allocations().length + 1).toString(),
      empId: empId,
      project: allocation.project,
      desc: allocation.desc,
      due: allocation.due,
    };

    this.allocations.set([...this.allocations(), newAllocation]);

    this.saveAllocation();
  }

  completeAllocation(id: string) {
    this.allocations.set(this.allocations().filter((allocation) => allocation.id !== id));
    this.saveAllocation();
  }

  private saveAllocation() {
    localStorage.setItem('allocations', JSON.stringify(this.allocations()));
  }
}
