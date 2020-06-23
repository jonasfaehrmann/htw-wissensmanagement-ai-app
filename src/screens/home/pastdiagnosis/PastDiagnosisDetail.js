import React from 'react'
import DetailDiagnosis from 'library/components/DetailDiagnosis'

export default function PastDiagnosisDetail (props) {
  return <DetailDiagnosis {...props.route.params} />
}
