import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { useState } from 'react';
import './Traductor.css';

const Traductor: React.FC = () => {
    const [numero, setNumero] = useState<number>(0);
    const [enLetras, setEnLetras] = useState<string>('');

    const unidades = [
        '', 'uno', 'dos', 'tres', 'cuatro', 'cinco',
        'seis', 'siete', 'ocho', 'nueve'
    ];
    const especiales = [
        'diez', 'once', 'doce', 'trece', 'catorce', 'quince',
        'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'
    ];
    const decenas = [
        '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta',
        'sesenta', 'setenta', 'ochenta', 'noventa'
    ];
    const centenas = [
        '', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos',
        'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
    ];

    const convertirNumero = (n: number): string => {
        if (n === 0) return 'cero';
        if (n === 100) return 'cien';
        if (n === 1000) return 'mil';

        let resultado = '';

        const c = Math.floor(n / 100);
        const d = Math.floor((n % 100) / 10);
        const u = n % 10;

        if (c > 0) resultado += centenas[c] + ' ';

        if (d === 1) {
            resultado += especiales[u];
        } else if (d === 2 && u > 0) {
            resultado += 'veinti' + unidades[u];
        } else {
            if (d > 1) resultado += decenas[d];
            if (d > 1 && u > 0) resultado += ' y ';
            if (d !== 1 && u > 0) resultado += unidades[u];
        }

        return resultado.trim();
    };

    const traducir = () => {
        if (numero < 1 || numero > 1000) {
            setEnLetras('Por favor ingrese un número entre 1 y 1000.');
        } else {
            setEnLetras(convertirNumero(numero));
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Traductor de números</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding traductor-container">
                <div className="traductor-campo">
                    <IonLabel>Número a traducir</IonLabel>
                    <IonInput
                        type="number"
                        value={numero}
                        onIonChange={(e) => setNumero(parseInt(e.detail.value!, 10) || 0)}
                        placeholder="Ej: 256"
                    />
                </div>
                <div className="traductor-boton">
                    <IonButton expand="block" onClick={traducir}>Traducir</IonButton>
                </div>
                {enLetras && (
                    <div className="traductor-resultado">
                        <p>Resultado: <strong>{enLetras}</strong></p>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Traductor;
