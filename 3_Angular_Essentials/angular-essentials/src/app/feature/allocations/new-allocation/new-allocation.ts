import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-allocation',
  imports: [],
  templateUrl: './new-allocation.html',
  styleUrl: './new-allocation.css',
})
export class NewAllocation {
  cancel = output();
  
  onCancel() {
    this.cancel.emit();
  }
}
