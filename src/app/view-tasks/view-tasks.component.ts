import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import {task} from './../task';
import {Router} from '@angular/router'
@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  taskList:task[];
  
  constructor(private _service:NgserviceService,private router:Router) { }

  ngOnInit() {
    this._service.fetchTaskList().subscribe(
      data=>{
        console.log("response received")
        this.taskList=data
        console.log(this.taskList)
      },
      error=>console.log("error occured")
    )
  }
  deleteTask(id:number){
    this._service.fetchDeleteTask(id).subscribe(
      data=>{
        console.log("Task Deleted")
        this.ngOnInit();
        

      },
      error=>console.log("Error Occured")
    )
    
  }
  completed(id:number){
    this._service.update(id).subscribe(
      data=>{
        console.log("Task Completed")
        this.ngOnInit();
      },
      error=>{
        //console.log("error occured")
        this.ngOnInit();
      }
    )
  }
  



}
