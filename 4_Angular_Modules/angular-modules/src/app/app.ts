import { Component, computed, signal } from '@angular/core';
import { Header } from './feature/header/header';
import { Employee } from './feature/employee/employee';
import { EMPLOYEES_LIST } from '../../public/data/emp';
import { Allocations } from "./feature/allocations/allocations";

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [Header, Employee, Allocations],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-modules');

  employees = signal(EMPLOYEES_LIST);
  selectedEmployeeId = signal('');

  onSelectEmployee(id: string) {
    console.log(id);
    this.selectedEmployeeId.set(id);
  }

  selectedEmployee = computed(() =>
    this.employees().find((emp) => emp.id === this.selectedEmployeeId())
  );
}
