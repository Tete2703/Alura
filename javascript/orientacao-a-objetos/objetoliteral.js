const user = {
    nome: "Tereza",
    email: "tetefonseca@gmail.com",
    nascimento: "1979/03/27",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mel Maria",
    email: "melzinha@gmail.com",
    role: "admin",
    criarCurso() {
        console.log("Curso Criado!");
    }
}
                     //parametro 1 = quem vai herdar
Object.setPrototypeOf(admin, user)
                            //parametro 2 = quem vai passar a herança
admin.criarCurso()
admin.exibirInfos()
