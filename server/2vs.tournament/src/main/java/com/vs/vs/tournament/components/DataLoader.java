package com.vs.vs.tournament.components;

import com.vs.vs.tournament.models.Game;
import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.repository.GameRepository;
import com.vs.vs.tournament.repository.PlayerRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRespository playerRespository;

    @Autowired
    GameRepository gameRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

    Player player1 = new Player("Gary");
    playerRespository.save(player1);
    Player player2 = new Player("Mark");
    playerRespository.save(player2);

    Game game1 = new Game();
    gameRepository.save(game1);
    }
}
