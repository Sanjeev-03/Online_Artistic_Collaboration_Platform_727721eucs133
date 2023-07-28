package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Student.Bank;

public interface ArtRepository extends JpaRepository<Bank, Integer>{

}