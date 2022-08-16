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


    @Column(name="player_1_prob")
    private float player1Prob;

    @Column(name="player_2_prob")
    private float player2Prob;

    public Game(String name) {
        this.name = name;
        this.player1 = null;
        this.player2 = null;
        this.winner = null;
        this.round = null;
        this.player1Prob = 0;
        this.player2Prob = 0;
    }

    public Game() {

    }


    public double getPlayer1Prob() {
        return player1Prob;
    }

    public void setPlayer1Prob() {
        if(player1 != null & player2 != null){
            float d = player1.getRating()+player2.getRating();
            float probability = player1.getRating()/d;
            this.player1Prob = probability;
        } else {this.player1Prob = 0;}
    }

    public double getPlayer2Prob() {
        return player2Prob;
    }

    public void setPlayer2Prob() {
        if(player1 != null & player2 != null){
            float d = player1.getRating()+player2.getRating();
            float probability = player2.getRating()/d;
            this.player2Prob = probability;
        } else {this.player2Prob = 0;}
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
        this.setPlayer1Prob();
        this.setPlayer2Prob();
    }

    public Player getPlayer2() {
        return player2;

    }

    public void setPlayer2(Player player2) {
        this.player2 = player2;
        player2.setGame(this);
        this.setPlayer1Prob();
        this.setPlayer2Prob();
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
            changeRating(winner);
        }
    }



    public void changeRating(Player winner){

        if (winner.getName() == player1.getName()) {
            double d1 = 1 - getPlayer1Prob();
            double d2 = 32 * d1;
            int newRating = (int) (winner.getRating() + d2);
            winner.setRating(newRating);

            double d3 = 0 - getPlayer2Prob();
            double d4 = 32 * d3;
            newRating = (int)(player2.getRating() + d4);
            player2.setRating(newRating);
        } else {
            double d1 = 1 - getPlayer2Prob();
            double d2 = 32 * d1;
            int newRating = (int) (player2.getRating() + d2);
            player2.setRating(newRating);

            double d3 = 0 - getPlayer1Prob();
            double d4 = 32 * d3;
            newRating = (int)(player1.getRating() + d4);
            player1.setRating(newRating);
        }

    };

}
