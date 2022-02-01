import logoImg from '../../assets/logo.svg'

import { ContainerHeader, ContentHeader } from './styledheader'

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){
    return(
        <ContainerHeader>
            <ContentHeader>
                <img src={logoImg} alt="Logo" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </ContentHeader>
        </ContainerHeader>
    )
}