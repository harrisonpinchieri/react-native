import {extendTheme} from 'native-base'

export const TEMAS = extendTheme({
    colors: {
        gray:{
            300:'#8d8d99'
        },
        blue:{
            500: '#339CFF',
            800: '#0B3B60'
        },
        white: '#fff',
        black: '#000'
    },

    fontSize:{
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
})