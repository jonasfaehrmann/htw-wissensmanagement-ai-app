import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import PastDiagnosis from './pastdiagnosis/PastDiagnosisScreen'
import StartDiagnosis from './startdiagnosis/StartDiagnosisScreen'

const Tab = createMaterialBottomTabNavigator()

function HomeNavigator () {
  return (
    <Tab.Navigator
      initialRouteName='home'
      shifting
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name='StartDiagnosis'
        component={StartDiagnosis}
        options={{
          tabBarIcon: 'home-account'
        }}
      />
      <Tab.Screen
        name='PastDiagnosis'
        component={PastDiagnosis}
        options={{
          tabBarIcon: 'bell-outline'
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeNavigator
