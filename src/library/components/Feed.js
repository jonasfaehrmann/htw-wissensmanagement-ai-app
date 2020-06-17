import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'

import Diagnosis from './Diagnosis'
import { diagnosis } from 'res/data/diagnosis'

function renderItem (item) {
  return <Diagnosis {...item} />
}

function keyExtractor (item) {
  return item.id.toString()
}

export default function Feed (props) {
  const theme = useTheme()
  const data = diagnosis.map(twittProps => ({
    ...twittProps,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Detail', {
        ...twittProps
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
