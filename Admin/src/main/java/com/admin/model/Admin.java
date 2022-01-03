package com.admin.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Admin")
public class Admin {
	
	@Id
	private String id;
	private String name;
	private String mname;
	private String lname;
	private String email;
	private String username;
	private String password;
	
	
	public Admin(String id, String fname, String mname, String lname, String email, String username, String password) {
		super();
		this.id = id;
		this.name = fname;
		this.mname = mname;
		this.lname = lname;
		this.email = email;
		this.username = username;
		this.password = password;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getFname() {
		return name;
	}


	public void setFname(String fname) {
		this.name = fname;
	}


	public String getMname() {
		return mname;
	}


	public void setMname(String mname) {
		this.mname = mname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "Admin [id=" + id + ", fname=" + name + ", mname=" + mname + ", lname=" + lname + ", email=" + email
				+ ", username=" + username + ", password=" + password + "]";
	}
	
}
