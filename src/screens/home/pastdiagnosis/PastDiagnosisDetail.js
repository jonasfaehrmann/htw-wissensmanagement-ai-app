import React from 'react'
import predictLeafHealth from 'library/networking/diagnosis'
import DetailDiagnosis from 'library/components/DetailDiagnosis'
import * as FileSystem from 'expo-file-system'

export default function PastDiagnosisDetail (props) {
  if (!props.route.params.id) {
    const base64 = async () => {
      let result = null
      try {
        result = await FileSystem.readAsStringAsync(props.route.params.image, { encoding: 'base64' })
      } catch (e) {
        console.log(e)
      }
      predictLeafHealth(result)
    }
    base64()
    return <DetailDiagnosis {...props.route.params} />
  }
}
