import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

function ListItem({ item, index, onPressItem }) {
  const _itemAppuye = () => {
    onPressItem(index);
  };
  return (
    <TouchableHighlight onPress={_itemAppuye} underlayColor="#eedddd">
      <View>
        <View style={styles.conteneurLigne}>
          <View style={styles.conteneurTexte}>
            <Text style={styles.nomOfficiel}>{item.name.official}</Text>
            <Text style={styles.autre}>{item.region}</Text>
            <Text style={styles.autre}>{item.subregion}</Text>
            <Text style={styles.autre}>{item.capital}</Text>
            <Text style={styles.autre}>{item.population}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    </TouchableHighlight>
  );
}

export default function ResultatsDeRecherche(props) {
  console.log('route', props.route.params);
  const [listings, setListings] = useState(props.route.params.listings);

  const _extracteurClef = (item, index) => index.toString();

  const _renderItem = ({ item, index }) => {
    return (
      <ListItem
        item={item}
        index={index}
        onPressItem={_itemAppuye}
      />
    );
  };

  const _itemAppuye = (index) => {
    console.log('Ligne appuyée: ' + index);
  };

  return (
    <FlatList
      data={listings}
      keyExtractor={_extracteurClef}
      renderItem={_renderItem}
    />
  );
}

const styles = StyleSheet.create({
  conteneurTexte: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#eedded',
  },
  nomOfficiel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#58BEEC',
  },
  autre: {
    fontSize: 20,
    color: '#656565',
  },
  conteneurLigne: {
    flexDirection: 'row',
    padding: 10,
  },
});
