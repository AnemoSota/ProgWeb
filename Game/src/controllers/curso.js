
const models = require('../models/index');
const curso = models.Curso;

async function index (req, res) {
    res.render('curso/index', {})
};

async function read (req, res) {
    const cursoId = req.params.id;
    res.end(cursoId);
};

async function create (req, res) {
// const create = async function (req, res) {
    if (req.route.methods.get) {
        res.render('curso/create');
    } else {
    //    const curso_1 = await curso.create({
        const curso_1 = await curso.create({
            sigla: req.body.sigla,
            nome: req.body.nome //,
            // descricao: req.body.descricao,
            // id_area: req.body.area
        });
        res.redirect('/curso');
    }
};

async function update (req, res) {};
async function remove (req, res) {};

module.exports = { index, read, create, update, remove }