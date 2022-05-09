import {ScrollView, Text} from 'react-native';
import React from 'react';
import SignUp from '../components/Authentication/SignUp.js';

const SignUpScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#e5e5e5',
      }}>
      <SignUp navigation={navigation} />
    </ScrollView>
  );
};

export default SignUpScreen;
