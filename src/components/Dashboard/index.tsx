import { Container } from './styles';
import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable';

export default function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}