import {
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { type Emp } from '../../shared/models/employee.model';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  // selectedEmp = EMPLOYEES_LIST[1];

  // get imagePath() {
  //   return 'images/' + this.selectedEmp.pic;
  // }

  // onClick(){
  //   console.log('Clicked!!!');
  //   const randomIndex = Math.floor(Math.random() * EMPLOYEES_LIST.length);
  //   this.selectedEmp = EMPLOYEES_LIST[randomIndex];
  // }

  // selectedEmp = signal(EMPLOYEES_LIST[0]);

  // imagePath = computed(() => 'images/' + this.selectedEmp().pic);

  // onClick() {
  //   const randomIndex = Math.floor(Math.random() * EMPLOYEES_LIST.length);
  //   this.selectedEmp.set(EMPLOYEES_LIST[randomIndex]);
  // }

  // @Input() pic!: string;
  // @Input() name!: string;

  // imagePath = computed(() => 'images/' + this.pic);

  // onSelectEmp() {}

  // @Input({ required: true }) pic!: string;
  // @Input({ required: true }) name!: string;

  // imagePath = computed(() => 'images/' + this.pic);

  // onSelectEmp() {}

  // pic = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'images/' + this.pic());

  // onSelectEmp() {}

  // id = input.required<string>();
  // pic = input.required<string>();
  // name = input.required<string>();

  // @Output() select = new EventEmitter<string>();

  // imagePath = computed(() => 'images/' + this.pic());

  // onSelectEmp() {
  //   this.select.emit(this.id());
  // }

  // id = input.required<string>();
  // pic = input.required<string>();
  // name = input.required<string>();

  // select = output<string>();

  // imagePath = computed(() => 'images/' + this.pic());

  // onSelectEmp() {
  //   this.select.emit(this.id());
  // }

  // employee = input.required<{
  //   id: string;
  //   name: string;
  //   pic: string;
  // }>();

  // select = output<string>();

  // imagePath = computed(() => 'images/' + this.employee().pic);

  // onSelectEmp() {
  //   this.select.emit(this.employee().id);
  // }

  employee = input.required<Emp>();
  selected = input.required<boolean>();

  select = output<string>();

  imagePath = computed(() => 'images/' + this.employee().pic);

  onSelectEmp() {
    this.select.emit(this.employee().id);
  }
}

// type Emp = {
//   id: string;
//   name: string;
//   pic: string;
// };

// interface Emp {
//   id: string;
//   name: string;
//   pic: string;
// };
