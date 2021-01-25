import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function CapitalWeather({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="" component={} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}
