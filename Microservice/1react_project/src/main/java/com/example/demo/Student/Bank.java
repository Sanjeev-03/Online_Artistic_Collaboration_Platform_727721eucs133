package com.example.demo.Student;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Bank")
public class Bank {

	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int Artist_id;
	
	private String Artist_Name;
	
	private String Mail_id;

	private long Projects_completed;
	
	private String Domain;	


	

	public int getArtist_id() {
		return Artist_id;
	}




	public void setArtist_id(int artist_id) {
		Artist_id = artist_id;
	}




	public String getArtist_Name() {
		return Artist_Name;
	}




	public void setArtist_Name(String artist_Name) {
		Artist_Name = artist_Name;
	}




	public String getMail_id() {
		return Mail_id;
	}




	public void setMail_id(String mail_id) {
		Mail_id = mail_id;
	}




	public long getProjects_completed() {
		return Projects_completed;
	}




	public void setProjects_completed(long projects_completed) {
		Projects_completed = projects_completed;
	}




	public String getDomain() {
		return Domain;
	}




	public void setDomain(String domain) {
		Domain = domain;
	}




	public Bank(int artist_id, String artist_Name, String mail_id, long projects_completed, String domain) {
		super();
		Artist_id = artist_id;
		Artist_Name = artist_Name;
		Mail_id = mail_id;
		Projects_completed = projects_completed;
		Domain = domain;
	}




	public Bank() {}
	
}
