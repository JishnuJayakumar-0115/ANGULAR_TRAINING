import { Component, inject, input, output, signal } from '@angular/core';
import { AllocationsService } from '../allocations.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-allocation',
  standalone: false,
  //imports: [FormsModule],
  templateUrl: './new-allocation.html',
  styleUrl: './new-allocation.css',
})
export class NewAllocation {
  empId = input.required<string>();
  cancel = output();

  project = signal('');
  desc = signal('');
  due = signal('');

  private allocationsService = inject(AllocationsService);

  onCancel() {
    this.cancel.emit();
  }

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
