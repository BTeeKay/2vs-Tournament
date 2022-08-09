package com.vs.vs.tournament.models;


import javax.persistence.*;

@Entity
@Table(name = "tournament")
public class Tournament {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    @JoinColumn(name = "round_1_id")
    private Round round1;
    @OneToOne
    @JoinColumn(name = "round_2_id")
    private Round round2;

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

    public void setRound2(Round round2) {
        this.round2 = round2;
    }

    public Round getRound1() {
        return round1;
    }

    public void setRound1(Round round1) {
        this.round1 = round1;
    }
}
