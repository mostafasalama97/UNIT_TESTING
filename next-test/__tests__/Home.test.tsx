import { render, screen } from '@testing-library/react'
import Home from '@/app/page'





describe('Home', () => {
    /*
    This test ensures that when the Home component is rendered, 
    it includes an element with the text "Docs"
    */
    it('should have Docs text', () => {
        render(<Home />)  // Arrang

        const myElem = screen.getByText('Docs') //Act == action we are taking

        expect(myElem).toBeInTheDocument() //Assert
    })

    it('should contsin the text information', () => {
        render(<Home />)  // Arrang

        const myElem = screen.getByText(/information/i) //Act == action we are taking

        expect(myElem).toBeInTheDocument() //Assert
    })

// check/test if you have header (h1 , h2 , h3 ,...) it contain keyword "learn"
    it('should have a heading', () => {
        render(<Home />)  // Arrang

        const myElem = screen.getByRole('heading' , {
            name: 'Learn'
        }) //Act == action we are taking

        expect(myElem).toBeInTheDocument() //Assert
    })
})
