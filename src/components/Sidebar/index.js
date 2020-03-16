import React from 'react';

import { connect } from 'react-redux' //to get the modules from the store || the state of redux

import * as CourseActions from '../../store/actions/course'

const Sidebar = ({ modules, dispatch }) => (
  <aside>
        { modules.map(module => (
          <div key={module.id} >
            <strong> {module.title} </strong>
            <ul>
              { module.lessons.map(lesson => (
                <li key={lesson.id} > 
                  {lesson.title} 
                  <button onClick={() => dispatch(CourseActions.toggleLesson(module, lesson)) } >Selecionar</button>
                  </li>
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

const mapStateToProps = state => ({
  modules: state.course.modules
});


/*
 //it's used for containing the actions. Mostly, button actions

const mapDispatchToProps = dispatch => ({


})
*/
//it's used for containing the actions. Mostly, button actions



export default connect(mapStateToProps)(Sidebar);
