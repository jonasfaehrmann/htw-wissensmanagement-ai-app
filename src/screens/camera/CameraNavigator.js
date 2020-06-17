import React from 'react'
import { Button, LogoTitle, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function StackScreen () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation, route }) => ({
          headerTitle: props => <LogoTitle {...props} />
        })}
      />
    </Stack.Navigator>
  )
}

function HomeScreen ({ navigation }) {
  const [count, setCount] = React.useState(0)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title='Update count' />
      )
    })
  }, [navigation])

  return <Text>Count: {count}</Text>
}

export default StackScreen()
