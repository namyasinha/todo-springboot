package com.example.demo.service;
import com.example.demo.Entity.Tasks;
import com.example.demo.repository.TasksRepository;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class TasksService {
	@Autowired
	private TasksRepository repository;
	
	public List<Tasks> getTasks() {
		return repository.findAll();
	}
	public Tasks addTask(Tasks Task) {
		return repository.save(Task);
	}
	public String deleteTask(int id) {
		repository.deleteById(id);
		return "task deleted";
	}
	public String updateTask(int id) {
		List<Tasks> t1=repository.findAll();
		for(int i=0;i<t1.size();i++) {
			if(t1.get(i).getId()==id) {
				t1.get(i).setStatus(1);
				repository.saveAll(t1);
			}
		}
		return "Task updated";
		
	}
	
	
}
