
class Forms{
    constructor(){
        this.nome;
        this.sobrenome;
        this.cpf;
        this.usuario;

        Object.defineProperties(this, {
            senha: {
                enumerable:false,
                writable: true,
                configurable:false,
            },
            repsenha: {
                enumerable:false,
                writable: true,
                configurable: false,
            }
        });
    }

    static createInputs(){
        const dataOfInputs = ['Nome', 'Sobrenome', 'CPF', 'Usuario', 'Senha', 'Repetir_Senha'];

        const tagMain = document.querySelector('main.form_tag');

        for (const value of dataOfInputs) {
            
            const label = document.createElement('label');
            const input = document.createElement('input');
            
            input.type = (!(value.includes("Senha"))) ? 'text' : 'password';
            const valueConfigurated = (value.includes('_')) ? value.replace("_", " ") : value;
            input.placeholder = valueConfigurated;
            label.textContent = valueConfigurated;
            label.appendChild(input);
            label.classList.add(value.toLowerCase());

            tagMain.appendChild(label);

        }

    }

    applyValuesIntoVariables(inputVariable){
        switch (inputVariable.placeholder) {
            case 'Nome':
                this.nome = inputVariable.value;
                break;
            case 'Sobrenome':
                this.sobrenome = inputVariable.value;
                break;
            case 'CPF':
                const splitedCPF = inputVariable.value.slice(0,-3);
                const validate = new ValidaCPF(splitedCPF);
                const correctCPF = validate.buildEntireCPF();

                if (correctCPF !== inputVariable.value){
                   console.log("CPF errado");
                }else{
                    this.cpf = inputVariable.value;
                }

                break;
            case 'Senha':
                this.senha = inputVariable.value;
                break;
            case 'Usuario':
                // Só aceitar apenas strings e números
                this.usuario = inputVariable.value;
                break;
            case 'Repetir Senha':
                this.repsenha = inputVariable.value;
                break;
        
            default:
                console.log(`O valor ${inputVariable.value} não pode ser inserido em nenhuma variavel.`);
                break;
        }
    }

    showAlert(input, placeholder){
        input.classList.add("danger");
        setTimeout(() => {
            alert(`O campo ${placeholder} está vazio, não podemos prosseguir assim.`);
        }, 1000);
    }


    submitBtn(){
        const btnFinal = document.querySelector('button[type="submit"]');
        btnFinal.addEventListener('click', (e) => {
            e.preventDefault();
            const inputs = document.querySelectorAll('input');
            for (const input of inputs) {
                let placeholder = input.placeholder;
                let valor = input.value;

                if (valor) {
                    input.classList.remove("danger");
                    this.applyValuesIntoVariables(input);
                }else{
                    this.showAlert(input, placeholder);
                    break;
                }
            }
        })
    }

}

Forms.createInputs();
const obj = new Forms();

obj.submitBtn();
