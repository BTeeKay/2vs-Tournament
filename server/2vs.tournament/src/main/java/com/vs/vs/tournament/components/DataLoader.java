package com.vs.vs.tournament.components;

import com.vs.vs.tournament.models.Game;
import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.models.Round;
import com.vs.vs.tournament.repository.GameRepository;
import com.vs.vs.tournament.repository.PlayerRespository;
import com.vs.vs.tournament.repository.RoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRespository playerRespository;

    @Autowired
    GameRepository gameRepository;

    @Autowired
    RoundRepository roundRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

    Player player1 = new Player("Gary");
    playerRespository.save(player1);
    Player player2 = new Player("Mark");
    playerRespository.save(player2);
    Player player3 = new Player("Hary");
    playerRespository.save(player3);
    Player player4 = new Player("Lary");
    playerRespository.save(player4);


    Game game1 = new Game();
    gameRepository.save(game1);
    Game game2 = new Game();
    gameRepository.save(game2);



    Round round1 = new Round("Semi-Final", 2);
    roundRepository.save(round1);

    List<Player> players = playerRespository.findAll();
    game1.setPlayer1(players.get(0));
    game1.setPlayer2(players.get(1));
    gameRepository.save(game1);
    playerRespository.save(player1);

    game2.setPlayer1(players.get(2));
    game2.setPlayer2(players.get(3));
    gameRepository.save(game2);
    List<Game> games = gameRepository.findAll();

    round1.setGames(games);
    roundRepository.save(round1);

    game1.setWinner(player1);
    gameRepository.save(game1);
    game2.setWinner(player4);
    gameRepository.save(game2);




    }
}
