import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransaction';


import { ContainerInputOutputButton, ContainerModalNewTransaction, RadioBox } from './styledmodal';

interface PropsNewTransactionModal{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalTransaction({isOpen, onRequestClose}: PropsNewTransactionModal){
    const {createTransaction} = useTransactions();
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title, 
            amount, 
            category, 
            type
        })

        setTitle(''); setAmount(0); setCategory(''); setType('deposit');
        onRequestClose();
    }

    return(
        <Modal
            isOpen = {isOpen}
            onRequestClose = {onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="Close Modal"/>
            </button>

            <ContainerModalNewTransaction onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar</h2>

                <input
                    placeholder='Titulo'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <ContainerInputOutputButton>
                    <RadioBox 
                        type="button"
                        onClick={() => {setType('deposit');}}  
                        isActive={type === 'deposit'}   
                        activeColor = "green"               
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => {setType('withdraw');}}
                        isActive={type === 'withdraw'}                  
                        activeColor = "red"               

                    >
                        <img src={outcomeImg} alt="Sa??da"/>
                        <span>Sa??da</span>
                    </RadioBox>
                </ContainerInputOutputButton>

                <input
                    placeholder="Categoria"
                    value = {category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Add
                </button>
            </ContainerModalNewTransaction>
        </Modal>
    )
}