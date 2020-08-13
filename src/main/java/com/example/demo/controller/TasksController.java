package com.example.demo.controller;

import com.example.demo.Entity.Tasks;
import com.example.demo.service.TasksService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

import org.springframework.web.bind.annotation.*;

@RestController
public class TasksController {
	@Autowired
	
	private TasksService service;
	
	@PostMapping("/addTask")
	@CrossOrigin(origins = "http://localhost:4200")
	public Tasks addTask(@RequestBody Tasks Task) {
		return service.addTask(Task);
		
	}
	@GetMapping("/getTasks")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Tasks> getTasks(){
		return service.getTasks();
	}
	@DeleteMapping("/delete/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public String deleteTask(@PathVariable int id) {
		return service.deleteTask(id);
	}
	@PutMapping("/update/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public String updateTask(@PathVariable int id) {
		return service.updateTask(id);
	}

}
