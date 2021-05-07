import { useTransaction } from '../../hooks/useTransaction';
import { Container } from './styles';

export default function TransactionsTable() {

    const { transactions } = useTransaction();

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
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}> { transaction.type === 'withdraw' ? '- ' : '' } { new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                 }).format(transaction.amount) }</td>
                                <td>{transaction.category}</td>
                                <td>{ new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(transaction.createdAt)) }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}