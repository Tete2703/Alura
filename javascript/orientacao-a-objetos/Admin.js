import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}



const novoAdmin = new Admin('junior', 'jr@jr.com', '2019-03-13')
console.log(novoAdmin.criarCurso('JS', 20))