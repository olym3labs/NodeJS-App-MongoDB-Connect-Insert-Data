const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');

const mongoConnect = async() => {
    try {
        const connect = await mongoose.connect(process.env.LOCAL_URI)
        console.log('MongoDB is connected successfully.');
    } catch (error) {
        console.log(error);
    }
}

mongoConnect();

const UserSchema = mongoose.model('User', {
    name: String,
    email: String,
    phone: Number,
});

const User = new UserSchema({ 
    name: "MATTHEW NHA",
    email: "thanhnhaweb3@gmail.com",
    phone: "0974639191"
})

User.save().then(()=>console.log('User saved successfully!'))
app.get('/', (req, res) => {
  res.send('Hello from the server!')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`)
})
