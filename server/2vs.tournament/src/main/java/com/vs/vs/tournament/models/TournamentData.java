package com.vs.vs.tournament.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tournamentdata")
public class TournamentData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int numOfRounds;
    @OneToMany
    @Cascade(org.hibernate.annotations.CascadeType.MERGE)
    private List<Player> players;

    public TournamentData(String name, int numOfRounds, List<Player> players) {
        this.name = name;
        this.numOfRounds = numOfRounds;
        this.players = players;
    }

    public TournamentData() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumOfRounds() {
        return numOfRounds;
    }

    public void setNumOfRounds(int numOfRounds) {
        this.numOfRounds = numOfRounds;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
