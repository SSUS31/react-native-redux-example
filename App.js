/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from  './src/screens/home/';
import List from './src/screens/list';
import { Provider } from 'react-redux';
import createStoreConfig from './src/redux/';


const Stack = createStackNavigator();
const store = createStoreConfig();

class App extends React.Component{
  appScreens(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Create" component={Home} />
          <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
    </NavigationContainer>
    )
  }

  render(){
    return(
      <Provider store={store}>
        {this.appScreens()}
      </Provider>
    )
  }
}

export default App;
