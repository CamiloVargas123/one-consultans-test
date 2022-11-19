import { Box, Container, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { DataPersonalForm } from './pages'

function App() {
  const [step, setStep] = useState(1)
  return (
    <Box>
      <Container maxW={"container.md"} mt={10}>
        {
          step === 1 && <DataPersonalForm setStep={setStep} />
        }
      </Container>
    </Box>
  )
}

export default App
