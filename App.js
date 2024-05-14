import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, FlatList, StyleSheet} from 'react-native';
import {Appbar,Button,Divider,PaperProvider,TextInput,} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './routers/MyStack';
import {MyContextControllerProvider} from './store';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
const App = () => {
  return (
      <MyContextControllerProvider>
        <PaperProvider>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </PaperProvider>
      </MyContextControllerProvider> 
  );
};
export default App;
