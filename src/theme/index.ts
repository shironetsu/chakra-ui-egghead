import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { Montserrat, Inter } from 'next/font/google'

/* 
 * @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700&display=swap');
 */

const headingFont = Montserrat({
    weight: '700',
    display: 'swap',
    subsets: ['latin'],
})

const bodyFont = Inter({
    weight: ["400", "500", "600"],
    display: 'swap',
    subsets: ['latin'],
})



export const theme = extendTheme({
    colors: {
        brand: {
            50: '#f5fee5',
            100: '#e1fbb2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',
          },
    },
    fonts: {
        heading: `${headingFont.style.fontFamily}, ${baseTheme.fonts.heading}`,
        body: `${bodyFont.style.fontFamily}, ${baseTheme.fonts.body}`,
    }
})