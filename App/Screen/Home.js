import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-virtualized-view';

import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import Color from '../Shared/Color';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getTopHeadline();
    getNewsByCategory('latest');
  }, []);

  const getNewsByCategory = async (category) => {
    setLoading(true);
    const result = await GlobalApi.getByCategory(category);

    if (result.ok) {
      setNewsList(result.data.articles);
    }
    setLoading(false);
  };

  const getTopHeadline = async () => {
    const result = await GlobalApi.getTopHeadline;

    if (result.ok) {
      setNewsList(result.data.articles);
    }
  };

  return (
    <View style={{ backgroundColor: Color.bg1 }}>
      <View style={{ marginHorizontal: 16 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: Color.title,
            }}
          >
            Top News
          </Text>
          <Ionicons name='notifications-outline' size={25} color='gray' />
        </View>

        {/* Category List */}
        <CategoryTextSlider
          selectCategory={(category) => {
            // console.log({ category });
            getNewsByCategory(category);
          }}
        />

        {loading ? (
          <ActivityIndicator
            style={{
              padding: Dimensions.get('screen').height * 0.4,
            }}
            size={'large'}
            color={Color.basicText1}
          />
        ) : (
          <ScrollView>
            {/* Top Headline Slider */}
            {/* <TopHeadlineSlider newsList={newsList} /> */}

            {/* Headline list */}
            <HeadlineList newsList={newsList} />
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Home;
