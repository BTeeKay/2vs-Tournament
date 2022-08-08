package com.vs.vs.tournament;

import com.vs.vs.tournament.models.Game;
import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.models.Round;
import com.vs.vs.tournament.repository.GameRepository;
import com.vs.vs.tournament.repository.PlayerRespository;
import com.vs.vs.tournament.repository.RoundRepository;


import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ApplicationTests {

	@Autowired
	PlayerRespository playerRespository;
	@Autowired
	GameRepository gameRepository;

	@Autowired
	RoundRepository roundRepository;






	@Test
	void contextLoads() {
	}

//	@Test
//	public void gameCanAddPlayers() {
//		Game game1 = gameRepository.findById(1l).orElse(null);
//		List<Player> players = playerRespository.findAll();
//		assert game1 != null;
//		game1.setPlayer1(players.get(0));
//		game1.setPlayer2(players.get(1));
//		assertNotNull(game1.getPlayer1());
//		assertNotNull(game1.getPlayer2());
//	}

//	@Test
//	public void canAddGamesToRound(){
//		Round round1 = roundRepository.findById(1l).orElse(null);
//		List<Game> games = gameRepository.findAll();
//		assert round1 != null;
//		round1.setGames(games);
//		assertEquals(2, round1.getGames().size());
//	}

	@Test
	public void roundIsComplete(){
		Round round1 = roundRepository.findById(1l).orElse(null);
		assert round1 != null;
		assertTrue(round1.isFinished());


	}

}
