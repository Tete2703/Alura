function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfo = function() {
        return `${this.nome}, ${this.email}`
    }
}

//const novoUser = new User('Marta', 'marta@marta.com');
//console.log(novoUser.exibirInfo());

function Admin(role) {
    User.call(this, 'Marta', 'marta@marta.com');
    this.role = role || 'estudante'
}

admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');
console.log (novoUser.exibirInfo());
console.log (novoUser.role);