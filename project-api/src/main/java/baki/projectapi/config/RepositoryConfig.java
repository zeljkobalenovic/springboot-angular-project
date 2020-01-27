package baki.projectapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import baki.projectapi.models.ToDo;

/**
 * RepositoryConfig
 */
@Configuration
 public class RepositoryConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(ToDo.class);
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config);
    }

    
    
}