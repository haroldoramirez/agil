package models;

import com.avaje.ebean.Model;

import javax.persistence.*;
import java.util.Calendar;

@Entity
public class TrProduto extends Model {

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false, length = 60)
    private String numero;

    @Column(nullable = false, length = 150)
    private String solicitante;

    @Column(nullable = false, length = 150)
    private String diretorCC;

    @Column(nullable = false, length = 400)
    private String descricao;

    @Column(nullable = false)
    private Integer quantidade;

    @Column(nullable = false)
    private Float valorEstimado;

    @ManyToOne
    private CentroDeCusto centroDeCusto;

    @ManyToOne
    private GastoEspecifico gastoEspecifico;

    @ManyToOne
    private NaturezaGasto naturezaGasto;

    @Column(nullable = false, length = 400)
    private String localEntrega;

    @Column(nullable = false, length = 20)
    private String tipoCompra;

    @Column(nullable = false)
    private Integer patrimonio;

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

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getSolicitante() {
        return solicitante;
    }

    public void setSolicitante(String solicitante) {
        this.solicitante = solicitante;
    }

    public String getDiretorCC() {
        return diretorCC;
    }

    public void setDiretorCC(String diretorCC) {
        this.diretorCC = diretorCC;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Float getValorEstimado() {
        return valorEstimado;
    }

    public void setValorEstimado(Float valorEstimado) {
        this.valorEstimado = valorEstimado;
    }

    public CentroDeCusto getCentroDeCusto() {
        return centroDeCusto;
    }

    public void setCentroDeCusto(CentroDeCusto centroDeCusto) {
        this.centroDeCusto = centroDeCusto;
    }

    public GastoEspecifico getGastoEspecifico() {
        return gastoEspecifico;
    }

    public void setGastoEspecifico(GastoEspecifico gastoEspecifico) {
        this.gastoEspecifico = gastoEspecifico;
    }

    public String getLocalEntrega() {
        return localEntrega;
    }

    public void setLocalEntrega(String localEntrega) {
        this.localEntrega = localEntrega;
    }

    public NaturezaGasto getNaturezaGasto() {
        return naturezaGasto;
    }

    public void setNaturezaGasto(NaturezaGasto naturezaGasto) {
        this.naturezaGasto = naturezaGasto;
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

    public String getTipoCompra() {
        return tipoCompra;
    }

    public void setTipoCompra(String tipoCompra) {
        this.tipoCompra = tipoCompra;
    }

    public Integer getPatrimonio() {
        return patrimonio;
    }

    public void setPatrimonio(Integer patrimonio) {
        this.patrimonio = patrimonio;
    }
}