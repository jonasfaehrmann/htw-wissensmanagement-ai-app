import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import PastDiagnosis from './pastdiagnosis/PastDiagnosisScreen'
import CameraScreen from './camera/CameraScreen'

const Tab = createMaterialBottomTabNavigator()

function HomeNavigator () {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      shifting
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name='CameraScreen'
        component={CameraScreen}
        options={{
          tabBarIcon: 'camera'
        }}
      />
      <Tab.Screen
        name='PastDiagnosis'
        component={PastDiagnosis}
        options={{
          tabBarIcon: 'home-account'
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeNavigator
