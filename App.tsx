import React from 'react';

import {
  SafeAreaView,

  StatusBar,

} from 'react-native';
import NavigationScreen from './src/screens/navigation/NavigationScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';



function App(): React.JSX.Element {


  return (
    <SafeAreaProvider>
        <NavigationScreen/>
 </SafeAreaProvider>
  );
}



export default App;
