import { NgModule } from '@angular/core';
import { App } from './app';
import { Header } from './feature/header/header';
import { Employee } from './feature/employee/employee';
import { Allocations } from './feature/allocations/allocations';
import { BrowserModule } from '@angular/platform-browser';
import { Card } from './shared/ui/card/card';
import { Allocation } from './feature/allocations/allocation/allocation';
import { NewAllocation } from './feature/allocations/new-allocation/new-allocation';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AllocationsModule } from './feature/allocations/allocations.module';

// @NgModule({
//     declarations: [App,Header,Employee,Allocations],
//     bootstrap: [App] //only on the root module
// })
// export class AppModule {

// }

// @NgModule({
//   declarations: [App],
//   bootstrap: [App],
//   imports: [BrowserModule, Header, Employee, Allocations], //if you want to add standalone component, //BrowserModule only in root
// })
// export class AppModule {}

// @NgModule({
//   declarations: [App, Header, Employee, Allocations, Card, Allocation, NewAllocation],
//   bootstrap: [App],
//   imports: [BrowserModule, FormsModule], //import array is not just for standalone but for other module packages
// })
// export class AppModule {}

@NgModule({
  declarations: [App, Header, Employee],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, AllocationsModule],
})
export class AppModule {}
