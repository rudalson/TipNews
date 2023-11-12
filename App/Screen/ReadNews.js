import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Image,
  Share,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Color from '../Shared/Color';

const ReadNews = () => {
  const news = useRoute().params.news;
  const navigation = useNavigation();

  useEffect(() => {
    console.log(news);
  }, []);

  const shareNews = () => {
    Share.share({ message: news.title + '\nRead More' + news.description });
  };

  return (
    <ScrollView style={{ backgroundColor: Color.bg1, flex: 1 }}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name='arrow-back' size={28} color={Color.basicText2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            shareNews();
          }}
        >
          <Ionicons name='share-outline' size={28} color={Color.basicText2} />
        </TouchableOpacity>
      </View>

      <View style={{ marginHorizontal: 8 }}>
        <Image
          source={{
            uri: news.urlToImage
              ? news.urlToImage
              : 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
          }}
          style={{ width: '100%', height: 300, borderRadius: 15 }}
        />
        <Text style={{ marginTop: 10, color: Color.selectText1, fontSize: 16 }}>
          {news.source.name}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 22,
            fontWeight: 'bold',
            color: Color.title,
          }}
        >
          {news.title}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            color: Color.basicText1,
            lineHeight: 30,
          }}
        >
          {news.description}
        </Text>
        <TouchableOpacity
          onPress={() => {
            WebBrowser.openBrowserAsync(news.url);
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              color: Color.primary,
              fontWeight: 'bold',
            }}
          >
            Read More
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReadNews;
