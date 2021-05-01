package database_design.project.daos;

import database_design.project.models.Writer;
import database_design.project.models.User;
import database_design.project.repositories.WriterRepository;
import database_design.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WriterOrmDao {
    @Autowired
    WriterRepository writerRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/writers")
    public Writer createWriter(@RequestBody Writer writer) {
        return writerRepository.save(writer);
    }

    @PostMapping("/api/users/{userId}/writers")
    public Writer createWriterForUser(@PathVariable("userId") Integer uid,
                                      @RequestBody Writer writer) {
        User user = userRepository.findUserById(uid);
        writer.setUser(user);
        return writerRepository.save(writer);
    }

    @GetMapping("/api/users/{userId}/writers")
    public List<Writer> findWritersForUser(@PathVariable("userId") Integer userId) {
        return writerRepository.findWritersByUserId(userId);
    }

    @GetMapping("/api/writers")
    public List<Writer> findAllWriters() {
        return writerRepository.findAllWriters();
    }

    @GetMapping("/api/writers/{writerId}")
    public Writer findWriterById(@PathVariable("writerId") Integer id) {
        return writerRepository.findWriterById(id);
    }

    @PutMapping("/api/writers/{writerId}")
    public Writer updateWriter(@PathVariable("writerId") Integer uid,
                             @RequestBody Writer updatedWriter) {
        Writer writer = writerRepository.findWriterById(uid);
        writer.setName(updatedWriter.getName());
        writer.setNationality(updatedWriter.getNationality());
        writer.setDateOfBirth(updatedWriter.getDateOfBirth());
        return writerRepository.save(writer);
    }

    @DeleteMapping("/api/writers/{writerId}")
    public void deleteWriter(@PathVariable("writerId") Integer id) {
        writerRepository.deleteById(id);
    }
}
