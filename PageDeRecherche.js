import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native';

const urlPourRequete = (valeur) => {
    return 'https://restcountries.com/v3.1/name/' + valeur;
};

export default function PageDeRecherche() {
    const [requeteDeRecherche, setRequeteDeRecherche] = useState('morocco');
    const [estEnChangement, setEstEnChangement] = useState(false);
    const [message, setMessage] = useState('');

    const auchangementDeLaRecherche = (event) => {
        setRequeteDeRecherche(event.nativeEvent.text);
    };

    const gererLaReponse = (reponse) => {
        setEstEnChangement(false);
        setMessage('');
        console.log('Nombre de pays trouvés: ' + reponse.length);
    };

    const executerRequete = (requete) => {
        console.log(requete);
        setEstEnChangement(true);
        fetch(requete)
            .then((response) => response.json())
            .then((json) => gererLaReponse(json))
            .catch(
                (error) =>
                    setMessage("Quelque chose de mauvais s'est produit " + error),
                setEstEnChangement(false)
            );
    };

    const auDemarrageDeLaRecherche = () => {
        /* const requete = urlPourRequete(requeteDeRecherche); */
        const requete =
            'https://restcountries.com/v3.1/name/' + requeteDeRecherche;
        executerRequete(requete);
    };

    return (
        <View style={styles.conteneur}>
            <Text style={styles.description}>Rechercher des pays à explorer!</Text>
            <Text style={styles.description}>Rechercher par nom</Text>
            <View style={styles.fluxDroite}>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    style={styles.requeteEntree}
                    value={requeteDeRecherche}
                    onChange={auchangementDeLaRecherche}
                    placeholder="Rechercher par nom de pays"
                />
                <Button
                    onPress={auDemarrageDeLaRecherche}
                    color={'#48AAEC'}
                    title="Démarrer"
                />
            </View>
            <Image
                source={require('./Ressources/pays.jpg')}
                style={styles.image}
            />
            <Text style={styles.description}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
    conteneur: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center',
    },
    fluxDroite: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    requeteEntree: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48AAEC',
        borderRadius: 8,
        color: '#48AAEC',
    },
    image: {
        width: 220,
        height: 140,
    },
});