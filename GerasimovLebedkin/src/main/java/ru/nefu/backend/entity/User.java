/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ru.nefu.backend.entity;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 *
 * @author lebedkin_ak
 */
@Data
@EqualsAndHashCode
@Entity
@Table(name="Users")
public class User implements Serializable {
    @Id
    @Column(name = "ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "created_at")
    private LocalDate createdAt;
    @Column(name = "email")
    private String email;
    @Column(name = "name", nullable = false)
    private String name;    
    @Column(name = "password", nullable = false)
    private String password;
}
