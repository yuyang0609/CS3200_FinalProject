package database_design.project.repositories;

import database_design.project.models.Literature;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LiteratureRepository extends CrudRepository<Literature, Integer> {

    @Query(value = "SELECT * FROM literature", nativeQuery = true)
    public List<Literature> findAllLiteratures();

    @Query(value = "SELECT * FROM literature WHERE id=:literatureId", nativeQuery = true)
    public Literature findLiteratureById(@Param("literatureId") Integer id);

    @Query(value = "SELECT * FROM literature where writer_id=:writerId", nativeQuery = true)
    public List<Literature> findLiteraturesByWriterId(@Param("writerId") Integer id);

}
