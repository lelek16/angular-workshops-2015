package pl.espeo.avengers.ex;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="List of Avengers should be initialized first") 
public class ListNotInitializedException extends RuntimeException {

}
