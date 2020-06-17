import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigator from './src/screens/home/HomeNavigator'

export default function App () {
  return (
    <PaperProvider>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}
