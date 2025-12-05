'use client'
import { ThemeProvider } from '@/app/context/Theme-Context'
import ThemeContext from './ThemeContext'

// type Props = {}

const page = () => {
  return (
    <ThemeProvider>
        <ThemeContext />
    </ThemeProvider>
  )
}

export default page