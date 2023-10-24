import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeNavigator from './App/Routes/HomeNavigator';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 15,
      }}
    >
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
