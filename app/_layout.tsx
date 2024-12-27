// app/_layout.tsx
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import CustomHeader from '../components/CustomHearder';  
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import BottomSheet from '../components/BottomSheet'; 
import { useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const router = useRouter();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ 
              header: () => <CustomHeader bottomSheetRef={bottomSheetRef} />,
            }}
          />
          <Stack.Screen 
            name="(modal)/filter"
            options={{
              presentation: 'modal',
              headerTitle: 'Filter',
              headerShown: true,
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="close-outline" size={28} color={Colors.primary} />
                </TouchableOpacity>
              )
            }}
          />
          <Stack.Screen 
            name="(modal)/location-search"
            options={{
              presentation: 'fullScreenModal',
              headerTitle: 'Select location',
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="close-outline" size={28} color={Colors.primary} />
                </TouchableOpacity>
              )
            }}
          />
        </Stack>
        <BottomSheet ref={bottomSheetRef} />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}