import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import Color from '../Shared/Color';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

const Home = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    const result = await GlobalApi.getTopHeadline;
    console.log({ result });

    if (result.ok) {
      setNewsList(result.data.articles);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: Color.white }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={Styles.appName}>Tip News</Text>
        <Ionicons name='notifications-outline' size={25} color='black' />
      </View>

      {/* Category List */}
      <CategoryTextSlider />

      {/* Top Headline Slider */}
      <TopHeadlineSlider newsList={newsList} />

      {/* Headline list */}
      <HeadlineList newsList={newsList} />
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Color.primary,
  },
});

export default Home;
