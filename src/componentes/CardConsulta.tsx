import { Text, Avatar, VStack } from 'native-base'
import { Botao } from './Botao'

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}


export function CardConsulta({
    nome,
    foto,
    data,
    especialidade,
    foiAtendido,
    foiAgendado
}: CardProps) {
    return (
        <VStack w="100%" bg={foiAtendido ? 'blue.100' : 'white'} p={5} borderRadius="lg" shadow="2">
            <VStack flexDirection="row">
                <Avatar source={{ uri: foto }} size="lg" />
                <VStack pl="4">
                    <Text fontSize="md" bold>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>

            <Botao mt="4">{foiAgendado ? 'Cancelar consulta' : 'Agendar Consulta'} </Botao>
        </VStack>
    )
}