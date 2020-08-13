import {Routes,RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';

import { ViewTasksComponent } from './view-tasks/view-tasks.component';


import { AddTaskComponent } from './add-task/add-task.component';


const routes:Routes=[
  {path:'',component:ViewTasksComponent},
  {path:'addtask',component:AddTaskComponent},
  {path:'gettask',component:ViewTasksComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }