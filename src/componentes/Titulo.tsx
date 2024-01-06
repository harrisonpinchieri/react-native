import { Text, ITextProps, Input } from 'native-base'
import { ReactNode } from 'react'

//permite passar dinamicamente o titulo
interface TituloProps extends ITextProps {
    children: ReactNode
}
// ...rest permite passar estilo para o componente 
export function Titulo({ children, ...rest }: TituloProps) {
    return (
        <Text
            fontSize="2xl"
            fontWeight='bold'
            color='gray.500'
            textAlign='center'
            mt={5}
            {...rest}
        >
            {children}
        </Text>
    )
}

