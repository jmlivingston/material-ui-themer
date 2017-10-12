import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

import { demoData } from './data'

class DynamicComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoaded: false }
    props.importer().then(m => {
      this.setState({
        isLoaded: true,
        Component: m.default
      })
    })
  }

  render() {
    const { isLoaded, Component } = this.state
    return isLoaded && Component ? <Component {...this.props} /> : <span>Loading...</span>
  }
}

class Demo extends Component {
  render() {
    return (
      <div>
        {demoData.map(demo => {
          return (
            <div key={demo}>
              <Typography type="display1">{demo.split('/')[2]}</Typography>
              <DynamicComponent importer={() => import('./material-ui-demos' + demo)} />
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Demo
