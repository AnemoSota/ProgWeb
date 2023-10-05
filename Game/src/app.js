const express = require("express");
const app = express();
const router = require("./router/router");
const handlebars = require('express-handlebars');
const sass = require('node-sass-middleware');


const PORT = 3000;

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: "compressed",
    prefix: "/css",
}));

app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/webfonts", express.static(`${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`));

app.use('/js', [
    express.static(`${__dirname}/../public/js`),
    express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
]);

app.use(router);

app.listen(PORT, () => {
 console.log(`Express app iniciada na porta ${PORT}.`);
});
