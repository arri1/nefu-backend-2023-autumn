/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ru.nefu.backend;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.nefu.backend.entity.User;
import ru.nefu.backend.repository.UserRepository;

/**
 *
 * @author lebedkin_ak
 */
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;
    
    @PostMapping("/user/add")
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    @GetMapping("/user/{id}")
    public Optional<User> getUser(@PathVariable("id") int id) {
        return userRepository.findById(id);
    }
    
    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable("id") int id) {       
        userRepository.deleteById(id);
    }
}
