import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { AppError } from './errors/AppErrors'
import * as db from './queries'


const app = express()

app.use(express.json())


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

// Base CRUD
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/createuser', db.createUser)
app.put('/updateuser/:id', db.updateUser)
app.delete('/deleteuser/:id', db.deleteUser)

app.listen(3333, () => console.log('🚀 SERVER IS ON AT 3333'))
