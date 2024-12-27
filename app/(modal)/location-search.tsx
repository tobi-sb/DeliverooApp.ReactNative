import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import 'react-native-get-random-values';
import { Ionicons } from '@expo/vector-icons'

const locationSearch = () => {

  const navigation = useNavigation();

  const [location, setLocation] = useState({
    latitude: 43.341629,
    longitude: 3.217820,
    latitudeDelta: 0.001,
    longitudeDelta: 0.0025,
  });


  return (
    <View style={{flex:1}}>
      <GooglePlacesAutocomplete 
        placeholder="Search or move the map"
        fetchDetails={true}
        onPress={(data, details = null) => {
          const point = details?.geometry?.location
          if (!point) return;
          setLocation({
            ...location,
            latitude: point.lat,
            longitude: point.lng,
          });
        }}
        query={{
          key:process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language:'en'
        }}
        renderLeftButton={() => (
          <View style={styles.boxIcon}>
            <Ionicons name='search-outline' size={24} color={Colors.medium}/>
          </View>
        )}
        styles={{
          container: {
            flex:0,
          },
          textInput:{
            backgroundColor: Colors.grey,
            paddingLeft:35,
            borderRadius: 10,
          },
          textInputContainer:{
            backgroundColor: "white",
            padding:8,
          }
        }}
      />
      <MapView showsUserLocation={true} style={styles.map} region={location}/>

      <View style={styles.absoluteBox}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  map:{
    flex:1,
  },
  absoluteBox:{
    position:'absolute',
    bottom:20,
    width:"100%",
    padding:16,
    

  },
  button:{
    backgroundColor: Colors.primary,
    alignItems:'center',
    padding:16,
    borderRadius:8,
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:"700"
  },
  boxIcon:{
    position:'absolute',
    left:15,
    top:18,
    zIndex:1,
  }
})

export default locationSearch