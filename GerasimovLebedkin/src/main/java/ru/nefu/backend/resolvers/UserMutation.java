/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ru.nefu.backend.resolvers;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import ru.nefu.backend.UserService;
import ru.nefu.backend.entity.User;

/**
 *
 * @author lebedkin_ak
 */
public class UserMutation implements GraphQLMutationResolver {
    @Autowired
    private UserService userService;
    
    public User createUser(final String date, final String email, final String name, final String password) {
        return this.userService.createUser(date, email, name, password);
    }
}
