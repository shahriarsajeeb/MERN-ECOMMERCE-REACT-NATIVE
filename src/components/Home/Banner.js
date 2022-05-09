import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {useState} from 'react';
import {useEffect} from 'react';

var {width} = Dimensions.get('window');

export default function Banner() {
  const [BannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      'https://img.freepik.com/free-psd/online-shopping-with-laptop-mockup-template-shopping-elements_1150-38886.jpg?w=740&t=st=1649620293~exp=1649620893~hmac=5c9107ea2ea3ce12882a18e099701bde00f1786252d93ed6bfd1f73eb1404733',
      'https://img.freepik.com/free-psd/online-shopping-with-mobile-shopping-elements-mockup-template_1150-38858.jpg?w=740&t=st=1649620328~exp=1649620928~hmac=94235b42c77689d7b61f983bdb82f5dd9d16fb91c9e08dbda78b56ff443f08a4',
      'https://img.freepik.com/free-psd/blank-screen-smart-phone-computer-mockup-online-shop-concept_1150-39228.jpg?t=st=1649620352~exp=1649620952~hmac=cca3bd0f238edf83c96307a86ed0bff0b17d78cfa082ff215a6304b228a9e7cd&w=740',
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showButtons={false}
            autoplay={true}
            autoplayTimeout={4}
            style={{
              height: width / 2,
            }}>
            {BannerData.map(item => {
              return (
                <Image
                  key={item}
                  resizeMode="contain"
                  source={{uri: item}}
                  style={styles.banner}
                />
              );
            })}
          </Swiper>
          <View style={{height: 20}}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  swiper: {
    width: width,
    marginTop: '5%',
    alignItems: 'center',
  },
  banner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
