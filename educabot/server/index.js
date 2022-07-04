'use strict'
const express = require('express')
const mysql = require('mysql')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json({ limit: '10mb' }))

const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'educabotdb'
}

app.post('/api/login', (req, res) => {
	const { email, password } = req.body
	const values = [email, password]
	var connection = mysql.createConnection(credentials)
	connection.query("SELECT * FROM users WHERE email = ? AND password = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			if (result.length > 0) {
				res.status(200).send({
					"id": result[0].id,
					"email": result[0].email,
					"name": result[0].name,
					"surname": result[0].surname
				})
			} else {
				res.status(400).send('Usuario no existente')
			}
		}
	})
	connection.end()
})

app.listen(5000, console.log("Server running at http://localhost:5000"))