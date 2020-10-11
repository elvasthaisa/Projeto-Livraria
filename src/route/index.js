const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ 
        message: "Olá, seja bem-vindo(a) à livraria digital Porto7 - A melhor livraria em linha reta do Brasil",
        version: "1.0.0"
     })
});

module.exports = router;