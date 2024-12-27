import { View, Text, Image } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { restaurant } from '@/assets/data/restaurant'

const Details = () => {
  return (
    <ParallaxScrollView
      parallaxHeaderHeight={300}
      renderBackground={() => (
        <Image 
          source={restaurant.img}
          style={{
            width: '100%',
            height: 400,  
          }}
          resizeMode="cover"
        />
      )}
    >
      <View style={{ padding: 16 }}>
        <Text>{restaurant.name}</Text>
        <Text>{restaurant.rating}</Text>
        <Text>{restaurant.distance}</Text>
      </View>
    </ParallaxScrollView>
  )
}

export default Details