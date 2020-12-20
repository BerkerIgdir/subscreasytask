package com.subscreasy.task.repository;

import com.subscreasy.task.domain.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;


public interface UserRepository extends JpaRepository<User,Long> {


    List<User> findByUsername(String name);
    User findByEmail(String name);

}
