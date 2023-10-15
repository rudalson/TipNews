import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View>
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
      <CategoryTextSlider />
    </View>
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
