import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home'
import Details from './screen/Details'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0C0910',
              elevation: 0,
              shadowOpacity: 0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0C0910',
              elevation: 0,
              shadowOpacity: 0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;