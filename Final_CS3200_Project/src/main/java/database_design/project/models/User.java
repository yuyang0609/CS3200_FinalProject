package database_design.project.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }


    public String getFirstName() { return firstName; }

    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }

    public void setLastName(String lastName) { this.lastName = lastName; }


    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }


    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }


    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateOfBirth;
    public Date getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    private String writerName;
    public String getWriterName() { return writerName; }
    public void setWriterName(String writerName) { this.writerName = writerName; }

    public User(Integer id, String firstName, String lastName, String username,
                  String password, String email, Date dateOfBirth, String writerName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.writerName = writerName;
    }

    public User() {}

}
