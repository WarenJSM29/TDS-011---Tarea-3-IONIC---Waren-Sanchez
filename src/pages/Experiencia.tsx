import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Experiencia.css';

const Experiencia: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Experiencia</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding experiencia-content">
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/yI3tcQAEzHg?si=rqIT20-IVIqg6x5y" // <-- Cambia este enlace
                        title="Video de experiencia"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                    ></iframe>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Experiencia;
