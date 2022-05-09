import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from "../src/screens/LoginScreen";
import SignUpScreen from "../src/screens/SignUpScreen";
import Splash from '../src/components/Layout/Splash';
import ForgotPasswordScreen from "../src/screens/ForgotPasswordScreen";

const Auth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}
    initialRouteName="Login"
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignUpScreen} />
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Forgot' component={ForgotPasswordScreen} />

    </Stack.Navigator>
  )
}

export default Auth