import fsPromises from 'node:fs/promises';
import fs  from 'node:fs';
import path from 'node:path';

import getDirname from './getDirname.cjs';


// Ações para fazer no arquivo
const fileActions = (pathFile) => {
    const listPath = pathFile.replace('./', '').split('/');
    const fullPath = path.resolve(getDirname(), ...listPath);
    console.log(fullPath);
    return {
        async create(){
            if (fs.existsSync(fullPath)) console.log('Esse arquivo não existe');
            await fsPromises.writeFile(fullPath, '', {encoding:'utf-8', });
            console.log('Arquivo criado');
        },
        async read(){
            if (fs.existsSync(fullPath)) {
                const result = await fsPromises.readFile(fullPath, {encoding:'utf-8'});
                return result ? JSON.parse(result) : 'Arquivo vazio';
            }
            return 'Esse arquivo não existe';
        },
        async update(content){
            fs.existsSync(fullPath) && await fsPromises.writeFile(fullPath, JSON.stringify(content, '', 2), {encoding:'utf-8', flag: 'w'});
            console.log("Arquivo Atualizado");
        },
        async deleteFile(){
            fs.existsSync(fullPath) && await fsPromises.unlink(fullPath);
            console.log('Arquivo Deletado');
        },
    }
}

// Executando as ações
const { create, read, update, deleteFile } = fileActions('./db.json');

create();

setTimeout(async ()=>{
    await update([
        {id : Date.now(), content: 'Bom dia meu mano'},
        {id : Date.now(), content: 'Boa tarde meu mano'},
        {id : Date.now(), content: 'Boa noite meu mano'},
    ]);
    
    console.log(await read());

}, 5000);


setTimeout(()=>{
    deleteFile();
}, 8000);
