import { Summary } from "../summary/summary";
import { Tabletransactions } from "../tabletransactions/tabletransaction";
import { ContainerDashboard } from "./styleddashboard";

export function Dashboard(){
    return(
        <ContainerDashboard>
            <Summary/>
            <Tabletransactions/>
        </ContainerDashboard>
    )
}