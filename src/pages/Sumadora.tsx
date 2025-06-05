import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonLabel,
    IonText
} from "@ionic/react";
import { useState } from "react";
import "./Sumadora.css"; // nuevo CSS específico para esta vista

const Sumadora: React.FC = () => {
    const [numero1, setNumero1] = useState<number>(0);
    const [numero2, setNumero2] = useState<number>(0);
    const [resultado, setResultado] = useState<number | null>(null);

    const sumar = () => {
        setResultado(numero1 + numero2);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Sumadora</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="sumadora-container">
                    <div className="sumadora-campo">
                        <IonLabel>Numero 1</IonLabel>
                        <IonInput
                            type="number"
                            value={numero1}
                            onIonChange={(e) => setNumero1(parseFloat(e.detail.value!) || 0)}
                        />
                    </div>

                    <div className="sumadora-campo">
                        <IonLabel>Numero 2</IonLabel>
                        <IonInput
                            type="number"
                            value={numero2}
                            onIonChange={(e) => setNumero2(parseFloat(e.detail.value!) || 0)}
                        />
                    </div>

                    <div className="sumadora-button">
                        <IonButton expand="block" onClick={sumar}>Sumar</IonButton>
                    </div>

                    {resultado !== null && (
                        <div className="sumadora-resultado">
                            <IonText color="primary">
                                <h2>Resultado: {resultado}</h2>
                            </IonText>
                        </div>
                    )}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Sumadora;
