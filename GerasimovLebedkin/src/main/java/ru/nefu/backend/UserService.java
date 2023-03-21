/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ru.nefu.backend;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.nefu.backend.entity.User;
import ru.nefu.backend.repository.UserRepository;

/**
 *
 * @author lebedkin_ak
 */
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Transactional
    public User createUser(final String date, final String email, final String name, final String password) {
        User user = new User();
        user.setCreatedAt(LocalDate.parse(date));
        user.setEmail(email);
        user.setName(name);
        user.setPassword(password);
        return this.userRepository.save(user);
    }
    
    @Transactional(readOnly = true)
    public List<User> getAllUsers(final int count) {
        return this.userRepository.findAll().stream().limit(count).collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public Optional<User> getUser(final int id) {
        return this.userRepository.findById(id);
    }
}
