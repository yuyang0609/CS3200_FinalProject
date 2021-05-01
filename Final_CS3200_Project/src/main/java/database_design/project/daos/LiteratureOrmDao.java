package database_design.project.daos;

import database_design.project.models.Literature;
import database_design.project.models.Writer;
import database_design.project.repositories.WriterRepository;
import database_design.project.repositories.LiteratureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class LiteratureOrmDao {
    @Autowired
    LiteratureRepository literatureRepository;

    @Autowired
    WriterRepository writerRepository;

    @PostMapping("/api/literatures")
    public Literature createLiterature(@RequestBody Literature literature) {
        return literatureRepository.save(literature);
    }

    @PostMapping("/api/writers/{writerId}/literatures")
    public Literature createLiteratureForWriter(@PathVariable("writerId") Integer aid,
                                   @RequestBody Literature literature) {
        Writer writer = writerRepository.findWriterById(aid);
        literature.setWriter(writer);
        return literatureRepository.save(literature);
    }

    @GetMapping("/api/writers/{writerId}/literatures")
    public List<Literature> findLiteraturesForWriter(@PathVariable("writerId") Integer aid) {
        return literatureRepository.findLiteraturesByWriterId(aid);
    }

    @GetMapping("/api/literatures")
    public List<Literature> findAllLiteratures() {
        return literatureRepository.findAllLiteratures();
    }

    @GetMapping("/api/literatures/{literatureId}")
    public Literature findLiteratureById(@PathVariable("literatureId") Integer id) {
        return literatureRepository.findLiteratureById(id);
    }

    @PutMapping("/api/literatures/{literatureId}")
    public Literature updateLiterature(@PathVariable("literatureId") Integer id,
                           @RequestBody Literature updatedLiterature) {
        Literature literature = literatureRepository.findLiteratureById(id);
        literature.setTitle(updatedLiterature.getTitle());
        literature.setGenre(updatedLiterature.getGenre());
        return literatureRepository.save(literature);
    }

    @DeleteMapping("/api/literatures/{literatureId}")
    public void deleteLiterature(@PathVariable("literatureId") Integer id) {
        literatureRepository.deleteById(id);
    }
}
