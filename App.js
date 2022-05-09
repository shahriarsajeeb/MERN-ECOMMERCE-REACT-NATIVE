import React, { useEffect, useState } from 'react'
import { Provider, useSelector } from 'react-redux';
import {Text} from "react-native";
import Store from './Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./Navigations/Main";
import Auth from "./Navigations/Auth";
import { loadUser } from './Redux/Actions/UserAction';
import Splash from './src/components/Layout/Splash';
import Loader from './src/components/Layout/Loader';

const App = () =>{
  return (
    <Provider store={Store}>
    <AppStack />
    </Provider>
  )

}

const AppStack = () =>{
  const {isAuthenticated,loading} = useSelector((state) =>state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return(
    <NavigationContainer>
      <>
      {loading ? <Splash /> : (
        <>
         {
          isAuthenticated ? 
          (
            <Main /> 
          )
          :(
            <Auth />
          )
        } 
        </>     
      )}
      </>
    </NavigationContainer>
  )
}


export default App