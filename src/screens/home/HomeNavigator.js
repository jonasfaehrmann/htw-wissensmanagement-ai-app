import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import PastDiagnosisNavigator from './pastdiagnosis/PastDiagnosisNavigator'
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
        name='PastDiagnosisNavigator'
        component={PastDiagnosisNavigator}
        options={{
          tabBarIcon: 'tree'
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeNavigator
