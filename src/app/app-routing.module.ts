import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ShowComponent } from './page/show/show.component';
import { HomeComponent } from './page/home/home.component';
  import { NStudentComponent } from './components/n-student/n-student.component';
  import { NTeacherComponent } from './components/n-teacher/n-teacher.component';
  import { NAdminComponent } from './components/n-admin/n-admin.component';
  import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path:"",
    component: ShowComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"student",
        component:NStudentComponent,
        children:[
          {
            path:"userinfo",
            component:UserinfoComponent
          }
        ]
      },
      {
        path:"teacher",
        component:NTeacherComponent,
        children:[
          {
            path:"userinfo",
            component:UserinfoComponent
          }
        ]
      },
      {
        path:"admin",
        component:NAdminComponent,
        children:[
          {
            path:"userinfo",
            component:UserinfoComponent
          }
        ]
      },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
