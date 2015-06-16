package pl.espeo.avengers.logic;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import org.springframework.stereotype.Service;
import pl.espeo.avengers.model.Avenger;

@Service
public class AvengerSecretSource {

    public Map<String, Avenger> freshAvengersTeam() {
        Map<String, Avenger> avengersMap = new HashMap<>();

        //Iron Man
        String ironManId = newId();
        avengersMap.put(ironManId, Avenger.builder()
            .id(ironManId)
            .name("Iron Man").realName("Anthony Edward \"Tony\" Stark")
            .origin("human").species("Earth")
            .hasOwnSuperPowers(false)
            .abilities(
                Arrays.asList(
                    "Genius-level intellect",
                    "Highly proficient scientist, engineer, and businessperson",
                    "Has powered armored suit"
                )
            )
            .createdBy(
                Arrays.asList(
                    "Stan Lee", "Larry Lieber", "Don Heck", "Jack Kirby"
                )
            )
            .avatarURL("http://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg")
            .build());

        //Hulk
        String hulkId = newId();
        avengersMap.put(hulkId, Avenger.builder()
            .id(hulkId)
            .name("Hulk").realName("Robert Bruce Banner")
            .origin("Earth").species("human mutant")
            .hasOwnSuperPowers(true)
            .abilities(
                Arrays.asList(
                    "Hulk's Smash",
                    "Invulnerability",
                    "Superhuman strength, stamina, durability, regeneration, speed and endurance"
                )
            )
            .createdBy(
                Arrays.asList(
                    "Stan Lee", "Jack Kirby"
                )
            )
            .avatarURL("http://upload.wikimedia.org/wikipedia/en/3/3e/Incredible-hulk-20060221015639117.jpg")
            .build());

        //THor
        String thorId = newId();
        avengersMap.put(thorId, Avenger.builder()
            .id(thorId)
            .name("Thor").realName("Thor Odinson")
            .origin("Asgard").species("Asgardian")
            .hasOwnSuperPowers(true)
            .abilities(
                Arrays.asList(
                    "Superhuman strength, endurance, and longevity",
                    "Has Mjolni"
                )
            )
            .createdBy(
                Arrays.asList(
                    "Stan Lee", "Larry Lieber", "Jack Kirby"
                )
            )
            .avatarURL("http://upload.wikimedia.org/wikipedia/en/4/41/Thor-272.jpg")
            .build());
        
        return avengersMap;
    }

    private String newId() {
        return UUID.randomUUID().toString();
    }

}
