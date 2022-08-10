package com.vs.vs.tournament.controller;

import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.models.Tournament;
import com.vs.vs.tournament.models.TournamentData;
import com.vs.vs.tournament.repository.PlayerRespository;
import com.vs.vs.tournament.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin
public class TournamentController {

    @Autowired
    TournamentRepository tournamentRepository;

    @GetMapping(value = "/tournament")
    public ResponseEntity<List<Tournament>> getAllPlayers() {
        return new ResponseEntity<>(tournamentRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/tournament")
    public ResponseEntity<Tournament> postTournament(@RequestBody TournamentData data){
        Tournament t = new Tournament(data.getName(), data.getNumOfRounds());
        t.createTournament(t, data.getPlayers());
        tournamentRepository.save(t);
        return new ResponseEntity<>(t, HttpStatus.CREATED);
    }
}
