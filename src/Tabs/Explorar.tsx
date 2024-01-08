import { VStack, Text, ScrollView } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Botao } from "../componentes/Botao"
import { Titulo } from "../componentes/Titulo"
import { CardConsulta } from "../componentes/CardConsulta"

export default function Explorar() {
    return (

        <ScrollView p={5}>

            <VStack w="100%" bg="white" borderRadius="lg" shadow="2" p={5} mt={5}>
                <EntradaTexto

                    placeholder='Digite a especialidade'
                />
                <EntradaTexto

                    placeholder='Digite sua localização'
                />
                <Botao mt={4}>Buscar</Botao>
            </VStack>

            <Titulo color="blue.500" fontSize="lg" mb="2">Resultado da busca</Titulo>


            <CardConsulta
                nome="Dr. André"
                especialidade="Cardioligsta"
                foto="https://github.com/harrisonpinchieri.png"
                data='20/04/2023'
                foiAgendado


            />


            <CardConsulta
                nome="Dr. André"
                especialidade="Cardioligsta"
                foto="https://github.com/harrisonpinchieri.png"
                data='20/04/2023'
                foiAgendado


            />

            <CardConsulta
                nome="Dr. André"
                especialidade="Cardioligsta"
                foto="https://github.com/harrisonpinchieri.png"
                data='20/04/2023'
                foiAgendado


            />
        </ScrollView>

    )
}