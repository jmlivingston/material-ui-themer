import React from 'react'
import isEmpty from 'lodash/isEmpty'

import('./Loader.css')

const Loader = ({ loadingProp, children }) => {
  if (loadingProp) {
    return <div className="loader" />
  } else {
    return isEmpty(loadingProp) ? <div className="loader" /> : children
  }
}

export default Loader
