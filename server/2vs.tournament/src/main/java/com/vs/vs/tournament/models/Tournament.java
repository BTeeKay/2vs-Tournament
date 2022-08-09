package com.vs.vs.tournament.models;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tournament")
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @OneToOne
    @JoinColumn(name = "round_1_id")
    private Round round1;
    @OneToOne
    @JoinColumn(name = "round_2_id")
    private Round round2;

    private ArrayList<Round> rounds;

    private int noOfRounds;

    public Tournament(String name, int num) {
        this.name = name;
        this.noOfRounds = num;
    }
    public Tournament(){}
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Round getRound2() {
        return round2;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRound2(Round round2) {
        this.round2 = round2;
    }

    public Round getRound1() {
        return round1;
    }

    public void setRound1(Round round1) {
        this.round1 = round1;
    }

    public ArrayList<Round> getRounds() {
        return rounds;
    }

    public void setRounds(ArrayList<Round> rounds) {
        this.rounds = rounds;
    }

    public int getNoOfRounds() {
        return noOfRounds;
    }

    public void setNoOfRounds(int noOfRounds) {
        this.noOfRounds = noOfRounds;
    }

    public void createTournament(Tournament t, List<Player> players) {
        int counter = t.getNoOfRounds();
        ArrayList<Round> rounds = new ArrayList<>();

        for (int i = 0; i < counter; i++) {
            Round round = new Round();
            rounds.add(round);
        }

        t.setRounds(rounds);
    }
}
