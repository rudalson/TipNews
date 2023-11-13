import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Color from '../../Shared/Color';

function CountryTextSlider({ selectCountry }) {
  const [active, setActive] = useState('us');

  const countries = [
    { id: 'us', name: 'USA' },
    { id: 'gb', name: 'UnitedKingdom' },
    { id: 'kr', name: 'Korea' },
    { id: 'jp', name: 'Japan' },
    { id: 'cn', name: 'China' },
    { id: 'ru', name: 'Russia' },
  ];

  const onCountryClick = (id) => {
    setActive(id);
  };

  return (
    <View style={{ marginTop: 8 }}>
      <FlatList
        data={countries}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              onCountryClick(item.id);
              selectCountry(item.id);
            }}
          >
            <Text
              style={
                item.id === active ? Styles.selectText : Styles.unselectText
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  unselectText: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: '800',
    color: Color.basicText1,
  },
  selectText: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.selectText2,
  },
});

export default CountryTextSlider;
