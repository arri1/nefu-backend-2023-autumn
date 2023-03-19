/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ru.nefu.backend.resolvers;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.nefu.backend.UserService;
import ru.nefu.backend.entity.User;

/**
 *
 * @author lebedkin_ak
 */
@Component
public class UserQuery implements GraphQLQueryResolver {
    @Autowired
    private UserService userService;
    
    public List<User> getUsers(final int count) {
        return this.userService.getAllUsers(count);
    }
    
    public Optional<User> getUser(final int id) {
        return this.userService.getUser(id);
    }
}
