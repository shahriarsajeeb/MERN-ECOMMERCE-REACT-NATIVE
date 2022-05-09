import { ScrollView, Text } from 'react-native'
import React from 'react'

const AuthScreen = ({navigation}) => {
  return (
    <ScrollView
    style={{
      backgroundColor:"#e5e5e5"
    }}
    >
      <Text onPress={()=> navigation.navigate("Home")}>AuthScreen</Text>
    </ScrollView>
  )
}

export default AuthScreen