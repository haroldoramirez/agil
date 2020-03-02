package controllers;

import com.avaje.ebean.Ebean;
import models.NaturezaGasto;
import play.i18n.Messages;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

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
}
