package com.jwalterwilkos.choicehistorian.controller;

import com.jwalterwilkos.choicehistorian.enums.MonthStr;
import com.jwalterwilkos.choicehistorian.model.Game;
import com.jwalterwilkos.choicehistorian.service.GameService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class GameController {
    private GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/allGames")
    public ResponseEntity<List<Game>> getAllGames() {
        List<Game> games = gameService.findAllGames();
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @GetMapping("/month/{month}/{year}")
    public ResponseEntity<List<Game>> getMonth(@PathVariable("month") MonthStr month, @PathVariable("year") Integer year) {
        List<Game> games = gameService.findGamesByMonthAndYear(month, year);
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @GetMapping("/year/{year}")
    public ResponseEntity<List<Game>> getYear(@PathVariable("year") Integer year) {
        List<Game> games = gameService.findGamesByYear(year);
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @PostMapping("/addGame")
    public ResponseEntity<Game> addGame(@RequestBody Game game){
        Game newGame = gameService.addGame(game);
        return new ResponseEntity<>(newGame, HttpStatus.OK);
    }

    @PutMapping("/updateGame")
    public ResponseEntity<Game> updateGame(@RequestBody Game game){
        Game updateGame = gameService.updateGame(game);
        return new ResponseEntity<>(updateGame, HttpStatus.OK);
    }



    @DeleteMapping("/deleteGame/{id}")
    public ResponseEntity<?> deleteGame(@PathVariable("id") Long id) {
        gameService.deleteGame(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
