import {ScrollView, Text} from 'react-native';
import React from 'react';
import ForgotPassword from '../components/Authentication/ForgotPassword.js';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#e5e5e5',
      }}>
      <ForgotPassword navigation={navigation} />
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
