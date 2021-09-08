package com.example.demo;

public class Show {
    private final String title;
    private final Integer releaseYear   ;

    public Show(String title, Integer releaseYear) {
        this.title = title;
        this.releaseYear = releaseYear;
    }

    public String getTitle() {
        return title;
    }

    public Integer getReleaseYear() {
        return releaseYear;
    }
}
