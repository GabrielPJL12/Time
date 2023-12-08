import React from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import WeekCalendar from './screens/WeekCalendar';
import DailySchedule from './screens/DailySchedule';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="WeekCalendar" component={WeekCalendar} options={{headerShown: false}} />
        <Stack.Screen name="DailySchedule" component={DailySchedule} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
