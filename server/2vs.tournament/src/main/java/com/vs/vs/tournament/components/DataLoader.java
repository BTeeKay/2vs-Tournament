package com.vs.vs.tournament.components;

import com.vs.vs.tournament.models.Game;
import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.models.Round;
import com.vs.vs.tournament.models.Tournament;
import com.vs.vs.tournament.repository.GameRepository;
import com.vs.vs.tournament.repository.PlayerRepository;
import com.vs.vs.tournament.repository.RoundRepository;
import com.vs.vs.tournament.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    GameRepository gameRepository;

    @Autowired
    RoundRepository roundRepository;

    @Autowired
    TournamentRepository tournamentRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

    Player player1 = new Player("Gary");
    playerRepository.save(player1);
    Player player2 = new Player("Mark");
    playerRepository.save(player2);
    Player player3 = new Player("Hary");
    playerRepository.save(player3);
    Player player4 = new Player("Lary");
    playerRepository.save(player4);


    Game game1 = new Game("Game 1");
    gameRepository.save(game1);
    Game game2 = new Game("Game 2");
    gameRepository.save(game2);
    Game game3 = new Game("Game 3");
    gameRepository.save(game3);



    Round round1 = new Round("Semi-Final", 2);
    roundRepository.save(round1);

    Round round2 = new Round("Final", 1);
    roundRepository.save(round2);
    round1.addGame(game1);
    round1.addGame(game2);
    round2.addGame(game3);
    gameRepository.save(game1);
    gameRepository.save(game2);
    gameRepository.save(game3);
    roundRepository.save(round1);

    roundRepository.save(round2);

    Tournament tournament = new Tournament("dataloader tournament", 2);
    tournamentRepository.save(tournament);

    game1.setPlayer1(player1);
    game1.setPlayer2(player2);
    gameRepository.save(game1);
    playerRepository.save(player1);
    playerRepository.save(player2);

    game2.setPlayer1(player3);
    game2.setPlayer2(player4);
    gameRepository.save(game2);
    playerRepository.save(player3);
    playerRepository.save(player4);

    game1.setWinner(player1);
    gameRepository.save(game1);
    game2.setWinner(player3);
    gameRepository.save(game2);

    round1.isFinished();
    roundRepository.save(round1);

    List<Player> winners = round1.getWinners();

    game3.setPlayer1(winners.get(0));
    game3.setPlayer2(winners.get(1));
    playerRepository.save(winners.get(0));
    playerRepository.save(winners.get(1));
    gameRepository.save(game3);
    playerRepository.save(player4);

        ArrayList<Player> players = new ArrayList<>();
        players.add(player1);
        players.add(player2);
        players.add(player3);
        players.add(player4);

//        Tournament tournament = new Tournament("test", 2);
        tournament.createTournament(tournament,players);
        tournamentRepository.save(tournament);


//    Game game1 = new Game("Game 1");
//    gameRepository.save(game1);
//    Game game2 = new Game("Game 2");
//    gameRepository.save(game2);
//    Game game3 = new Game("Game 3");
//    gameRepository.save(game3);
//
////    Round round = new Round("test",2);
////    Game game = new Game("test");
////    round.addGame(game);
////    roundRepository.save(round);
//
//
//
//
//
//    Round round1 = new Round("Semi-Final", 2);
//    roundRepository.save(round1);
//
//    Round round2 = new Round("Final", 1);
//    roundRepository.save(round2);
//    round1.addGame(game1);
//    round1.addGame(game2);
//    round2.addGame(game3);
//    gameRepository.save(game1);
//    gameRepository.save(game2);
//    gameRepository.save(game3);
//    roundRepository.save(round1);
//
//    roundRepository.save(round2);
//
//    Tournament tournament = new Tournament("dataloader tournament", 2);
//    tournament.setRound1(round1);
//    tournament.setRound2(round2);
//    tournamentRepository.save(tournament);
//
//    game1.setPlayer1(player1);
//    game1.setPlayer2(player2);
//    gameRepository.save(game1);
//    playerRepository.save(player1);
//    playerRepository.save(player2);
//
//    game2.setPlayer1(player3);
//    game2.setPlayer2(player4);
//    gameRepository.save(game2);
//    playerRepository.save(player3);
//    playerRepository.save(player4);
//
//    game1.setWinner(player1);
//    gameRepository.save(game1);
//    game2.setWinner(player4);
//    gameRepository.save(game2);
//    playerRepository.save(player1);
//    playerRepository.save(player2);
//    playerRepository.save(player3);
//    playerRepository.save(player4);
//
//    round1.isFinished();
//    roundRepository.save(round1);
//
//    List<Player> winners = round1.getWinners();
//
//    game3.setPlayer1(winners.get(0));
//    game3.setPlayer2(winners.get(1));
//    playerRepository.save(winners.get(0));
//    playerRepository.save(winners.get(1));
//    gameRepository.save(game3);
//    game3.setWinner(winners.get(0));
//    gameRepository.save(game3);
//    playerRepository.save(winners.get(0));
//    playerRepository.save(winners.get(1));









    }
}
