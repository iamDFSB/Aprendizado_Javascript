import 'core-js/stable'; // Para transpilar a Promise para um navegador mais antigo.
import 'regenerator-runtime/runtime'; // Para permitir o uso do async/await.

import execute from './modules/promises';
import './assets/css/style.css';


await execute(); 