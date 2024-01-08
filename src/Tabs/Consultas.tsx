import { VStack, Text } from "native-base"
import { CardConsulta } from "../componentes/CardConsulta"

export default function Consultas() {
    return (

        <VStack>

            <CardConsulta
                nome="Dr. André"
                especialidade="Cardioligsta"
                foto="https://github.com/harrisonpinchieri.png"
                data='20/04/2023'
                foiAgendado
                foiAtendido

            />

        </VStack>

    )
}