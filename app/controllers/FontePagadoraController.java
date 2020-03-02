package controllers;

import com.avaje.ebean.Ebean;
import models.FontePagadora;
import play.i18n.Messages;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class FontePagadoraController extends Controller {

    /**
     * Retrieve a list of all objs
     *
     * @return a list of all objs in json
     */
    public Result buscaTodos() {
        try {
            return ok(Json.toJson(Ebean.find(FontePagadora.class)
                    .findList()));
        } catch (Exception e) {
            return badRequest(Json.toJson(Messages.get("app.error")));
        }
    }
}
