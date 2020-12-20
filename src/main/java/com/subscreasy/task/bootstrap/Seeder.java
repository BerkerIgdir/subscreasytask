package com.subscreasy.task.bootstrap;

import com.subscreasy.task.domain.User;
import com.subscreasy.task.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Bean
    public PasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void run(String... args) throws Exception {

//       User berker = User.builder().username("Berker").password(passwordEncoder.encode("123")).email("berkerigdir93@gmail.com").role("USER").build();
//
//       User efe =  User.builder().username("Efe").password(passwordEncoder.encode("123")).email("efearasigdir@gmail.com").role("USER").build();
//
//       User yagiz =  User.builder().username("Yagiz").password(passwordEncoder.encode("123")).email("yagizyayla@gmail.com").role("USER").build();
//
//
//
//       userRepository.save(berker);
//       userRepository.save(efe);
//       userRepository.save(yagiz);

    }
}
