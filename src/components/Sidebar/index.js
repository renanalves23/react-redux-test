import React from 'react';

import { connect } from 'react-redux' //to get the modules from the store || the state of redux

const Sidebar = ({modules}) => (
  <aside>
        { modules.map(module => (
          <div key={module.id} >
            <strong> {module.title} </strong>
            <ul>
              { module.lessons.map(lesson => (
                <li key={lesson.id} > {lesson.title} </li>
              )) }
            </ul>
          </div>
        )) }
      </aside>
)

/* 
first parameter of connect is a function that returns the state and should return wich properties I want from that state
connect(function(){something from the state},) 
*/

export default connect(state => ({ modules: state.modules }))(Sidebar);
