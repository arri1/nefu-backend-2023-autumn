/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package ru.nefu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nefu.backend.entity.User;

/**
 *
 * @author lebedkin_ak
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
}
