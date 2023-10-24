import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigator from './App/Routes/HomeNavigator';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 34,
        marginHorizontal: 15,
      }}
    >
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
