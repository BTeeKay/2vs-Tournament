package com.vs.vs.tournament.controller;

import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.repository.PlayerRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class PlayerController {

    @Autowired
    PlayerRespository playerRespository;

    @GetMapping(value = "/players")
    public ResponseEntity<List<Player>> getAllPlayers() {
        return new ResponseEntity<>(playerRespository.findAll(), HttpStatus.OK);
    }


}
