package pl.espeo.rest;

import java.util.*;
import javax.websocket.server.PathParam;
import pl.espeo.model.Avenger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AvengerController {
    
    public final Map<String, List<Avenger>> avengers;

    public AvengerController() {
        this.avengers = new HashMap<>();
    }
    
    @RequestMapping("{who}/avengers")
    public List<Avenger> greeting(@PathParam("who") String who) {
        return Collections.EMPTY_LIST;
    }
}
