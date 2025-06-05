import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./TablaMultiplicar.css";

const TablaMultiplicar: React.FC = () => {
    const [numero, setNumero] = useState<number>(0);
    const [tabla, setTabla] = useState<string[]>([]);

    const generarTabla = () => {
        if (isNaN(numero)) {
            setTabla(["Por favor ingrese un número válido."]);
            return;
        }

        const resultado: string[] = [];
        for (let i = 1; i <= 13; i++) {
            resultado.push(`${numero} x ${i} = ${numero * i}`);
        }
        setTabla(resultado);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Tabla de Multiplicar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding tabla-container">
                <div className="tabla-campo">
                    <IonLabel>Ingrese un número</IonLabel>
                    <IonInput
                        type="number"
                        value={numero}
                        onIonChange={(e) => setNumero(parseInt(e.detail.value!, 10) || 0)}
                        placeholder="Ej: 7"
                    />
                </div>
                <div className="tabla-boton">
                    <IonButton expand="block" onClick={generarTabla}>
                        Generar tabla
                    </IonButton>
                </div>
                {tabla.length > 0 && (
                    <div className="tabla-resultado">
                        {tabla.map((linea, index) => (
                            <p key={index}>{linea}</p>
                        ))}
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default TablaMultiplicar;
