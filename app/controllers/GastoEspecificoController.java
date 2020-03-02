package controllers;

import com.avaje.ebean.Ebean;
import com.avaje.ebean.Query;
import models.GastoEspecifico;
import models.NaturezaGasto;
import play.Logger;
import play.i18n.Messages;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;

public class GastoEspecificoController extends Controller {

    /**
     * Retrieve a list of all objs
     *
     * @return a list of all objs in json
     */
    public Result buscaTodos() {
        try {
            return ok(Json.toJson(Ebean.find(GastoEspecifico.class)
                    .findList()));
        } catch (Exception e) {
            return badRequest(Json.toJson(Messages.get("app.error")));
        }
    }

    public Result buscaByNaturezaGasto(Long id_naturezaGasto) {

        try {

            Query<GastoEspecifico> query = Ebean.createQuery(GastoEspecifico.class, "find GastoEspecifico where naturezaGasto.id = :id_naturezaGasto");
            query.setParameter("id_naturezaGasto", id_naturezaGasto);
            List<GastoEspecifico> listaFiltrada = query.findList();

            return ok(Json.toJson(listaFiltrada));

        } catch (Exception e) {

            Logger.error(e.getMessage());
            return badRequest(Json.toJson(Messages.get("app.error")));

        }

    }
}
