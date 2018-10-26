package br.com.cast.movie.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import br.com.cast.movie.entity.Filme;

public class FilmeDTO {

	@JsonProperty("imdbID")
	private String id;
	
	@JsonProperty("Title")
	private String titulo;

	@JsonProperty("Year")
	private String ano;
	
	@JsonProperty("Poster")
	private String urlImagem;
	
	@JsonProperty("Detail")
	private DetalheFilmeDTO detalheFilmeDTO;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAno() {
		return ano;
	}

	public void setAno(String ano) {
		this.ano = ano;
	}

	public String getUrlImagem() {
		return urlImagem;
	}

	public void setUrlImagem(String urlImagem) {
		this.urlImagem = urlImagem;
	}

	public DetalheFilmeDTO getDetalheFilmeDTO() {
		return detalheFilmeDTO;
	}

	public void setDetalheFilmeDTO(DetalheFilmeDTO detalheFilmeDTO) {
		this.detalheFilmeDTO = detalheFilmeDTO;
	}

	public static FilmeDTO fromEntidade(Filme f) {
		if (f == null) return null;
		
		FilmeDTO dto = new FilmeDTO();
		dto.setId(f.getId());
		dto.setAno(f.getAno());
		dto.setTitulo(f.getTitulo());
		dto.setUrlImagem(f.getUrlImagem());
		dto.setDetalheFilmeDTO(DetalheFilmeDTO.fromEntidade(f.getDetalheFilme()));
		return dto;
	}

}
