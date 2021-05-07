import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Hora Extra',
          amount: 1500,
          type: 'deposit',
          category: 'Trabalho',
          createdAt: new Date('2021-05-04 18:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 600,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-05-05 17:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
        const transaction = JSON.parse(request.requestBody);
        return schema.create('transaction', transaction);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);