import { Component, computed, input, output } from '@angular/core';
import { Emp } from '../../shared/models/employee.model';
import { Card } from "../../shared/ui/card/card";

@Component({
  selector: 'app-employee',
  imports: [Card],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  employee = input.required<Emp>();
  selected = input.required<boolean>();

  select = output<string>();

  imagePath = computed(() => 'images/' + this.employee().pic);

  onSelectEmp() {
    this.select.emit(this.employee().id);
  }
}
