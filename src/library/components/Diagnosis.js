import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import {
  Surface,
  Title,
  Caption,
  Text,
  Avatar,
  TouchableRipple,
  useTheme
} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import color from 'color'

export default function Diagnosis (props) {
  const theme = useTheme()

  const iconColor = color(theme.colors.text)
    .alpha(0.54)
    .rgb()
    .string()

  const contentColor = color(theme.colors.text)
    .alpha(0.8)
    .rgb()
    .string()

  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string()

  const item = props.item

  return (
    <TouchableRipple onPress={() => item.onPress(item.id)}>
      <Surface style={styles.container}>
        <View style={styles.leftColumn}>
          <Avatar.Image source={{ uri: item.avatar }} size={60} />
        </View>
        <View style={styles.rightColumn}>
          <View style={styles.topRow}>
            <Title>{item.name}</Title>
            <Caption style={styles.handle}>{item.handle}</Caption>
            <Caption style={[styles.handle, styles.dot]}>{'\u2B24'}</Caption>
            <Caption>{item.date}</Caption>
          </View>
          <Text style={{ color: contentColor }}>{item.content.substring(0, 100) + '...'}</Text>
          <Image
            source={{ uri: item.image }}
            style={[
              styles.image,
              {
                borderColor: imageBorderColor
              }
            ]}
          />
          <View style={styles.bottomRow} />
        </View>
      </Surface>
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingRight: 15
  },
  leftColumn: {
    width: 100,
    alignItems: 'center'
  },
  rightColumn: {
    flex: 1
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  handle: {
    marginRight: 3
  },
  dot: {
    fontSize: 3
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    borderRadius: 20,
    width: '100%',
    height: 150
  },
  bottomRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconDescription: {
    marginLeft: 2,
    lineHeight: 12
  }
})
