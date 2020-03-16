
/* Action */
export function toggleLesson(module, lesson){
  return{
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  }
}
  /*end Action that is dispatched below onClick*/