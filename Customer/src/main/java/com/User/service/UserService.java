package com.User.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.User.Model.User;
import com.User.Repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    public User addUser( User user) {
        userRepository.save(user);
        return user;
    }


    public String deleteUser( String userID) {
        userRepository.deleteById(userID);
        return "Deleted"  ;
    }


    public User updateUser( User user, String userID) {
        userRepository.save(user);
        return user;
    }
    
    public User getUserbyID(String id)
    {
    	List<User> Users =userRepository.findAll();
    	User user= null;
    	
    	for(User con:Users)
    	{
    		if(con.getId()== id)
    			user = con;
    	}
    	
    	return user;
    }


	
}