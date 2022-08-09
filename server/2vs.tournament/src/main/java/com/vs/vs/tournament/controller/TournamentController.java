package com.vs.vs.tournament.controller;

import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.models.Tournament;
import com.vs.vs.tournament.repository.PlayerRespository;
import com.vs.vs.tournament.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class TournamentController {

    @Autowired
    TournamentRepository tournamentRepository;

    @GetMapping(value = "/tournament")
    public ResponseEntity<List<Tournament>> getAllPlayers() {
        return new ResponseEntity<>(tournamentRepository.findAll(), HttpStatus.OK);
    }
}
