import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-virtualized-view';

import CountryTextSlider from '../Components/Home/CountryTextSlider';
import Color from '../Shared/Color';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsByCountry('us');
  }, []);

  const getNewsByCountry = async (country) => {
    setLoading(true);
    const result = await GlobalApi.getByCountry(country);

    if (result.ok) {
      setNewsList(result.data.articles);
    }
    setLoading(false);
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
            Global News
          </Text>
          {/* <Ionicons name='notifications-outline' size={25} color='gray' /> */}
        </View>

        {/* Country List */}
        <CountryTextSlider
          selectCountry={(country) => {
            // console.log({ category });
            getNewsByCountry(country);
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
