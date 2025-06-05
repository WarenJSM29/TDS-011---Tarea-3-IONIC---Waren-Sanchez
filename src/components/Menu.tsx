import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  homeOutline,
  calculatorOutline,
  chatboxEllipsesOutline,
  gridOutline,
  videocamOutline
} from 'ionicons/icons';

import './Menu.css';

interface AppPage {
  url: string;
  title: string;
  icon: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/inicio',
    icon: homeOutline
  },
  {
    title: 'Sumadora',
    url: '/sumadora',
    icon: calculatorOutline
  },
  {
    title: 'Traductor de Números',
    url: '/traductor',
    icon: chatboxEllipsesOutline
  },
  {
    title: 'Tabla de Multiplicar',
    url: '/tabla',
    icon: gridOutline
  },
  {
    title: 'Experiencia Personal',
    url: '/experiencia',
    icon: videocamOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="menu-list">
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === appPage.url ? 'selected' : ''}
                routerLink={appPage.url}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonIcon slot="start" icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
