import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewAllocationModel } from '../../../shared/models/new-allocation.model';
import { AllocationsService } from '../allocations.service';

@Component({
  selector: 'app-new-allocation',
  imports: [FormsModule],
  templateUrl: './new-allocation.html',
  styleUrl: './new-allocation.css',
})
export class NewAllocation {
  empId = input.required<string>();
  cancel = output();
  //add = output<NewAllocationModel>();

  project = signal('');
  desc = signal('');
  due = signal('');

  private allocationsService = inject(AllocationsService);

  onCancel() {
    this.cancel.emit();
  }

  // onSubmit() {
  //   this.add.emit({
  //   project: this.project(),
  //   desc: this.desc(),
  //   due: this.due()
  // });
  // }

  onSubmit() {
    this.allocationsService.createAllocation(
      {
        project: this.project(),
        desc: this.desc(),
        due: this.due(),
      },
      this.empId()
    );

    this.cancel.emit();
  }
}
