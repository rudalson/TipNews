import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Color from '../../Shared/Color';

// ListItem 컴포넌트 (React.memo 사용)
const ListItem = React.memo(({ item, onPress }) => (
  <View>
    <View style={styles.separator} />
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : 'https://blog.jounsaram.net/wp-content/themes/easymag/images/no-image.png',
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={4} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.source}>{item?.source?.name}</Text>
      </View>
    </TouchableOpacity>
  </View>
));

const HeadlineList = ({ newsList }) => {
  const navigation = useNavigation();
  // console.log(newsList);

  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() => navigation.navigate('read-news', { news: item })}
          />
        )}
        disableVirtualization={false}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Color.lightGray,
    marginTop: 10,
    marginLeft: -20,
  },
  itemContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  textContainer: {
    marginRight: 130,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.basicText1,
  },
  source: {
    color: Color.selectText1,
    marginTop: 6,
  },
});

export default HeadlineList;
