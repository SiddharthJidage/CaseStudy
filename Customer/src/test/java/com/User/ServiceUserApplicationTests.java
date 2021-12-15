package com.User;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.ArrayList;
import java.util.List;

//import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import com.User.Model.User;
import com.User.Repository.UserRepository;
import com.User.service.UserService;


//@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest(classes= {ServiceUserApplicationTests.class})
class ServiceUserApplicationTests {
    
	
	
	@InjectMocks
	private UserService userService;

	@Mock
	private UserRepository repository;
	
	public List<User> mockUser;

	// unit testing for get service  "11", "Sam", "Pachore","9999","M","22","maxpay","sassds"
	

	String exampleCourseJson = "{\"id\":\"Spring\",\"firstname\":\"sam\",\"lastname\":\"pachore\",\"mobileno\":\"9999\",\"gender\":\"M\",\"age\":\"22\",\"username\":\"maxpay\",\"password\":\"sassds\"}";

	@Test
	//@Order(1)
	public void test_getAllUser() {
		
		List<User> mockUser = new ArrayList<User>();
		
		mockUser.add(new User("11", "Sam", "Pachore","9999","M","22","maxpay","sassds"));
		mockUser.add(new User("12", "Sarah", "stacy","9889","F","20","XYZ","abc"));

		Mockito.when(repository.findAll()).thenReturn(mockUser);// mocking the repo
		
		assertEquals(2,userService.getAllUsers().size());
		
		
	}
	@Test 
	//@Order(2)
	public void test_getUserById() { 
          List<User> mockUser = new ArrayList<User>();
		
		mockUser.add(new User("11", "Sam", "Pachore","9999","M","22","maxpay","sassds"));
		mockUser.add(new User("12", "Sarah", "stacy","9889","F","20","XYZ","abc"));
        String id="11";
        
		Mockito.when(repository.findAll()).thenReturn(mockUser);// mocking the external dependency
		
		assertEquals(id,userService.getUserbyID(id).getId());
		
	}
	
	@Test
	//@Order(3)
	public void test_addUser() {
		
		User user = new User("13", "Sa", "Pachre","999","M","22","mapay","sasds");
		
		Mockito.when(repository.save(user)).thenReturn(user);
		assertEquals(user,userService.addUser(user));
	}
	 
	@Test
	//@Order(4)
	public void test_updateUser() {
		
		User user = new User("13", "Sa", "Pachre","999","M","22","mapay","sasds");
		String id = "13";
		Mockito.when(repository.save(user)).thenReturn(user);
		assertEquals((user),userService.updateUser(user,id));
	}
	
	@Test
	//@Order(5)
	public void test_deleteUser() {
		User user = new User("13", "Sa", "Pachre","999","M","22","mapay","sasds");
		String id = "13";
		userService. deleteUser(id);
		verify(repository,times(1)).deleteById(id);
	}
	
	/*
	 * @Test
	 * 
	 * @Order(4) public void test_deleteUser() {
	 * 
	 * User user = new User("13", "Sa", "Pachre","999","M","22","mapay","sasds");
	 * String id = "13"; Mockito.when(repository.deleteById(id)).thenReturn(user);
	 * assertEquals(id,userService.deleteById(user)); }
	 */
}
