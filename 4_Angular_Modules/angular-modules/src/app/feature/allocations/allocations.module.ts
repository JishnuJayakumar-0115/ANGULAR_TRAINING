import { NgModule } from '@angular/core';
import { Allocations } from './allocations';
import { Allocation } from './allocation/allocation';
import { NewAllocation } from './new-allocation/new-allocation';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Allocations, Allocation, NewAllocation],
  exports: [Allocations],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class AllocationsModule {}
