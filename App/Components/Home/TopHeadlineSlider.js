import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import Color from '../../Shared/Color';

const TopHeadlineSlider = ({ newsList }) => {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('read-news', { news: item });
            }}
            style={{
              width: Dimensions.get('screen').width * 0.8,
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get('screen').width * 0.77,
                borderRadius: 10,
              }}
            />
            <Text
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 23, fontWeight: '800' }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: Color.primary,
              }}
            >
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopHeadlineSlider;
