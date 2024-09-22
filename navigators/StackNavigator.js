import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '../constants/Utils/MyRoutes';
import SignIn from '../screens/auth/SignIn';
import { useTheme } from 'react-native-paper';
import SignUp from '../screens/auth/SignUp';

const Stack = createStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator  >
            <Stack.Screen
                name={Routes.signIn}
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={Routes.signUp}
                component={SignUp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;