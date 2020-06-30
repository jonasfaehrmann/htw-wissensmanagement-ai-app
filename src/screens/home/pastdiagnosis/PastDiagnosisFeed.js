import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'

import Diagnosis from 'library/components/Diagnosis'
import diagnosisData from 'res/data/diagnosis'

function renderItem (item) {
  return <Diagnosis {...item} />
}

function keyExtractor (item) {
  return item.id.toString()
}

export default function PastDiagnosisFeed (props) {
  const theme = useTheme()
  const data = diagnosisData.filter(diagnosis => { return !diagnosis.id.includes('healthy') }).map(diagnosisProps => ({
    ...diagnosisProps,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Detail', {
        ...diagnosisProps
      })
  }))

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  )
};
