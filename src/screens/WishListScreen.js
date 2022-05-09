import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'

export default function WishListScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>WishListScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})