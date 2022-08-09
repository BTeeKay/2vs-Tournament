package com.vs.vs.tournament.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
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
    @JsonIgnoreProperties({"round"})
    @OneToMany(mappedBy = "round", fetch=FetchType.LAZY)
    private List<Game> games;

    @OneToMany
    @JsonIgnoreProperties({"game"})
    @JoinColumn(name = "winner_player_id", nullable = true)
    private List<Player> winners;
    @OneToMany
    @JoinColumn(name = "loser_player_id", nullable = true)
    private List<Player> losers;
    @Column(name = "finished")
    private boolean finished;

    public Round(String name, int numOfGames) {
        this.name = name;
        this.numOfGames = numOfGames;
        this.games = new ArrayList<>();
        this.winners = new ArrayList<>();
        this.losers = new ArrayList<>();
        this.finished = false;
    }

    public Round() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<Player> getWinners() {
        return winners;
    }

    public void setWinners(List<Player> winners) {
        this.winners = winners;
    }

    public List<Player> getLosers() {
        return losers;
    }

    public void setLosers(List<Player> losers) {
        this.losers = losers;
    }

    public boolean isFinished() {
        if (this.numOfGames == this.winners.size()){
            this.finished = true;
        }
        return finished;
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }

    public void addGame(Game game) {
        this.games.add(game);
        game.setRound(this);
    }
    public void addWinner(Player winner){
        winners.add(winner);
    }
}
