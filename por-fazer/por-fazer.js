
const fs = require('fs');

let listadoPorFazer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorFazer);

    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('Não foi possível gravar', err);
    });
}

const carregarDB = () => {
    try {
       listadoPorFazer = require('../db/data.json'); 
    } catch (error) {
        listadoPorFazer = [];
    }
    


}

const criar = (descricao) => {
    carregarDB();

    let porFazer ={
        descricao,
        completado:false
    };

    listadoPorFazer.push(porFazer);

    guardarDB();
    //Execute o comando: node app criar -d "Passear com o cachorro"
    //Note que o arquivo data.json tem esta saída:
    //[{"descricao":"Passear com o cachorro","completado":false}]
    //Se executar o comando muitas vezes verá que o conteúdo é reescrito
    //Ou seja, não acumula informações semre sobrescreve

    return porFazer;
}

const getListado = () =>{
    carregarDB();
    return listadoPorFazer;
}

const atualizar = (descricao, completado = true) => {
    carregarDB();

    let index = listadoPorFazer.findIndex(tarefa => tarefa.descricao === descricao)

    if (index >=0){
        listadoPorFazer[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
}

const apagar = (descricao) => {
    carregarDB();

    let novoListado = listadoPorFazer.filter(tarefa => tarefa.descricao !== descricao);
    if(listadoPorFazer.length === novoListado.length){
        return false;
    }else{
        listadoPorFazer = novoListado;
        guardarDB();
        return true;
    }
    //Execute o comando: node app apagar -d "Frase"
}

module.exports = {
    criar,
    getListado,
    atualizar,
    apagar
}