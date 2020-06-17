import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from 'library/components/Detail'
import Feed from 'library/components/Feed'

const Stack = createStackNavigator()

function FeedStack () {
  return (
    <Stack.Navigator
      initialRouteName='FeedList'
      headerMode='screen'
    >
      <Stack.Screen
        name='Feed'
        component={Feed}
        options={{ headerTitle: 'Past Diagnosis' }}
      />
      <Stack.Screen
        name='Detail'
        component={Detail}
        options={{ headerTitle: 'Detail' }}
      />
    </Stack.Navigator>
  )
}

export default FeedStack
