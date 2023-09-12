// import modules

import express from 'express'
// import the student data
import { students } from './data/student-data.js'

// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes

app.get('/', (req, res) => {
  // res.send('<h1>hello, friend</h1>')
  res.redirect('/home')
})

app.get('/home', (req, res) => {
  // res.send('<h1>Home Page</h1>')
  res.render('home')
})

app.get('/students', (req, res) => {
  res.render('students/index', {
    students: students
  })
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})