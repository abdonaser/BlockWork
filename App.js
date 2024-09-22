import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, StatusBar } from 'react-native';
import {
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
  PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const customLightTheme = {
    ...PaperLightTheme,
    colors: {
      ...PaperLightTheme.colors,
      primary: '#6200ee',
      accent: '#03dac4',
      background: '#ffffff',
      text: '#000000',
      appName: "#000000"
    },
  };
  const customDarkTheme = {
    ...PaperDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      primary: '#1DB954',
      accent: '#BB86FC',
      background: '#121212',
      text: '#ffffff',
      appName: "#0096FF"
    },
  };

  const theme = isDarkTheme ? customDarkTheme : customLightTheme;


  return (
    <PaperProvider theme={theme}>
      <StatusBar
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkTheme ? '#121212' : '#ffffff'}
      />
      <NavigationContainer theme={theme}>
        <StackNavigator />
        <View style={{
          backgroundColor: theme.colors.background
        }}>
          {/* <Text style={{ backgroundColor: theme.colors.background, color: theme.colors.text, textAlign: 'center', margin: 20 }}>Toggle Dark Mode</Text> */}
          <Switch
            style={{ backgroundColor: theme.colors.background }}
            value={isDarkTheme}
            onValueChange={toggleTheme}
          />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
