package br.com.cast.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import br.com.cast.movie.dto.DetalheFilmeDTO;
import br.com.cast.movie.dto.FilmeDTO;
import br.com.cast.movie.dto.RetornoMovieAPI;

@Component
public class MovieClient {

	@Autowired
	private Environment env;

	public List<FilmeDTO> getMovieDTO(String filme) {
		RestTemplate restTemplate = new RestTemplate();
		
		String appId = env.getProperty("omdb.api_key");
		String apiUrl = env.getProperty("omdb.api.title");
		
		ResponseEntity<RetornoMovieAPI> response = restTemplate.getForEntity(apiUrl, RetornoMovieAPI.class, filme, appId);
		RetornoMovieAPI retorno = response.getBody();
		return retorno.getRegistros();
	}

	public DetalheFilmeDTO getDetalhes(String imdbId) {
		RestTemplate restTemplate = new RestTemplate();
		
		String appId = env.getProperty("omdb.api_key");
		String apiUrl = env.getProperty("omdb.api.id");
		
		ResponseEntity<DetalheFilmeDTO> response = restTemplate.getForEntity(apiUrl, DetalheFilmeDTO.class, imdbId, appId);
		return response.getBody();
	}

	
}
