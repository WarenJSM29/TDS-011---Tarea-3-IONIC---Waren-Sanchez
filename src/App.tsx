import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import {
  personOutline,
  calculatorOutline,
  languageOutline,
  gridOutline,
  videocamOutline,
} from 'ionicons/icons';

import Inicio from './pages/Inicio';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import TablaMultiplicar from './pages/TablaMultiplicar';
import Experiencia from './pages/Experiencia';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark mode support */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/inicio" component={Inicio} exact />
            <Route path="/sumadora" component={Sumadora} exact />
            <Route path="/traductor" component={Traductor} exact />
            <Route path="/tabla" component={TablaMultiplicar} exact />
            <Route path="/experiencia" component={Experiencia} exact />
            <Route path="/folder/:name" component={Page} exact />
            <Route exact path="/" render={() => <Redirect to="/inicio" />} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="inicio" href="/inicio">
              <IonIcon icon={personOutline} />
              <IonLabel>Inicio</IonLabel>
            </IonTabButton>

            <IonTabButton tab="sumadora" href="/sumadora">
              <IonIcon icon={calculatorOutline} />
              <IonLabel>Sumadora</IonLabel>
            </IonTabButton>

            <IonTabButton tab="traductor" href="/traductor">
              <IonIcon icon={languageOutline} />
              <IonLabel>Traductor</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tabla" href="/tabla">
              <IonIcon icon={gridOutline} />
              <IonLabel>Tabla</IonLabel>
            </IonTabButton>

            <IonTabButton tab="experiencia" href="/experiencia">
              <IonIcon icon={videocamOutline} />
              <IonLabel>Video</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
