import React from 'react'

import { connect } from 'react-redux'


// at first, it already gets the initial state that can not be null, so I turned it as an empty object, so we dont get an error
const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Modulo {activeModule.title} </strong>
    <span>Aula {activeLesson.title} </span>
  </div>
)

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Video)