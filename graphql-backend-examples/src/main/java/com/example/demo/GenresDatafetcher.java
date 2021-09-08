package com.example.demo;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;

import java.util.List;
import java.util.stream.Collectors;

import java.util.logging.*;

@DgsComponent
public class GenresDatafetcher {
    Logger logger = Logger.getLogger(GenresDatafetcher.class.getName());

    private final List<Genre> genres = List.of(
            new Genre("Action"),
            new Genre("Anime"),
            new Genre("Award-Winning"),
            new Genre("Children & Family"),
            new Genre("Comedies")
    );

    @DgsQuery
    public List<Genre> genres(@InputArgument String labelFilter) {
        logger.info("QUERY executed - Genres value is: " + genres.get(0).getValue());

        if(labelFilter == null) {
            return genres;
        }

        return genres.stream().filter(s -> s.getValue().contains(labelFilter)).collect(Collectors.toList());
    }

}