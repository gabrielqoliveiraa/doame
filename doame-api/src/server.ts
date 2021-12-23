import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { AppError } from './errors/AppErrors'
import "./database"
import { routes } from 'services/routes'


const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(routes)

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response
                .status(err.statusCode)
                .json({ message: err.message })
        }

        return response.status(500).json({
            status: 'error',
            message: err.message,
        })
    }
)

app.get('/', (request: Request, response: Response) =>{
    response.json({ aplicacao: "Teste"} )
})


app.listen(3333, () => console.log('🚀 SERVER IS ON AT 3333'))
