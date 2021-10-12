package com.jwalterwilkos.choicehistorian.model;

import com.jwalterwilkos.choicehistorian.enums.MonthStr;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private MonthStr month;

    private Integer year;

    private String humbleLink;

    private LocalDateTime bundleReleaseDate;


    private Double steamID;

    private String steamHeaderLink;

    private Boolean steamCards;

    private String steamLink;


    private Double steamPositiveVotes;

    private Double steamNegativeVotes;

    private Integer steamDBScore;


    private LocalDateTime gameReleaseDate;

    private String gameAgeAtBundleRelease;

    private Double gameAgeTimestamp;


    private Double lowestPrice;

    private Integer largestCut;

    private Double fullPrice;

    private Integer timesBundled;

    private String ITADLink;


    private Integer metacriticScore;

    private String metacriticLink;


    private Double howLongToBeat;

}
