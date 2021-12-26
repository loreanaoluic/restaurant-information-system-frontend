import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BaseLayoutComponent } from './pages/base-layout/base-layout.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"",
    component: BaseLayoutComponent,
    children:[
      {
        path: "manager",
        loadChildren: () =>
          import("../manager/manager.module").then((m) => m.ManagerModule),
      },
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
