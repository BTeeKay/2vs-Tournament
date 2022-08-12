package com.vs.vs.tournament.controller;

import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.models.Tournament;
import com.vs.vs.tournament.models.TournamentData;
import com.vs.vs.tournament.repository.PlayerRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(value = "/players")
    public ResponseEntity<Player> postPlayer(@RequestBody Player player){
        playerRespository.save(player);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }


}
