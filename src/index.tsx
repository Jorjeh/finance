import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salario',
          type: 'deposit',
          category: 'Ganhos',
          amount: 4500,
          createAt: new Date('2022-02-24 11:00:00')
        },
        {
          id: 2,
          title: 'Aliguel',
          type: 'withdraw',
          category: 'Aluguel',
          amount: 1500,
          createAt: new Date('2022-02-24 11:01:00')
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
  
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

