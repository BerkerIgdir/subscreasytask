package com.subscreasy.task.controller;

import com.subscreasy.task.domain.User;
import com.subscreasy.task.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import net.minidev.json.JSONObject;
import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserRepository repository;

    @GetMapping("/users")
    public List<User> getAll() {

        return repository.findAll() ;
    }


    @GetMapping(value = "/validatelogin",produces = "application/json")
    public ResponseEntity loginVerified(){

        JSONObject jsonObject = new JSONObject();

        jsonObject.put("message","Request is validated successfully");

        return new ResponseEntity(jsonObject,HttpStatus.OK);
    }

    @GetMapping("/user/getbyname/{name}")
    public List<User> getByName(@PathVariable("name") String name) {

        return null ;
    }

    @GetMapping("/users/getbysurname/{surname}")
    public List<User> getBySurname(@PathVariable("surname") String surname) {

        return repository.findByUsername(surname) ;
    }

    @GetMapping("/users/getbymail/{email}")
    public User getByEmail(@PathVariable("email") String email) {

        return repository.findByEmail(email) ;
    }

    @PostMapping("/newuser")
    public ResponseEntity createUser(@RequestBody User newUser){

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        try {
            System.out.println("BURADA");
            newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
            newUser.setEnabled(true);
            repository.save(newUser);
        }
        catch (Exception e){
            return new ResponseEntity(e, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(newUser,HttpStatus.ACCEPTED);
    }

}
