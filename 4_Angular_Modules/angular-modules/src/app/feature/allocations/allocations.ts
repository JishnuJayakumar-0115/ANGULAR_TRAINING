import { Component, computed, input, signal } from '@angular/core';
import { AllocationsService } from './allocations.service';
import { NewAllocation } from "./new-allocation/new-allocation";
import { Allocation } from "./allocation/allocation";

@Component({
  selector: 'app-allocations',
  standalone: false,
  //imports: [NewAllocation, Allocation],
  templateUrl: './allocations.html',
  styleUrl: './allocations.css',
})
export class Allocations {
  empId = input.required<string>();
  name = input.required<string>();

  isAddingAllocation = signal(false);

  nameTitle = computed(() => `${this.name()}'s Allocations`);

  private allocationsService: AllocationsService;

  constructor(allocationsService: AllocationsService) {
    this.allocationsService = allocationsService;
  }

  selectedEmpAllocations = computed(() => {
    return this.allocationsService.getSelectedEmpAllocations(this.empId());
  });

  onAddAllocation() {
    this.isAddingAllocation.set(true);
  }

  onCancelAllocation() {
    this.isAddingAllocation.set(false);
  }
}
