const mongoose = require('mongoose')
const dotenv = require('dotenv')

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT REJECTION! 💥 Shutting down....');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path:'./.env' })
const app = require('./app')

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
    .connect(DB, {
        useCreateIndex:true,
        useFindAndModify:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('DB connected successfully!'))

const port = process.env.PORT || 3000
const server = app.listen( port , () => {
    console.log(`Server is running on ${port}....`);
})

process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! 💥 Shutting down....');
    server.close(() => {
        process.exit(1);
    });
});
