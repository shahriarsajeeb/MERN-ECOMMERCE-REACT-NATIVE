import {ScrollView } from 'react-native'
import React from 'react'
import Login from "../components/Authentication/Login";

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    style={{
      backgroundColor:"#e5e5e5"
    }}
    >
     <Login navigation={navigation} />
    </ScrollView>
  )
}

export default LoginScreen