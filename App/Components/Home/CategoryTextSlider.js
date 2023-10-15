import React from 'react';
import { View, Text } from 'react-native';

function CategoryTextSlider() {
  const categoryList = [
    { id: 1, name: 'Latest' },
    { id: 3, name: 'World' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Sports' },
    { id: 5, name: 'Life' },
    { id: 6, name: 'Movie' },
  ];
  return (
    <View>
      <Text>CategoryTextSlider</Text>
    </View>
  );
}

export default CategoryTextSlider;
