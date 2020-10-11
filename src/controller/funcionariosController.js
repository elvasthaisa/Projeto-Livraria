const funcionarios = require('../model/funcionarios.json');
const fs = require('fs');

const getAll = (req, res) => {
    console.log(req.url);

    res.status(200).send(funcionarios);
}

const getById = (req, res) => {
    const id = req.params.id;

    const funcionarioFiltrado = funcionarios.find((funcionario) => funcionario.id == id);
    res.status(200).send(funcionarioFiltrado);
}

const getIdadeById = (req, res) => {
    const id = req.params.id;
    // const idade = req.params.idade;

    const funcFiltrado = funcionarios.find((funcionario) => funcionario.id == id)
    const idadeFiltrada = funcFiltrado.map((funcionario) => funcionario.idade);

    res.status(200).send(idadeFiltrada);
}

const postFuncionarios = (req, res) => {
    console.log(req.body);
    const { id, nome, idade, cpf, dataNascimento, enderecoCompleto } = req.body;
    funcionarios.push({ id, nome, idade, cpf, dataNascimento, enderecoCompleto });

    fs.writeFile('./src/model/funcionarios.json', JSON.stringify(funcionarios), 'utf8', function (err) {
        if (err) {
            return res.status(424).send({ message: err });
        }

        console.log('Arquivo atualizado com sucesso!');
    });

    res.status(201).send(funcionarios);
}

const deleteFuncionarios = (req, res) => {
    const id = req.params.id;
    const funcionarioFiltrado = funcionarios.find((funcionario) => funcionario.id == id);
    const index = funcionarios.indexOf(funcionarioFiltrado);
    funcionarios.splice(index, 1);

    fs.writeFile('./src/model/funcionarios.json', JSON.stringify(funcionarios), 'utf8', function (err) {
        if (err) {
            return res.status(200).send(funcionarios);
        }

        console.log('Arquivo atualizado com sucesso!');
    });

    res.status(200).send(funcionarios);
}

module.exports = {
    getAll,
    getById,
    getIdadeById,
    postFuncionarios,
    deleteFuncionarios,
}