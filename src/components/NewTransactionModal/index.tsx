import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { useTransaction } from '../../hooks/useTransaction';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    
    const { createTransaction } = useTransaction();


    async function handleCreateTransaction(event: FormEvent) {
        event.preventDefault();
        
        await createTransaction({
            title,
            amount: Number(amount),
            type,
            category
        });

       handleCloseModal();
    }

    function handleCloseModal() {
        resetForm();
        onRequestClose();
    }

    function resetForm() {
        setType('');
        setTitle('');
        setAmount('');
        setCategory('');
    }

    return (
      <Modal 
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
       >
        
        <button 
            type="button" 
            onClick={handleCloseModal}
            className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateTransaction}>
            <h2>Cadastrar transação</h2>
            <input 
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}/>
            <input 
                type="number"
                min="1"
                placeholder="Valor"
                value={amount}
                onChange={event => setAmount(event.target.value)}/>

            <TransactionTypeContainer>
                <RadioBox 
                    type="button"
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>  
                <RadioBox 
                    type="button"
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>     
            </TransactionTypeContainer>

            <input 
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}/>
            
            <button type="submit">
                Cadastrar
            </button>
        </Container>
      </Modal>
    )
}