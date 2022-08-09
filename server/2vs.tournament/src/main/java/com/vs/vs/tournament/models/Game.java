package com.vs.vs.tournament.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @OneToOne
    @JsonIgnoreProperties({"game"})
    @JoinColumn(name = "player1_id", nullable = true)
    private Player player1;
    @OneToOne
    @JsonIgnoreProperties({"game"})
    @JoinColumn(name = "player2_id", nullable = true)
    private Player player2;
    @OneToOne
    @JsonIgnoreProperties({"game"})
    @JoinColumn(name = "winner_id")
    private Player winner;


    @ManyToOne
    @JsonIgnoreProperties({"games"})
    @JoinColumn(name="round_id", nullable = true)
    private Round round;



    public Game(String name) {
        this.name = name;
        this.player1 = null;
        this.player2 = null;
        this.winner = null;
        this.round = null;
    }

    public Game() {

    }



    public Round getRound() {
        return round;
    }

    public void setRound(Round round) {
        this.round = round;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Player getPlayer1() {
        return player1;
    }

    public void setPlayer1(Player player1) {

        this.player1 = player1;
        player1.setGame(this);
    }

    public Player getPlayer2() {
        return player2;

    }

    public void setPlayer2(Player player2) {
        this.player2 = player2;
        player2.setGame(this);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean canPlayMatch() {
        if (this.player1 == null) return false;
        if (this.player2 == null) return false;
        return true;
    }

    public Player getWinner() {
        return winner;
    }

    public void setWinner(Player winner) {
        if (this.canPlayMatch()) {
            this.winner = winner;
            this.round.addWinner(winner);
        }
    }
}
