import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from '../../TodoItem/TodoItem'

const mockTodoo = {
    "userId": 1,
    "id": 1,
    "title": "Wave hello! 👋",
    "completed": false
}

const mockSetTodos = jest.fn()


describe('Add Todo', () => {

    describe('Render', () => {
        it('should render an article', () => {
            render(<TodoItem todo={mockTodoo} setTodos={mockSetTodos} />)
            const article = screen.getByRole('article')
            expect(article).toBeInTheDocument()
        })

        it('should render an Label', () => {
            render(<TodoItem todo={mockTodoo} setTodos={mockSetTodos} />)
            const label = screen.getByTestId('todo-item')
            expect(label).toBeInTheDocument()
        })

        it('should render an checkbox', () => {
            render(<TodoItem todo={mockTodoo} setTodos={mockSetTodos} />)
            const checkbox = screen.getByRole('checkbox')
            expect(checkbox).toBeInTheDocument()
        })


        it('should render an button', () => {
            render(<TodoItem todo={mockTodoo} setTodos={mockSetTodos} />)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })


    })

    describe('Behaviour', () => {

        it('should call setTodos when checkbox is clicked', async () => {
            render(<TodoItem todo={mockTodoo} setTodos={mockSetTodos} />)  // arrang
            //act
            const checkbox = screen.getByRole('checkbox')
            await userEvent.click(checkbox)
            // assert
            expect(mockSetTodos).toHaveBeenCalled()
        })


        it('should call setTodos when button is clicked', async () => {
            render(<TodoItem todo={mockTodoo} setTodos={mockSetTodos} />)  // arrang
            //act
            const button = screen.getByRole('button')
            await userEvent.click(button)
            // assert
            expect(mockSetTodos).toHaveBeenCalled()
        })
    })
})