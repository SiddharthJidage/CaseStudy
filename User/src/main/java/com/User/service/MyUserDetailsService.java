package com.User.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.User.Model.User;
import com.User.Repository.UserRepository;



@Service
public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByuserName(username);
		if(user==null)
			throw new UsernameNotFoundException("User 404");
		
		return new UserPrincipal(user);
	}

}
