// import { render, screen } from '@testing-library/react'
// import Home from '@/app/page'





// describe('Home', () => {
//     /*
//     This test ensures that when the Home component is rendered, 
//     it includes an element with the text "Docs"
//     */
//     it('should have Docs text', () => {
//         render(<Home />)  // Arrang

//         const myElem = screen.getByText('Docs') //Act == action we are taking

//         expect(myElem).toBeInTheDocument() //Assert
//     })

//     it('should contsin the text information', () => {
//         render(<Home />)  // Arrang

//         const myElem = screen.getByText(/information/i) //Act == action we are taking

//         expect(myElem).toBeInTheDocument() //Assert
//     })

// // check/test if you have header (h1 , h2 , h3 ,...) it contain keyword "learn"
//     it('should have a heading', () => {
//         render(<Home />)  // Arrang

//         const myElem = screen.getByRole('heading' , {
//             name: 'Learn'
//         }) //Act == action we are taking

//         expect(myElem).toBeInTheDocument() //Assert
//     })
// })



import Home from '@/app/page'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Home', () => {

    it('should add a new todo', async () => {
        render(<Home />) // ARRANGE

        // ACT
        const input = screen.getByPlaceholderText('New Todo')
        await userEvent.type(input, 'My new todo')
        expect(input).toHaveValue('My new todo') // ASSERT

        // ACT
        const button = screen.getByRole('button', {
            name: 'Submit'
        })
        await userEvent.click(button)
        expect(input).toHaveValue("") // ASSERT 

        const data = await screen.findByText('My new todo')
        expect(data).toHaveTextContent('My new todo')
    })

    it('should update a todo', async () => {
        render(<Home />) // ARRANGE

        // ACT
        const checkbox = screen.getAllByRole('checkbox')[0] as HTMLInputElement
        expect(checkbox.checked).toBeFalsy()
        await userEvent.click(checkbox)
        expect(checkbox.checked).toBeTruthy() // ASSERT 

    })

    it('should delete a todo', async () => {
        render(<Home />) // ARRANGE

        const todoText = screen.queryByText('Write Code 💻')
        expect(todoText).toBeInTheDocument() // ASSERT 

        // ACT
        const button = screen.getAllByTestId('delete-button')[0]
        await userEvent.click(button)

        expect(todoText).not.toBeInTheDocument() // ASSERT 

    })

})