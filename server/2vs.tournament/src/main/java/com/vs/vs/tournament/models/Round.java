package com.vs.vs.tournament.models;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "rounds")
public class Round {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "numOfGames")
    private int numOfGames;
    @ManyToOne
    @JoinColumn(name = "game_id")
    private List<Game> games;
    @ManyToOne
    @JoinColumn(name = "winner_id")
    private List<Winner> winners;
    @ManyToOne
    @JoinColumn(name = "loser_id")
    private List<Loser> losers;
    @Column(name = "finished")
    private boolean finished;

    public Round(String name, int numOfGames) {
        this.name = name;
        this.numOfGames = numOfGames;
        this.games = null;
        this.winners = null;
        this.losers = null;
        this.finished = false;
    }

    public Round() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumOfGames() {
        return numOfGames;
    }

    public void setNumOfGames(int numOfGames) {
        this.numOfGames = numOfGames;
    }

    public List<Game> getGames() {
        return games;
    }

    public void setGames(List<Game> games) {
        this.games = games;
    }

    public List<Winner> getWinners() {
        return winners;
    }

    public void setWinners(List<Winner> winners) {
        this.winners = winners;
    }

    public List<Loser> getLosers() {
        return losers;
    }

    public void setLosers(List<Loser> losers) {
        this.losers = losers;
    }

    public boolean isFinished() {
        return finished;
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }
}
