package com.vs.vs.tournament.controller;

import com.vs.vs.tournament.models.Game;
import com.vs.vs.tournament.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
}
