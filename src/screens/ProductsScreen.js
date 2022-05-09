import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Layout/Header';
import Loader from '../components/Layout/Loader';
import ProductCard from '../components/Home/ProductCard';
import {useSelector} from 'react-redux';

export default function ProductsScreen({navigation}) {
  return (
      <ScrollView>
        <Header navigation={navigation} />
        <Text>ProductsScreen</Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({});
