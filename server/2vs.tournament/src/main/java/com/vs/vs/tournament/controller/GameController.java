package com.vs.vs.tournament.controller;

import com.vs.vs.tournament.models.Game;
import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@CrossOrigin
public class GameController {

    @Autowired
    GameRepository gameRepository;

    @GetMapping(value = "/games")
    public ResponseEntity<List<Game>> getAllGames() {
        return new ResponseEntity<>(gameRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/games/{id}")
    public ResponseEntity getGame(@PathVariable Long id){
        return new ResponseEntity<>(gameRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/games/{id}/win/player_1")
    public ResponseEntity<Game> selectWinner1(@PathVariable Long id){
        Game game = gameRepository.findById(id).orElse(null);
        if (game.getWinner() == null){
            Player player = game.getPlayer1();
            game.setWinner(player);
            gameRepository.save(game);}

        return new ResponseEntity<>(game, HttpStatus.OK);
    }

    @GetMapping(value = "/games/{id}/win/player_2")
    public ResponseEntity<Game> selectWinner2(@PathVariable Long id){
        Game game = gameRepository.findById(id).orElse(null);
        if (game.getWinner() == null){
            Player player = game.getPlayer2();
            game.setWinner(player);
            gameRepository.save(game);}
        return new ResponseEntity<>(game, HttpStatus.OK);
    }
}
