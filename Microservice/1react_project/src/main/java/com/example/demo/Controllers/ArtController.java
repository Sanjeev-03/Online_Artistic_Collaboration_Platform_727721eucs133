package com.example.demo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Student.Bank;
import com.example.demo.Service.ArtService;
@CrossOrigin(origins="http://localhost:3001")
@RestController  
public class ArtController {
	@Autowired
	private ArtService studserv;

	@GetMapping("/show")
	public List<Bank> showStudents() {
		return studserv.getAllDetails();
	}

	@PostMapping("/add")
	public Bank addStudent(@RequestBody Bank obj) {
		return studserv.saveDetails(obj);
	}

	@DeleteMapping("/delete/{id}")
	public String delStudent(@PathVariable int id) {
		studserv.deleteDepartmentById(id);
		return "Successfully deleted!!!";
	}

	@GetMapping("/show/{id}")
	public Optional<Bank> findById(@PathVariable int id) {
		return studserv.findById(id);
	}
	@PutMapping("/update/{id}")
	public Bank update(@PathVariable int id,@RequestBody Bank s) {
		return studserv.update(id,s);
	}

}