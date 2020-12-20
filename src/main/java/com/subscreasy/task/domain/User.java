package com.subscreasy.task.domain;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

// I won't be using a DTO, as it wasn't required specifically and this is no real product.

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column(length = 20, columnDefinition = "varchar(20)", nullable = false,unique = true)
    String username;
    @Column(length = 20, columnDefinition = "varchar(20)", nullable = false)
    String name;
    @Column(length = 20, columnDefinition = "varchar(20)", nullable = false)
    String surname;
    @Column(nullable = false)
    String password;
    @Column(length = 25, columnDefinition = "varchar(25)", nullable = false, unique = true)
    String email;

    @Column
    String role;

    @Column
    @Builder.Default
    private boolean enabled = true;

    @CreationTimestamp
    Timestamp creationDate;
    @UpdateTimestamp
    Timestamp updateDate;

}
