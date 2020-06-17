import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import strings from 'res/strings'
import ImageButton from 'library/components/ImageButton'
import moveToBottom from 'library/utils/moveToBottom'

function PastDiagnosis () {
  return (
    <View style={styles.container}>
      <Text>{strings.main.pastdiagnosis.heading.toUpperCase()}</Text>
      {
        moveToBottom(
          <ImageButton title={strings.main.pastdiagnosis.heading.toUpperCase()} />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

export default PastDiagnosis
