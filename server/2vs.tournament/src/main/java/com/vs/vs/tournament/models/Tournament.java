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

    @OneToMany
    private List<Round> rounds;

    private int noOfRounds;

    public Tournament(String name, int noOfRounds) {
        this.name = name;
        this.noOfRounds = noOfRounds;
        this.rounds = new ArrayList<>();
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

    public List<Round> getRounds() {
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
            Round round = new Round("", i + 1);
            rounds.add(round);
        }

        t.setRounds(rounds);

        if (t.getRounds().size() == 4) {
            t.getRounds().get(0).setName("Final");
            t.getRounds().get(1).setName("Semi-Final");
            t.getRounds().get(2).setName("Quarter-Final");
            t.getRounds().get(3).setName("First Round");
            t.setNoOfRounds(4);
        }

        if (t.getRounds().size() == 3) {
            t.getRounds().get(0).setName("Final");
            t.getRounds().get(1).setName("Semi-Final");
            t.getRounds().get(2).setName("Quarter-Final");
            t.setNoOfRounds(3);
        }

        if (t.getRounds().size() == 2) {
            t.getRounds().get(0).setName("Final");
            t.getRounds().get(1).setName("Semi-Final");
            t.setNoOfRounds(2);
            Game g1 = new Game("bear");
            Game g2 = new Game("river");
            Game g3 = new Game("fish");
            t.getRounds().get(0).addGame(g1);
            t.getRounds().get(1).addGame(g2);
            t.getRounds().get(1).addGame(g3);
        }

        if (t.getRounds().size() == 1) {
            t.setNoOfRounds(1);
            t.getRounds().get(0).setName("Final");
            Game g1 = new Game("cat");
            t.getRounds().get(0).addGame(g1);
        }

    }
}
