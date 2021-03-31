import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export default function TransactionsTable() {

    useEffect(() => {
        api.get('/transactions').then(response => console.log(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Consultoria</td>
                        <td className="deposit">R$1.000,00</td>
                        <td>Consultoria técnica</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td>Consultoria</td>
                        <td className="withdraw">- R$600,00</td>
                        <td>Aluguel</td>
                        <td>20/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}