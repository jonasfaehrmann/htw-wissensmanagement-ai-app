import React, { useState, useEffect } from 'react'
import { Camera } from 'expo-camera'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import predictLeafHealth from 'library/networking/diagnosis'
import diagnosisData from 'res/data/diagnosis'

export default function CameraScreen (props) {
  const [hasPermission, setHasPermission] = useState(null)
  let [camera] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text style={{ fontSize: 100, textAlign: 'center' }}> No access to camera</Text>
  }

  async function takePicture () {
    if (camera) {
      const result = await camera.takePictureAsync()
      if (!result.cancelled) {
        const dataId = await predictLeafHealth(result.uri)
        props.navigation.navigate('PastDiagnosisNavigator', { screen: 'Detail', params: getDetailPlantInformation(dataId) })
      }
    }
  }

  function getDetailPlantInformation (id) {
    return diagnosisData.filter(diagnosis => { return diagnosis.id === id })[0]
  }

  async function pickImage () {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    })
    if (!result.cancelled) {
      const dataId = await predictLeafHealth(result.uri)
      props.navigation.navigate('PastDiagnosisNavigator', { screen: 'Detail', params: getDetailPlantInformation(dataId) })
    }
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={ref => {
          camera = ref
        }}
        type={Camera.Constants.Type.back}
        flashMode={Camera.Constants.FlashMode.off}
        autoFocus={Camera.Constants.AutoFocus.on}
        zoom={0}
        whiteBalance={Camera.Constants.WhiteBalance.auto}
        focusDepth={0}
        ratio='16:9'
      >
        <View style={styles.controls}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
            onPress={pickImage}
          >
            <Ionicons
              name='ios-photos'
              style={{ color: '#fff', fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
            onPress={takePicture}
          >
            <FontAwesome
              name='camera'
              style={{ color: '#fff', fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  camera: {
    flex: 1
  },

  controls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  }
})
