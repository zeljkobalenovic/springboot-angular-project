package baki.projectapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import baki.projectapi.models.ToDo;

/**
 * ToDoRepository
 */


@RepositoryRestResource(collectionResourceRel = "todo" , path = "todo")
public interface ToDoRepository extends CrudRepository<ToDo,Long> {

    
}