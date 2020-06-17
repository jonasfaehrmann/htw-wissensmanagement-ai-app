import React from 'react'

import DetailDiagnosis from './DetailDiagnosis'

export default function Detail (props) {
  return <DetailDiagnosis {...props.route.params} />
}
