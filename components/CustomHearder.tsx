import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons style={styles.searchIcon} name='search-outline' size={20} color={Colors.medium}/>
                <TextInput 
                    style={styles.input} 
                    placeholder='Search' 
                    placeholderTextColor={Colors.medium}
                />
            </View>
            <Link href="/(modal)/filter" asChild>
                <TouchableOpacity style={styles.optionsButton}>
                    <Ionicons name='options-outline' size={20} color={Colors.primary} />
                </TouchableOpacity>
            </Link>
        </View>
    </View>
);

type CustomHeaderProps = {
    bottomSheetRef: React.RefObject<BottomSheetModal>;
};

const CustomHeader = ({ bottomSheetRef }: CustomHeaderProps) => {
    const openModal = () => {
        bottomSheetRef.current?.present();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity onPress={openModal}>
                    <Image 
                        style={styles.bike} 
                        source={require('@/assets/images/bike.png')} 
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={openModal} style={styles.titleContainer}>
                    <Text style={styles.title}>Delivery - Now</Text>
                    <View style={styles.locationName}>
                        <Text style={styles.subtitle}>San Francisco, CA</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name="person-outline" size={20} color={Colors.primary} />
                </TouchableOpacity>
            </View>
            
            <SearchBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        backgroundColor: 'white',
    },
    container: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        gap: 20,
    },
    bike: {
        width: 30,
        height: 30,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        color: Colors.medium,
    },
    profileButton: {
        backgroundColor: Colors.lighGrey,
        padding: 10,
        borderRadius: 50,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    locationName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchContainer: {
        height: 60,
        backgroundColor: '#fff',
    },
    searchSection: {
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lighGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: Colors.mediumDark,
        fontSize: 16,
    },
    optionsButton: {
        padding: 10,
        borderRadius: 50,
    },
});

export default CustomHeader;