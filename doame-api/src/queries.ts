import {Pool} from 'pg'


const pool = new Pool({
    user: 'docker',
    host: 'postgres_database',
    database: 'doame',
    password: 'doame',
    port: '5432',
})

// Pega todos os usuários
const getUsers = (request, response) =>{
    pool.query('SELECT * FROM usuarios ORDER BY id ASC', (error, results) =>{
        if(error){ throw error }

        response.status(200).json(results.rows)
    })
}

// Pega usuários pelo id
const getUserById = (request, response) =>{
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM usuarios WHERE id = $1', [id], (error, results) => {
        if(error){ throw error }

        response.status(200).json(results.rows)
    })
}

// Cria usuario
const createUser = (request, response) => {
    const {nome, email, senha} = request.body

    pool.query('INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)', [nome, email, senha], (error, results) => {
        if(error){ throw error }

        response.status(201).send(`Usuário adicionado com sucesso`)
    })
}

// Atualizar cadastro
const updateUser = (request, response) => {
    const id = request.params.id
    const {nome, email, senha} = request.body

    pool.query('UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4', [nome, email, senha, id],
    (error, results) => {
        if(error){ throw error}

        response.status(200).send("Usuário modificado com sucesso")
    })
}

// Deletar cadastro
const deleteUser = (request, response) => {
    const id = request.params.id

    pool.query('DELETE FROM usuarios WHERE id = $1', [id], (error, results) => {
        if(error){ throw error }

        response.status(200).send("Usuário deletado com sucesso")
    })
}

export {getUsers, getUserById, createUser, updateUser, deleteUser}