import { useContext } from 'react';
import logoEntrada from '../../assets/income.svg';
import logoSaida from '../../assets/outcome.svg';
import logoTotal from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransaction';
import { ContainerSummary } from "./styledsummary";

export function Summary(){
    const {transactions} = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;

        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    },
    {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <ContainerSummary>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={logoEntrada} alt="Entrada" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(Number(summary.deposits))}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={logoSaida} alt="Saída" />
                </header>
                <strong>-
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(Number(summary.withdraws))}
                </strong>
            </div>

            <div className='background-total'>
                <header>
                    <p>Total</p>
                    <img src={logoTotal} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(Number(summary.total))}
                </strong>
            </div>
        </ContainerSummary>
    )
}