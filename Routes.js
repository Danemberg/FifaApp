import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Pages/Home';
import ClubsList from './Pages/ClubsList';

const Stack = createStackNavigator();

export function Routes (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home}
          options={{
            title: 'FIFA - Great clubs in the world',
            headerStyle: {
              backgroundColor: '#B8860B'
            },
            headerTintColor: '#191970',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="clubsList" component={ClubsList} 
            options={{
              title: 'FIFA',
              headerStyle: {
                backgroundColor: '#B8860B'
              },
              headerTintColor: '#191970',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

