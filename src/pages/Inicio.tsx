import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "./Inicio.css";

const Inicio: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Página Inicial</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding inicio-content">
                <div className="perfil-container">
                    <img src="assets/foto2x2.jpg" alt="Foto 2x2" className="perfil-foto" />
                    <h2 className="nombre">Waren Jesus</h2>
                    <h3 className="apellido">Sanchez Made</h3>
                    <div className="info">
                        <p><strong>Matrícula:</strong> 2023-1198</p>
                        <p><strong>Correo institucional:</strong> 20231198@itla.edu.do</p>
                        <p><strong>Correo personal:</strong> warrensm87@gmail.com</p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Inicio;
