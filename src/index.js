import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MessageBoardApp from 'MessageBoardApp'
import MemoryStorage from 'storage/MemoryStorage';
import MemoryContract from 'contracts/MemoryContract';
import MessageBoardView from 'components/MessageBoardView';
import registerServiceWorker from './registerServiceWorker';

let localStorage = new MemoryStorage();
let contract = new MemoryContract();
let menloStorage = new MemoryStorage();
let view = ReactDOM.render(<MessageBoardView />, document.getElementById('root'));
let app = new MessageBoardApp({view: view, localStorage: localStorage, menloStorage: menloStorage, contract: contract});

app.viewMessages();

registerServiceWorker();
