import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { categories } from '@/assets/data/home'
import { ScrollView } from 'react-native-gesture-handler'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        padding:18,
    }}>
      {categories.map((categories, index) => (
        <View style={styles.categoriesCard} key={index}>
            <Image source={categories.img} />
            <Text style={styles.categoriesText}>{categories.text}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    categoriesCard:{
        height:100,
        width:100,
        backgroundColor:'white',
        marginEnd: 10,
        elevation:2,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:4,
            
        },
        shadowOpacity:0.06,
        borderRadius: 4,
    },
    categoriesText:{
        padding:6,
        fontSize:13,
        fontWeight:'bold',
    }
})

export default Categories