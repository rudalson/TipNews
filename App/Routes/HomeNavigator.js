import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../Screen/Home';
import ReadNews from '../Screen/ReadNews';

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='read-news' component={ReadNews} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
