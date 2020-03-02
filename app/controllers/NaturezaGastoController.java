package controllers;

import com.avaje.ebean.Ebean;
import com.avaje.ebean.Query;
import models.NaturezaGasto;
import play.Logger;
import play.i18n.Messages;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;

public class NaturezaGastoController extends Controller {

    /**
     * Retrieve a list of all objs
     *
     * @return a list of all objs in json
     */
    public Result buscaTodos() {
        try {
            return ok(Json.toJson(Ebean.find(NaturezaGasto.class)
                    .findList()));
        } catch (Exception e) {
            return badRequest(Json.toJson(Messages.get("app.error")));
        }
    }

    public Result buscaByCentroDeCusto(Long id_centroDeCusto) {

        try {

            Query<NaturezaGasto> query = Ebean.createQuery(NaturezaGasto.class, "find NaturezaGasto where centroDeCusto.id = :id_centroDeCusto");
            query.setParameter("id_centroDeCusto", id_centroDeCusto);
            List<NaturezaGasto> filtroDeNaturezasgasto = query.findList();
            return ok(Json.toJson(filtroDeNaturezasgasto));

        } catch (Exception e) {

            Logger.error(e.getMessage());
            return badRequest(Json.toJson(Messages.get("app.error")));

        }

    }
}
