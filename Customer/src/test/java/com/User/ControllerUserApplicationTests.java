package com.User;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

//import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.User.Controller.UserController;
import com.User.Model.User;
import com.User.service.UserService;

@SpringBootTest(classes= {ControllerUserApplicationTests.class})
public class ControllerUserApplicationTests {
	
	@Mock
	UserService userService;
	
	@InjectMocks
	UserController userController;
	
	List<User> mockUser;
	User users;
	
	@Test
	public void test_getAlluser()// test case for getting list of user
	{
		// dummy data
		mockUser = new ArrayList<User>();
		mockUser.add(new User("11", "Sam", "Pachore","9999","M","22","maxpay","sassds"));
		mockUser.add(new User("12", "Sarah", "stacy","9889","F","20","XYZ","abc"));
		
		when(userService.getAllUsers()).thenReturn(mockUser);
		ResponseEntity<List<User>> res =userController.getAllUsers();
		
		assertEquals(HttpStatus.FOUND,res.getStatusCode());// assertion for status
		assertEquals(2,res.getBody().size());// assertion for no of entries
	}

	@Test
	public void test_getUserById()// test case for getting user by id 
	{
		// dummy data
		users = new User ("55", "ben", "tenison","9999","M","22","Ben10","ben10");
		String id = "55";
		 
		when(userService.getUserbyID(id)).thenReturn(users);
		ResponseEntity<User> res =userController.getUsersById(id);
		
		assertEquals(HttpStatus.FOUND,res.getStatusCode());// assertion for status
		assertEquals(id,res.getBody().getId());
	}
	
	@Test
	public void test_addUser() // test case for adding new user 
	{
		// dummy data
		users = new User ("55", "ben", "tenison","9999","M","22","Ben10","ben10");
		
		 
		when(userService.addUser(users)).thenReturn(users);
		ResponseEntity<User> res =userController.addUser(users);
		
		assertEquals(HttpStatus.CREATED,res.getStatusCode());// assertion for status
		assertEquals(users,res.getBody());
	}
	

	@Test
	public void test_updateUser() // test case for adding new user 
	{
		// dummy data
		users = new User ("55", "kevin", "tenison","9999","M","22","Ben10","ben10");
		String id="55";
		 
		when(userService.getUserbyID(id)).thenReturn(users);
		when(userService.updateUser(users,id)).thenReturn(users);
		ResponseEntity<User> res =userController.updateUser(users,id);
		
		assertEquals(HttpStatus.OK,res.getStatusCode());// assertion for status
		assertEquals(id,res.getBody().getId());
		assertEquals("kevin",res.getBody().getFirstName());
		assertEquals("tenison",res.getBody().getLastName());
		assertEquals("9999",res.getBody().getMobileNumber());
		assertEquals("M",res.getBody().getGender());
		assertEquals("22",res.getBody().getAge());
		assertEquals("Ben10",res.getBody().getUserName());
		assertEquals("ben10",res.getBody().getPassword());
		
	}
	
	public void test_deleteUser() {
		// dummy data
		users = new User ("55", "kevin", "tenison","9999","M","22","Ben10","ben10");
		String id="55";
		
		when(userService.getUserbyID(id)).thenReturn(users);
		ResponseEntity<User> res =userController.deleteUser(id);
		
		assertEquals(HttpStatus.OK,res.getStatusCode());
	}
	
	
}
