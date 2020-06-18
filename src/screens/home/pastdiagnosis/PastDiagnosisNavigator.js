import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PastDiagnosisDetail from './PastDiagnosisDetail'
import PastDiagnosisFeed from './PastDiagnosisFeed'

const Stack = createStackNavigator()

export default function PastDiagnosisNavigator () {
  return (
    <Stack.Navigator
      initialRouteName='PastDiagnosisNavigator'
      headerMode='screen'
    >
      <Stack.Screen
        name='Feed'
        component={PastDiagnosisFeed}
        options={{ headerTitle: 'Past Diagnosis' }}
      />
      <Stack.Screen
        name='Detail'
        component={PastDiagnosisDetail}
        options={{ headerTitle: 'Detail' }}
      />
    </Stack.Navigator>
  )
}
