import { useState } from "react";
import { Dashboard } from "./Components/Dashboard/dashboard";
import { Header } from "./Components/Header/header";
import { GlobalStyle } from "./styled/global";
import Modal from 'react-modal';
import { ModalTransaction } from "./Components/ModalTransaction/modaltransaction";
import { TransactionsContextProvider } from './hooks/useTransaction';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsContextProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <ModalTransaction 
        isOpen = {isNewTransactionModalOpen}
        onRequestClose = {handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsContextProvider>
  );
}

