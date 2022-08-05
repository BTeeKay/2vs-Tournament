package com.vs.vs.tournament.repository;

import com.vs.vs.tournament.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRespository extends JpaRepository<Player, Long> {
}
