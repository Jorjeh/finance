import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransaction";
import { ContainerTable } from "./styledtable";

export function Tabletransactions(){
    const {transactions} = useTransactions();

    return(
        <ContainerTable>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
     
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(Number(transaction.amount))}
                            </td>

                            <td>{transaction.category}</td>
                            
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ContainerTable>
    )
}