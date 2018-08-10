//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porFazer = require('./por-fazer/por-fazer');
//console.log(argv);

let comando = argv._[0];

switch(comando){
    case 'criar':
        let tarefa = porFazer.criar(argv.descricao);
        console.log(tarefa);
        break;
    case 'listar':
        let listado = porFazer.getListado();

        for (let tarefa of listado){
            console.log('=======Por Fazer======='.green);
            console.log(tarefa.descricao);
            console.log('Estado: ', tarefa.completado);
            console.log('======================='.green);
            //Execute o comando:node app listar
        }
        break;
    case 'atualizar':
        let atualizado = porFazer.atualizar(argv.descricao, argv.completado);
        console.log(atualizado);
        break;
        //Execute o comando: node app atualizar -d lol -c true para mudar o completado
        //Execute o comando para listar: node app listar
        //Note que a atividade lol está com o estado: true agora
    case 'apagar':
        let apagado = porFazer.apagar(argv.descricao);
        console.log(apagado);
        break;
    default:
        console.log('Comando não é reconhecido');
}