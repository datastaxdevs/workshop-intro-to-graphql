package com.example.demo;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@SpringBootApplication
public class DemoApplication {
    Logger logger = Logger.getLogger(DemoApplication.class.getName());

    @Value("${JAVA_GRAPHQL_ENDPOINT}")
    private String graphQLEndpoint;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	/*
    * No cors origin global setting.
    */
    @Bean
    public WebMvcConfigurer corsConfigurer() {

        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                logger.info("GraphQL endpoint is: " + graphQLEndpoint);
                registry.addMapping("/graphql").allowedOrigins(graphQLEndpoint);
            }
        };
    }

}
