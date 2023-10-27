
const game = (req, res) => {
    // const conteudo = 'Página sobre a aplicação';
    res.render('game/index', {layout: false});
   };

module.exports = { game}