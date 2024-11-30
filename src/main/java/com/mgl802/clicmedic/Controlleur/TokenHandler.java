ckerpackage com.mgl802.clicmedic.Controlleur;

import com.mgl802.clicmedic.Modele.Session;
import com.mgl802.clicmedic.Services.MedecinService;
import com.mgl802.clicmedic.Services.PatientService;
import com.mgl802.clicmedic.Services.PermissionChecker;
import com.mgl802.clicmedic.Services.SessionService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class TokenHandler {

    private final MedecinService medecinService;
    private  final PatientService patientService;
    private final SessionService sessionService;

    @Autowired
    public TokenHandler(MedecinService medecinService, PatientService patientService, SessionService sessionService) {
        this.medecinService = medecinService;
        this.patientService = patientService;
        this.sessionService = sessionService;
    }

    public Boolean sessionExist(String authorizationHeader) {
        return sessionService.isTokenExists(authorizationHeader);
    }

    public Optional<Session> findSession(String authorizationHeader) {
        return sessionService.findByToken(authorizationHeader);
    }

    public Boolean userIsOfTypeMedecin(String authorizationHeader) {
        Optional<Session> optSession = sessionService.findByToken(authorizationHeader);
        if (optSession.isEmpty()) {
            return false;
        }

        return PermissionChecker.isMedecinAccess(optSession.get().getTypeUser());
    }

    public Boolean userIsOfTypePatient(String authorizationHeader) {
        Optional<Session> optSession = sessionService.findByToken(authorizationHeader);
        if (optSession.isEmpty()) {
            return false;
        }

        return PermissionChecker.isPatientAccess(optSession.get().getTypeUser());
    }
}
