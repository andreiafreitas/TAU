/// <reference types='cypress' />

import { TodoPage } from"../page-objects/todo-page";

describe('todo actions', () => {
    const todoPageUtils = new TodoPage()

    beforeEach(() => {
        todoPageUtils.navigate()

        todoPageUtils.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
        todoPageUtils.validateTodoText(0, 'Clean room')

        todoPageUtils.validateToggleState(0, false)
    })

    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
            todoPageUtils.toggleTodo(0)
            todoPageUtils.validateTodoCompletedState(0, true)
        })

        it('should clear completed', () => {
            todoPageUtils.toggleTodo(0)

            todoPageUtils.clearCompleted()

            todoPageUtils.validateNumberOfTodosShown(0)
        })

    })
})