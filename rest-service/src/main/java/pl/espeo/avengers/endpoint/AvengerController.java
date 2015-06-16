package pl.espeo.avengers.endpoint;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import pl.espeo.avengers.model.Avenger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import pl.espeo.avengers.ex.ListNotInitializedException;
import pl.espeo.avengers.logic.AvengerSecretSource;

@RestController
public class AvengerController {

    public final Map<String, Map<String, Avenger>> avengers;

    @Autowired
    public AvengerSecretSource avengerSecterSource;

    public AvengerController() {
        this.avengers = new HashMap<>();
    }

    @RequestMapping(value = "/{who}/avengers", method = RequestMethod.GET)
    public Collection<Avenger> all(@PathVariable("who") String who) {
        if (avengers.containsKey(who)) {
            return avengers.get(who).values();
        }
        Map<String, Avenger> avengersTeam = avengerSecterSource.freshAvengersTeam();
        avengers.put(who, avengersTeam);
        return avengersTeam.values();
    }

    @RequestMapping(value = "/{who}/avengers/{id}", method = RequestMethod.GET)
    public ResponseEntity<Avenger> one(@PathVariable("who") String who, @PathVariable("id") String id) {
        if (!avengers.containsKey(who)) {
            throw new ListNotInitializedException();
        }
        Avenger avenger = avengers.get(who).get(id);

        return avenger != null ? new ResponseEntity<>(avenger, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/{who}/avengers", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED) 
    public void create(@PathVariable("who") String who, @RequestBody Avenger avenger) {
        if (!avengers.containsKey(who)) {
            throw new ListNotInitializedException();
        }
        
        avenger.setId(UUID.randomUUID().toString());
        avengers.get(who).put(avenger.getId(), avenger);
    }

    @RequestMapping(value = "/{who}/avengers/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK) 
    public void update(@PathVariable("who") String who, @PathVariable("id") String id, @RequestBody Avenger avenger) {
        if (!avengers.containsKey(who)) {
            throw new ListNotInitializedException();
        }
        avengers.get(who).put(id, avenger);
    }
}
