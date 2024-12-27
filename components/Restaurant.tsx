import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { categories, restaurants } from '@/assets/data/home'
import { ScrollView } from 'react-native-gesture-handler'
import { restaurant } from '@/assets/data/restaurant'
import { Link } from 'expo-router' // Make sure you import Link
import Colors from '@/constants/Colors'

const Restaurant = () => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{
        padding: 18,
      }}
    >
      {restaurants.map((restaurant, index) => (
        <Link href={'/details'} key={index} asChild>
          <TouchableOpacity>
            <View style={styles.restaurantCard}>
              <Image source={restaurant.img} style={styles.image}></Image>
              <View style={styles.categoriesBox}>
                <Text style={styles.restaurantText}>{restaurant.name}</Text>
                <Text style={{color: Colors.green}}>{restaurant.rating} {restaurant.ratings}</Text>
                <Text style={{color: Colors.medium}}>{restaurant.distance}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  restaurantCard: {
    height: 300,
    width: 250,
    backgroundColor: 'white',
    elevation: 2,
    marginEnd:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  restaurantText: {
    paddingVertical: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },

  image:{
    flex:5,
    width:'100%',
  },
  imageContainer:{

  },
  categoriesBox:{
    flex:2,
    padding:10,
  }
})

export default Restaurant