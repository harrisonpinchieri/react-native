import { VStack, Text, ScrollView, Divider, Box, Stack, Row, Center, Image } from "native-base"
import { Titulo } from "../componentes/Titulo"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Botao } from "../componentes/Botao"
import Logo from '../assets/Logo.png'
import { depoimentos } from "../utils/mock"

export default function Principal() {
    return (

        <ScrollView flex={1}>

            <VStack flex={1} p={5} >

                <Image source={Logo} alt='Logo Voll' />

                <Titulo alignSelf="flex-start" color="blue.500" >Boas-Vindas!</Titulo>

                <Box borderWidth="1" mt={5} rounded="lg" borderColor="coolGray.200" overflow="hidden" p="5" shadow={3} alignItems={"center"}
                    _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "gray.50"
                    }}>


                    <EntradaTexto

                        placeholder='Digite a especialidade'
                    />
                    <EntradaTexto

                        placeholder='Digite sua localização'
                    />

                    <Botao alignContent={"center"}> Buscar</Botao>


                </Box>

                <Titulo color="blue.800">Depoimentos</Titulo>

                <VStack space={3} divider={<Divider />} w="100%">
                    {
                        depoimentos.map(depoimento => (
                            <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                                <Text color="gray.300" fontSize="md" textAlign="justify">
                                    {depoimento.text}
                                </Text>
                                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{depoimento.titulo}</Text>
                            </Box>
                        ))
                    }
                </VStack>




            </VStack>

        </ScrollView >

    )
}