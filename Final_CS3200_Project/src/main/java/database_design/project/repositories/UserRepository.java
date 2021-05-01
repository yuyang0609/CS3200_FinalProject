package database_design.project.repositories;

import database_design.project.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {

    @Query(value = "SELECT * FROM user", nativeQuery = true)
    public List<User> findAllUsers();

    @Query(value = "SELECT * FROM user WHERE id=:userId", nativeQuery = true)
    public User findUserById(@Param("userId") Integer id);
}
