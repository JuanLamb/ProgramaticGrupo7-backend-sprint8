const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const cors = require('cors');

const db = require('./src/database/models');
const sequelize = db.sequelize;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use (express.json());
app.use(methodOverride('_method'));


app.use(session({
    secret: 'Secretoo',
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());
app.use(userLoggedMiddleware);

const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');

// Llamo routers de API
const apiUsersRouter = require("./routes/api/users");
const apiProductsRouter = require("./routes/api/products");

app.use('/', homeRouter);
app.use('/', userRouter);
app.use('/products', productsRouter);

// Declaro urls de APIs
app.use('/api/users', apiUsersRouter);
app.use('/api/products', apiProductsRouter);
app.use(function(req, res, next) {
    res.status(404).json({
        status: "error 400",
        message: "Página inexistente"
    });
  });

app.listen(port || 3000, async () => {
    console.log('Servidor corriendo en puerto');
    // await sequelize.authenticate();
    console.log('Database conectada!')
});