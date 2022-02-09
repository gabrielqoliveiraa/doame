/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { AppError } from './errors/AppErrors'
import 'express-async-errors'

import './database'
import router from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message })
    }

    return response.status(500).json({
      status: 'error',
      message: err.message,
    })
  }
)

app.listen(3333, () => console.log('🚀 SERVER IS ON AT 3333'))
