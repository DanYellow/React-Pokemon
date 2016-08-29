let nextTodoId = 0
export const addTodo = function (text) {
    return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    }
}

 
// export default addTodo