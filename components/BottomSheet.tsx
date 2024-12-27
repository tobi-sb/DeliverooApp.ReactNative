import { View, Text, Button, StyleSheet } from 'react-native'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, TouchableOpacity, useBottomSheetModal } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['50%'], []);
    const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, [])
    const { dismiss } = useBottomSheetModal();
    
    return (
        <BottomSheetModal
            ref={ref}
            snapPoints={snapPoints}
            index={1}
            enablePanDownToClose={true}
            overDragResistanceFactor={0}
            backdropComponent={renderBackdrop}
            style={{borderRadius:0,}}
            handleIndicatorStyle={{display:'none'}}
        >
            <BottomSheetView style={styles.contentContainer}>

              <View style={styles.toggle}>
                <TouchableOpacity style={styles.toggleActive}>
                  <Text style={styles.activeText}>Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toggleInactive}>
                  <Text style={styles.inactiveText}>Pickup</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.subHeader}>Your Location</Text>
              <Link href={"/(modal)/location-search"} asChild>
                <TouchableOpacity>
                  <View style={styles.item}>
                    <Ionicons name='location-outline' size={20} color={Colors.medium}/>
                    <Text style={{flex:1,}}>Current location</Text>
                    <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
                  </View>
                </TouchableOpacity>
              </Link>

              <Text style={styles.subHeader}>Arival Time</Text>
              <TouchableOpacity>
                  <View style={styles.item}>
                    <Ionicons name='stopwatch-outline' size={20} color={Colors.medium}/>
                    <Text style={{flex:1,}}>Current location</Text>
                    <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
                  </View>
                </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
                  <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>

            </BottomSheetView>
        </BottomSheetModal>
    )
});

const styles = StyleSheet.create({
  contentContainer:{
    flex:1,

    
  },
  toggle:{
    flexDirection:'row',
    justifyContent:'center',
    gap:10,
    marginBottom:32,
  },
  toggleActive:{
    backgroundColor:Colors.primary,
    padding:8,
    borderRadius:32,
    paddingHorizontal:30,
    alignItems:'center',
  },
  toggleInactive:{
    padding:8,
    borderRadius:32,
    paddingHorizontal:30,
    alignItems:'center',
  },
  activeText:{
    color:'white',
    fontWeight:'700',
  },
  inactiveText:{
    color:Colors.primary,
    fontWeight:'700',
  },
  button:{
    backgroundColor: Colors.primary,
    padding:16,
    borderRadius:4,
    margin:16,  
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontWeight:'bold',
  },
  subHeader:{
    fontSize:16,
    fontWeight:600,
    margin:16,
  },

  item:{
    flexDirection:'row',
    alignItems:'center',
    padding:16,
    gap:8,
    backgroundColor:'white',
    borderColor:Colors.grey,
    borderWidth:1,
  },
});

export default BottomSheet