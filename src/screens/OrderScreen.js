import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'

export default function OrderScreen({navigation}) {
  return (
    <View>
        <Header navigation={navigation} />
      <Text>OrderScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})