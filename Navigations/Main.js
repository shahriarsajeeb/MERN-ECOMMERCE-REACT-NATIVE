import React from 'react';
import Tabs from './Tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductsScreen from '../src/screens/ProductsScreen';
import WishListScreen from '../src/screens/WishListScreen';
import CartScreen from '../src/screens/CartScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import DrawerItems from '../src/components/Layout/DrawerItems';
import OrderScreen from "../src/screens/OrderScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

const Main = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#3BB77E',
          drawerActiveTintColor: '#fff',
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
            marginVertical: 2,
          },
        }}
        drawerContent={props => <DrawerItems {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Tabs}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="home-outline" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            drawerIcon: ({focused}) => (
              <Image
                source={require('../src/Assets/BottomTab/shop.png')}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  opacity: focused ? 1 : 0.7,
                  tintColor: focused ? '#fff' : null,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="WishList"
          component={WishListScreen}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="heart-outline" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CartScreen}
          options={{
            drawerIcon: ({focused}) => (
              <Image
                source={require('../src/Assets/BottomTab/cart.png')}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  opacity: focused ? 1 : 0.7,
                  tintColor: focused ? '#fff' : null,
                }}
              />
            ),
          }}
        />
         <Drawer.Screen
          name="My Orders"
          component={OrderScreen}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="reader-outline" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="person-circle-outline" size={25} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default Main;
