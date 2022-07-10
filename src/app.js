import path from 'path';
import express from "express";
import indexRoutes from "./routes/tasks.routes";
import exphbs, { create } from 'express-handlebars';
import morgan from 'morgan'; // es un middleware

const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // esto último indica que la carpeta views está dentor de src
app.engine(
    '.hbs', 
    create({
        layoutsDir: path.join(app.get('views'), "layouts"),
        partialsDir: path.join(app.get('views'), "partials"),
        defaultLayout: 'main',
        extname: ".hbs"
    }).engine
);
app.set('view engine', '.hbs')

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Format Document (prettier) to add format (punto y coma y otros. js)
// routes
app.use(indexRoutes);

// public route
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404");
});

export default app;