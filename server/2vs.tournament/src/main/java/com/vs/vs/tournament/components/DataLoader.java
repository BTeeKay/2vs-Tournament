package com.vs.vs.tournament.components;

import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.repository.PlayerRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRespository playerRespository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
    Player player1 = new Player("Gary");
    playerRespository.save(player1);
    }
}
