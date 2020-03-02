package models;

import com.avaje.ebean.Model;

import javax.persistence.*;
import java.util.Calendar;

@Entity
public class CentroDeCusto extends Model {

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false, length = 10)
    private String nome;

    @Column(nullable = false, length = 45)
    private String nomeCC;

    @Column(nullable = false, length = 45)
    private String gestorCC;

    @ManyToOne
    private FontePagadora fontePagadora;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Calendar dataCadastro;

    @Temporal(TemporalType.TIMESTAMP)
    private Calendar dataAlteracao;

    /*-------------------------------------------------------------------
     *				 		   GETTERS AND SETTERS
     *-------------------------------------------------------------------*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNomeCC() {
        return nomeCC;
    }

    public void setNomeCC(String nomeCC) {
        this.nomeCC = nomeCC;
    }

    public String getGestorCC() {
        return gestorCC;
    }

    public void setGestorCC(String gestorCC) {
        this.gestorCC = gestorCC;
    }

    public FontePagadora getFontePagadora() {
        return fontePagadora;
    }

    public void setFontePagadora(FontePagadora fontePagadora) {
        this.fontePagadora = fontePagadora;
    }

    public Calendar getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Calendar dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public Calendar getDataAlteracao() {
        return dataAlteracao;
    }

    public void setDataAlteracao(Calendar dataAlteracao) {
        this.dataAlteracao = dataAlteracao;
    }
}