import { render, screen } from "@testing-library/react"
import { rest } from "msw"
import { server } from "../mocks/server"
import Users from "./Users"

describe('users',()=>{
    test('should render correctly',()=>{
        render(<Users/>)
        const h1Elem = screen.getByRole('heading',{level:1})
        expect(h1Elem).toBeInTheDocument()
    })
    test('should show a list of users',async ()=>{
        render(<Users/>)
        const userList= await screen.findAllByRole('listitem')
        expect(userList).toHaveLength(3)
    })

    test('should show error',async ()=>{
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users',
            (req,res,ctx) => {
                return res(ctx.status(500))
            })
        )
            render(<Users/>)
            const errElem = await screen.findByText('error fetching data')
            expect(errElem).toBeInTheDocument()
    })
})