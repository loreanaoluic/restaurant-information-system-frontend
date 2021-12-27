import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginGuard } from './guards/login.guard';
import { BaseLayoutComponent } from './pages/base-layout/base-layout.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"",
    component: BaseLayoutComponent,
    canActivate: [LoginGuard],
    children:[
      {
        path: "manager",
        loadChildren: () =>
          import("../manager/manager.module").then((m) => m.ManagerModule),
      },
      {
        path: "waiter",
        loadChildren: () =>
          import("../waiter/waiter.module").then((w) => w.WaiterModule),
      },
      {
        path: "cook",
        loadChildren: () =>
          import("../cook/cook.module").then((c) => c.CookModule),
      },
      {
        path: "bartender",
        loadChildren: () =>
          import("../bartender/bartender.module").then((b) => b.BartenderModule),
      },
      {
        path: "director",
        loadChildren: () =>
          import("../director/director.module").then((d) => d.DirectorModule),
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
