package com.vs.vs.tournament;

import com.vs.vs.tournament.models.Game;
import com.vs.vs.tournament.models.Player;
import com.vs.vs.tournament.repository.GameRepository;
import com.vs.vs.tournament.repository.PlayerRespository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class ApplicationTests {

	@Autowired
	PlayerRespository playerRespository;
	@Autowired
	GameRepository gameRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void gameCanAddPlayers() {
		Game game1 = gameRepository.findById(1l).orElse(null);
		List<Player> players = playerRespository.findAll();
		assert game1 != null;
		game1.setPlayer1(players.get(0));
		game1.setPlayer2(players.get(1));
		assertNotNull(game1.getPlayer1());
		assertNotNull(game1.getPlayer2());
	}

}
