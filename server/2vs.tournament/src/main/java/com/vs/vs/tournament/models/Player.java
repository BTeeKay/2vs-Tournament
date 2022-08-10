package com.vs.vs.tournament.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="players")
public class Player {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;


    @OneToOne
    @JsonIgnoreProperties({"player1", "player2", "round", "winner"})
    @JoinColumn(name = "game_id", nullable = true)
    private Game game;

    @Column(name = "rating")
    private int rating;



    public Player(String name) {
        this.name = name;
        this.game = null;
        this.rating = 1200;
    }

    public Player(){}

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
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

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }
}
