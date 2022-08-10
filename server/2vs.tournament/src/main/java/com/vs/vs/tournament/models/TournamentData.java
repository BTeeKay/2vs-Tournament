package com.vs.vs.tournament.models;

import java.util.List;

public class TournamentData {

    private String name;
    private int numOfRounds;
    private List<Player> players;

    public TournamentData(String name, int numOfRounds, List<Player> players) {
        this.name = name;
        this.numOfRounds = numOfRounds;
        this.players = players;
    }

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
}
