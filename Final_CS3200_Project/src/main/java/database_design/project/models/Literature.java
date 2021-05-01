package database_design.project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "literature")
public class Literature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    @Enumerated(EnumType.STRING)
    private Genre genre;
    public Genre getGenre() { return genre; }
    public void setGenre(Genre genre) { this.genre = genre; }

    @ManyToOne
    @JsonIgnore
    private Writer writer;
    public Writer getWriter() { return writer; }
    public void setWriter(Writer writer) { this.writer = writer; }

    public Literature(Integer id, String title, Genre genre, Writer writer) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.writer = writer;
    }

    public Literature() {}

}
