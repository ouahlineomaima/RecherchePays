import React, {Component} from 'react';
import{
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    FlatList,
    Text,
} from 'react-native';

type Props = {}
export default class ResultatsDeRecherche extends Component<Props>{
    _extracteurClef = (item, index) => index.toString();

    _renderItem = ({item}) =>{
        return(
            <TouchableHighlight
            underlayColor='#ddddda'>
                <View>
                    <Text>{item.name.official}</Text>
                </View>
            </TouchableHighlight>
        )
    };

    render(){
        console.log('route', this.props.route.params);
        const {listings} = this.props.route.params;
        return(
            <FlatList
            data={listings}
            keyExtractor={this._extracteurClef}
            renderItem={this._renderItem}/>
        );
    }
}