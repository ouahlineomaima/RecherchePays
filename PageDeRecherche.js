import React, { Component } from 'react';
import {StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native';
function urlPourRequete(valeur){
    return 'https://restcountries.com/v3.1/name/'+valeur;
}
type Props = {};
export default class PageDeRecherche extends Component<Props>{
    constructor(props){
        super(props);
        this.state={
            requeteDeRecherche: 'morocco',
            estEnChangement: false,
        };
    }
    _auchangementDeLaRecherche = (event) =>{
        this.setState({requeteDeRecherche: event.text});
    }
    _executerRequete = (requete) =>{
        console.log(requete);
        this.setState({estEnChangement: true});
    };
    _auDemarrageDeLaRecherche = () =>{
        const requete = urlPourRequete(this.state.requeteDeRecherche);
        this._executerRequete(requete);
    }
    render() {
        const indicateurDeChangement = this.state.estEnChangement ? <ActivityIndicator size='large' color='0000ff'/> : null;
        return (
            <View style={styles.conteneur}>
                <Text style={styles.description}>
                    Rechercher des pays à explorer!
                </Text>
                <Text style={styles.description}>
                    Rechercher par nom
                </Text>
                <View style={styles.fluxDroite}>
                    <TextInput 
                    underlineColorAndroid={'transparent'}
                    style={styles.requeteEntree}
                    value={this.state.requeteDeRecherche}
                    onChange={this._auchangementDeLaRecherche}
                    placeholder='Rechercher par nom de pays'/>
                    <Button 
                    onPress={this._auDemarrageDeLaRecherche}
                    color={'#48AAEC'}
                    title='Démarrer'
                    />
                </View>
                <Image source={require('./Ressources/pays.jpg')} style={styles.image}/>
                {indicateurDeChangement}
            </View>
        );
    }
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
        alignItems: 'center'

    },
    fluxDroite:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    requeteEntree:{
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
    image:{
        width: 220,
        height: 140,
    }
});





