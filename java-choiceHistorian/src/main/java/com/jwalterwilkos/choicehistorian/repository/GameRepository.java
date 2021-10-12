package com.jwalterwilkos.choicehistorian.repository;

import com.jwalterwilkos.choicehistorian.enums.MonthStr;
import com.jwalterwilkos.choicehistorian.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepository  extends JpaRepository<Game, Long> {
    List<Game> findGamesByMonthAndYear(MonthStr month, Integer year);

    List<Game> findGamesByYear(Integer year);
}
