const livros = require('../model/livros.json');
const fs = require('fs');

const getAll = (req, res) => {
    console.log(req.url);

    res.status(200).send(livros);
}

const getAllAvailableStock = (req, res) => {
    const stock = livros.filter(Boolean);
    const stockFiltered = stock.filter((livro) => livro.availableStock);

    res.status(200).send(stockFiltered);
}

const postLivros = (req, res) => {
    console.log(req.body);
    const { id, title, author, yearOfLaunch, publisher, availableStock } = req.body;
    livros.push({ id, title, author, yearOfLaunch, publisher, availableStock });

    fs.writeFile("./src/model/livros.json", JSON.stringify(livros), 'utf8', function (err) {
        if (err) {
            return res.status(424).send({ message: err })
        }

        console.log('Arquivo atualizado com sucesso!');

        res.status(201).send(livros);
    })
}

const deleteLivros = (req, res) => {
    const id = req.params.id;

    const livroFiltrado = livros.find((livro) => livro.id == id);
    const index = livros.indexOf(livroFiltrado);
    livros.splice(index, 1);

    fs.writeFile('./src/model/livros.json', JSON.stringify(livros), 'utf8', function (err) {
        if (err) {
            return res.status(424).send({ message: err });
        }

        console.log('Arquivo atualizado com sucesso!');
    });

    res.status(200).send(livros);
}

module.exports = { 
    getAll,
    getAllAvailableStock,
    postLivros,
    deleteLivros,
}