package com.jwalterwilkos.choicehistorian.service;

import com.jwalterwilkos.choicehistorian.enums.MonthStr;
import com.jwalterwilkos.choicehistorian.model.Game;
import com.jwalterwilkos.choicehistorian.repository.GameRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class GameService {
    private GameRepository gameRepository;

    public Game addGame(Game game){
        return gameRepository.save(game);
    }

    public List<Game> findAllGames(){return gameRepository.findAll();}

    public List<Game> findGamesByMonthAndYear(MonthStr month, Integer year){
        return gameRepository.findGamesByMonthAndYear(month, year);
    }

    public List<Game> findGamesByYear(Integer year){
        return gameRepository.findGamesByYear(year);
    }

    public Game updateGame(Game game){return gameRepository.save(game);}

    @Transactional
    public void deleteGame(Long id){gameRepository.deleteById(id);}
}
