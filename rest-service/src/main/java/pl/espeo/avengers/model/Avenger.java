package pl.espeo.avengers.model;

import java.util.List;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Avenger {

    private String id;
    @NotNull
    @Size(min = 4)
    private String name;
    @NotNull
    @Size(min = 4)
    private String realName;
    private String species;
    private String origin;
    private boolean hasOwnSuperPowers;
    private List<String> abilities;
    private List<String> createdBy;
    private String avatarURL;
}
