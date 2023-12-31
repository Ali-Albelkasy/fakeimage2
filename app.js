const express = require('express')
const multer = require('multer')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const path = require('path')
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/image')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname)
    }
})

const upload = multer({ dest: '/images', storage })
app.use(upload.single('img'))
app.use(require('./router/app.routes'))
app.get('/', (req, res) => res.send('Hello World!'))
mongoose.connect('mongodb+srv://Albelkasy:niDzXFwsDmBnmh8N@cluster0.5tl86zq.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('connected');
})
app.listen(process.env.PORT||port, () => console.log(`Example app listening on port ${port}!`))