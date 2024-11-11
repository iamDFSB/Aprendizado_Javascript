function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

    Conta.prototype.sacar = function (valor) {
        if (this.saldo < valor){
            console.log("Valor em seu saldo é insuficiente para prosseguir");
            return;
        }

        this.saldo -= valor;
        this.verSaldo();
    }

    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
        this.verSaldo();
    }
    Conta.prototype.verSaldo = function () {
        console.log(`Ag/c: ${this.agencia}/${this.conta}\nSaldo: R$${this.saldo.toFixed(2)}`);
    }

}


// const conta1 = new Conta(12, 234, 20);

// conta1.depositar(20);
// conta1.depositar(20);
// conta1.sacar(30);

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

    Object.setPrototypeOf(ContaCorrente.prototype, Object.create(Conta.prototype));
    // Polimorfismo
    ContaCorrente.prototype.sacar = function (valor) {
        if ((this.saldo + this.limite) < valor){
            console.log("Valor em seu saldo é insuficiente para prosseguir");
            return;
        }

        this.saldo -= valor;
        this.verSaldo();
    }
}

const cc = new ContaCorrente(12, 234, 0, 30);
cc.depositar(10);
cc.sacar(30);