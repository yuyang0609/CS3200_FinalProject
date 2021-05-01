package database_design.project.repositories;

import database_design.project.models.Writer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WriterRepository extends CrudRepository<Writer, Integer> {

    @Query(value = "SELECT * FROM writer", nativeQuery = true)
    public List<Writer> findAllWriters();

    @Query(value = "SELECT * FROM writer WHERE id=:writerId", nativeQuery = true)
    public Writer findWriterById(@Param("writerId") Integer id);

    @Query(value = "SELECT * FROM writer WHERE user_id=:userId", nativeQuery = true)
    public List<Writer> findWritersByUserId(@Param("userId") Integer id);
}
