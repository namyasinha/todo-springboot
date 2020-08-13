import { Component, OnInit } from '@angular/core';
import {task} from './../task';
import { NgserviceService } from '../ngservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  Task:task=new task();
  constructor(private _service:NgserviceService,private router:Router) { }

  ngOnInit() {
  }
  goToTask(){
    this.router.navigate(['']);
  }
  onSubmit(){
    this._service.addTask(this.Task).subscribe(
      data=>{
        console.log(data);
        this.goToTask();
      },
      error=>console.log("error occured")
    )
    
  }
}
