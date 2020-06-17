import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import strings from 'res/strings'
import images from 'res/images'
import ImageButton from 'library/components/ImageButton'
import moveToBottom from 'library/utils/moveToBottom'

function StartDiagnosis () {
  return (
    <View style={styles.container}>
      <Text>{strings.main.startdiagnosis.heading.toUpperCase()}</Text>
      {
        moveToBottom(
          <ImageButton image={images.startdiagnosis} onPress={onStartDiagnosisPress()} />
        )
      }
    </View>
  )
}

function onStartDiagnosisPress () {
  navigation.push('Details')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

export default StartDiagnosis
