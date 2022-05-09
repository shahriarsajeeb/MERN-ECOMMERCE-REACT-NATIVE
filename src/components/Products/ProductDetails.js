import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

export default function ProductDetails({route, navigation}) {
  const [click, setClick] = useState(false);

  return (
    <View style={{
      elevation:8,
      backgroundColor:"#fff",
      width: width * 1,
    }}>
       <View style={styles.productDetailsTop}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="#333" size={30} />
        </TouchableOpacity>
        {click ? (
            <Icon
              name="heart"
              size={30}
              style={{
                marginRight: 10,
                color: 'crimson',
                position:"absolute",
                bottom:0,
                right:0,
              }}
              onPress={() => setClick(!click)}
            />
        ) : (
            <Icon
              name="heart-outline"
              size={30}
              style={{
                marginRight: 10,
                color: '#333',
                position:"absolute",
                bottom:0,
                right:0,
              }}
              onPress={() => setClick(!click)}
            />
        )}
      </View>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.swiper}>
        <Swiper showButtons={true} autoplay={true} autoplayTimeout={4}>
          {route.params?.item.images.map(i => (
            <Image source={{uri: i.url}} style={styles.banner} key={i._id} />
          ))}
        </Swiper>
      </View>
      <View style={styles.details_box}>
        <View style={styles.details}>
          <View>
            <Text
              style={{
                color: '#333',
                fontSize: 20,
                fontWeight: '600',
              }}>
              {route.params?.item.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#555',
                fontSize: 15,
                fontWeight: '600',
                textDecorationLine: 'line-through',
                marginRight: 10,
                marginBottom: 10,
              }}>
               {route.params?.item.offerPrice.length === 0 ? null : "$" + route.params?.item.offerPrice}
            </Text>
            <Text
              style={{
                color: '#333',
                fontSize: 18,
                fontWeight: '600',
              }}>
              ${route.params?.item.price}
            </Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text
            style={{
              color: '#333',
              fontSize: 18,
              fontWeight: '600',
            }}>
            Description
          </Text>
          <Text
            style={{
              color: '#555',
              fontSize: 15,
              fontWeight: '500',
              lineHeight: 20,
              paddingTop: 10,
            }}>
            {route.params?.item.description}
          </Text>
        </View>
        <View style={styles.quantity}>
          <View style={styles.quantityBox}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: '800',
              }}>
              -
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#333',
                fontSize: 16,
              }}>
              1
            </Text>
          </View>
          <View style={styles.quantityBox}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: '800',
              }}>
              +
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width * 1 - 30,
            alignItems: 'center',
          }}>
          <View style={styles.button}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontWeight: '600',
              }}>
              Add to Cart
            </Text>
          </View>
          <View style={styles.reviews}>
            <Text
              style={{
                fontSize: 18,
                color: '#333',
                fontWeight: '600',
              }}>
              Reviews
            </Text>
            {route.params?.item.reviews.length === 0 ? (
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  color:"#333"
                }}>
                No reviews have yet...
              </Text>
            ) : (
              <View>
                {route.params?.item.reviews.map(i => (
                  <View
                    key={i._id}
                    style={{
                      flexDirection: 'row',
                      alignItems: "flex-start",
                      paddingVertical: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#333',
                        fontWeight: '700',
                        paddingLeft:5
                      }}>
                      {i.name}
                      <Text
                       style={{
                        fontSize: 15,
                        color: '#555',
                        fontWeight: '600',
                        paddingLeft:5
                      }}
                      >
                      {"  "}{i.comment} 
                      </Text>
                    </Text>
                    <Icon name="star" color="#C68600" size={18} />
                    <Text style={{color:"#333"}}>({i.rating})</Text>
                  </View>
                ))}
              </View>
            )}
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#555',
                  fontWeight: '600',
                  paddingRight: 10,
                }}>
                Your Ratings*
              </Text>
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
            </View>
            <View style={{
              marginTop:10,
              height:100,
            }}>
              <TextInput
                keyboardType="default"
                placeholder="Add your comment..."
                placeholderTextColor="#333"
                textAlignVertical="top"
                style={{
                  borderWidth:1,
                  paddingLeft:10,
                  color:"#333",
                  borderRadius:5,
                  borderColor:"#0000002b",
                  height:"100%"
                }}
              />
            </View>
            <View style={{
              alignItems:"center"
            }}>
              <Text style={styles.submitButton}>
                Submit
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: '#fff',
  },
  productDetailsTop: {
    width: width * 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: width / 6 - 20,
    paddingHorizontal: 10,
    elevation: 8,
    backgroundColor: '#fff',
  },
  banner: {
    width: width * 1,
    height: width / 2 - 20,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  swiper: {
    width: width * 1,
    height: width / 2,
    backgroundColor: '#fff',
    position: 'relative',
  },
  details_box: {
    backgroundColor: '#e5e5e5',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    marginTop:20,
    marginBottom: height / 8 - 60,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    flexDirection: 'column',
    paddingVertical: 10,
  },
  quantity: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  quantityBox: {
    width: 40,
    height: 40,
    backgroundColor: '#3BB77E',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  button: {
    width: '70%',
    backgroundColor: '#3BB77E',
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  submitButton:{
    width: '70%',
    backgroundColor: '#3BB77E',
    marginTop: 20,
    borderRadius: 5,
    paddingVertical:15,
    textAlign:"center",
    color:"#fff",
    fontSize:18,
    fontWeight:"600"
  },
  reviews: {
    marginTop: 10,
    width: width * 1,
    padding: 20,
  },
});
