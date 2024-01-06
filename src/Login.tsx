
import { VStack, Image, Text, Box, FormControl, Input } from 'native-base'
import Logo from './assets/Logo.png'

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" p={5}>

      <Image source={Logo} alt='Logo Voll' />

      <Text
        fontSize="2xl"
        fontWeight='bold'
        color='gray.500'
        textAlign='center'
        mt={5}
      >
        Faça login em sua conta
      </Text>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder='Insira seu endereço de e-mail'
            size='lg'
            w='100%'
            borderRadius='lg'
            bgColor='gray.100'>

          </Input>
        </FormControl>

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            placeholder='Insira seu endereço de e-mail'
            size='lg'
            w='100%'
            borderRadius='lg'
            bgColor='gray.100'>

          </Input>
        </FormControl>




      </Box>


    </VStack >
  );
}

