package com.vs.vs.tournament.models;

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
    @JoinColumn(name = "game_id", nullable = true)
    private Game game;

    public Player(String name) {
        this.name = name;
        this.game = null;
    }

    public Player(){}

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
