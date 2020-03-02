import play.GlobalSettings;
import play.libs.F;
import play.mvc.Http;
import play.mvc.Result;

public class Global extends GlobalSettings {

    /**
     * When an exception occurs in your application, the onError operation will be called. The default is to use the internal framework error page. You can override this
     */
    @Override
    public F.Promise<Result> onError(Http.RequestHeader request, Throwable t) {
        return super.onError(request, t);
    }

}