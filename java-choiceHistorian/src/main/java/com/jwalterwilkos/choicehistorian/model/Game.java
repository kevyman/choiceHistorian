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

    @Column(nullable = false, length = 100)
    private String name;

    @Enumerated(EnumType.STRING)
    private MonthStr month;

    @Column(nullable = false, length = 100)
    private Integer year;

    @Column(nullable = false, length = 100)
    private String humbleLink;

    @Column(nullable = false, length = 100)
    private LocalDateTime bundleReleaseDate;


    @Column(nullable = true, length = 100)
    private Integer steamID;

    @Column(nullable = true, length = 100)
    private String steamHeaderUrl;

    @Column(nullable = true, length = 100)
    private Boolean steamCards;

    @Column(nullable = true, length = 100)
    private String steamLink;


    @Column(nullable = true, length = 100)
    private Double steamPositiveVotes;

    @Column(nullable = true, length = 100)
    private Double steamNegativeVotes;

    @Column(nullable = true, length = 100)
    private Integer steamDBScore;


    @Column(nullable = true, length = 100)
    private LocalDateTime gameReleaseDate;

    @Column(nullable = true, length = 100)
    private String gameAgeAtBundleRelease;

    @Column(nullable = true, length = 100)
    private Double gameAgeInSeconds;

    @Column(nullable = true, length = 100)
    private Double lowestPrice;

    @Column(nullable = true, length = 100)
    private Integer largestCut;

    @Column(nullable = true, length = 100)
    private Double fullPrice;

    @Column(nullable = true, length = 100)
    private Integer timesBundled;

    @Column(nullable = true, length = 100)
    private String itadlink;

    @Column(nullable = true, length = 100)
    private Integer metacriticScore;

    @Column(nullable = true, length = 100)
    private String metacriticLink;

    @Column(nullable = true, length = 100)
    private Double howLongToBeat;

}
