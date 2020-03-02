package models;

import com.avaje.ebean.Model;

import javax.persistence.*;
import java.util.Calendar;

@Entity
public class GastoEspecifico extends Model {

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Id
    @GeneratedValue
    private Long id;

    //Exemplo de valor - DG01
    @Column(nullable = false, length = 100)
    private String nome;

    //Exemplo de valor - 40610
    @Column(nullable = false)
    private Integer codigo;

    //Exemplo de valor - Material de divulgação - serviço gráfico
    @Column(nullable = false, length = 400)
    private String descricao;

    @ManyToOne
    private NaturezaGasto naturezaGasto;

    @Column(nullable = false, length = 200)
    private String contaContabil;

    @Column(nullable = false, length = 200)
    private String contaOrcamentaria;

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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public NaturezaGasto getNaturezaGasto() {
        return naturezaGasto;
    }

    public void setNaturezaGasto(NaturezaGasto naturezaGasto) {
        this.naturezaGasto = naturezaGasto;
    }

    public String getContaContabil() {
        return contaContabil;
    }

    public void setContaContabil(String contaContabil) {
        this.contaContabil = contaContabil;
    }

    public String getContaOrcamentaria() {
        return contaOrcamentaria;
    }

    public void setContaOrcamentaria(String contaOrcamentaria) {
        this.contaOrcamentaria = contaOrcamentaria;
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