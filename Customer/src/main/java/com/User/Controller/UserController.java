package com.User.Controller;


import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.User.Model.User;

import com.User.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	private final UserService userService;
    
    @Autowired
    RestTemplate restTemplate;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/userList")
    public ResponseEntity<List<User>> getAllUsers() {
    	
    	try {
    		List<User> users = userService.getAllUsers();
    		return new ResponseEntity<List<User>>(users,HttpStatus.FOUND);
    	}catch(Exception e) {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	}
         
    }

    @PostMapping(value = "/addUser")
    public ResponseEntity<User> addUser(@RequestBody User user) {
    	
    	try {
    		
    		User users = userService.addUser(user);
    		return new ResponseEntity<User>(users,HttpStatus.CREATED);
    		
    	}catch(NoSuchElementException e) {
    		
    		return new ResponseEntity<>(HttpStatus.CONFLICT);
    	}
    	
        //return userService.addUser(user);
    }

    @DeleteMapping(value = "/deleteUser/{UserID}")
    public ResponseEntity<User>deleteUser(@PathVariable String userID) {
        User user = null;
        
        try {
        	user= userService.getUserbyID(userID);
        	userService.deleteUser(user.getId());
        	
        } catch(NoSuchElementException e) {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        return new ResponseEntity<User>(user,HttpStatus.OK);
    	//return userService.deleteUser(userID);
    }

    @PutMapping(value = "/updateUser/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable (value="id") String id){
    	
    	try {
    		User userExist = userService.getUserbyID(id);
    		
    		System.out.println(userExist.getFirstName());
    		userExist.setFirstName(user.getFirstName());
    		userExist.setLastName(user.getLastName());
    		userExist.setAge(user.getAge());
    		userExist.setGender(user.getGender());
    		userExist.setMobileNumber(user.getMobileNumber());
    		userExist.setUserName(user.getUserName());
    		userExist.setPassword(user.getPassword());
    		
    		User Up_user = userService.updateUser(userExist,id);
    		return new ResponseEntity<User>(Up_user,HttpStatus.OK);
    
    		
    	}catch(Exception e)
    	{
    		return new ResponseEntity<>(HttpStatus.CONFLICT);
    	}
        
    	
    }

	@GetMapping(value = "/getuser/{id}")
    public ResponseEntity<User> getUsersById(@PathVariable String id) {
    	
    	try {
    		User users = userService.getUserbyID(id);
    		return new ResponseEntity<User>(users,HttpStatus.FOUND);
    	}catch(Exception e) {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);// if the data is not available then not found response will be return. 
    	}
         
    }
    

	/*
	 * @GetMapping(value = "/{UserID}") public User getUser(@RequestBody User
	 * user, @PathVariable String userID) { return userService.getUser(user); }
	 */
}
