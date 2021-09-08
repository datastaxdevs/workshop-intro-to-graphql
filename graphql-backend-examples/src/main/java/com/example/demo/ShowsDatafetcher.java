package com.example.demo;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;

import java.util.List;
import java.util.stream.Collectors;

import java.util.logging.*;

@DgsComponent
public class ShowsDatafetcher {
    Logger logger = Logger.getLogger(ShowsDatafetcher.class.getName());

    private final List<Show> shows = List.of(
            new Show("Stranger Things", 2016),
            new Show("Ozark", 2017),
            new Show("The Crown", 2016),
            new Show("Dead to Me", 2019),
            new Show("Orange is the New Black", 2013)
    );

    @DgsQuery
    public List<Show> shows(@InputArgument String titleFilter) {
        logger.info("QUERY executed - Shows title is: " + shows.get(0).getTitle());

        if(titleFilter == null) {
            return shows;
        }

        return shows.stream().filter(s -> s.getTitle().contains(titleFilter)).collect(Collectors.toList());
    }

}