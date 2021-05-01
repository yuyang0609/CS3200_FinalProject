package database_design.project.daos;

import database_design.project.models.User;
import database_design.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserOrmDao {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/api/users")
    public List<User> findAllUsers() {
        return userRepository.findAllUsers();
    }

    @GetMapping("/api/users/{userId}")
    public User findUserById(@PathVariable("userId") Integer id) {
        return userRepository.findUserById(id);
    }

    @PutMapping("/api/users/{userId}")
    public User updateUser(@PathVariable("userId") Integer id,
                               @RequestBody User userUpdated) {
        User user = userRepository.findUserById(id);
        user.setFirstName(userUpdated.getFirstName());
        user.setLastName(userUpdated.getLastName());
        user.setUsername(userUpdated.getUsername());
        user.setPassword(userUpdated.getPassword());
        user.setEmail(userUpdated.getEmail());
        user.setDateOfBirth(userUpdated.getDateOfBirth());
        user.setWriterName(userUpdated.getWriterName());
        return userRepository.save(user);
    }

    @DeleteMapping("/api/users/{userId}")
    public void deleteUser(@PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }

}
