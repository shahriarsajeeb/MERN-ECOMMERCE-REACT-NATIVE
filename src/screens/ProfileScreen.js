import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'

export default function ProfileScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>ProfileScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})