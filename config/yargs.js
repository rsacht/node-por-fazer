const descricao ={
    demand: true,
    alias: 'd',
    desc: 'Descrição da tarefa por fazer'
};
const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado ou pendente a tarefa'
}
const argv = require('yargs')
    .command('criar', 'Cria um elemento por fazer',{
        descricao
    })
    .command('atualizar', 'Atualiza um elemento por fazer',{
        descricao,
        completado
    })
    .command('apagar', 'Apaga uma tarefa',{
        descricao
    })
    .help()
    .argv;

module.exports ={
    argv
}