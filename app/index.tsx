import {Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Categories from '@/components/Categories'
import { SafeAreaView } from 'react-native-safe-area-context'
import Restaurant from '@/components/Restaurant'
import Colors from '@/constants/Colors'

const Page = () => {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView contentContainerStyle={{
        paddingBottom: 60,
      }}>
        <Categories/>

        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurant/>

        <Text style={styles.header}>Offers near you</Text>
        <Restaurant/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 50,
    backgroundColor: Colors.lighGrey
  },
  header:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:16,
    marginBottom:8,
    paddingHorizontal:16,
  }
})

export default Page