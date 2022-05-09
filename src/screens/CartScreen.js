import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'

export default function CartScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>CartScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})