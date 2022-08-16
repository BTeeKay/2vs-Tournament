package com.vs.vs.tournament.repository;

import com.vs.vs.tournament.models.TournamentData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TournamentDataRepository extends JpaRepository<TournamentData, Long> {
}
