// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users',
    (req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json([
                {id:1,name:"Ram Kumar"},
                {id:2,name:"Hari saran"},
                {id:3,name:"Sita Kumari"}

            ])
        )
    }
    )
]