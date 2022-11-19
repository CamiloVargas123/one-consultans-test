import { Box, Container } from '@chakra-ui/react'
import { useState } from 'react'
import { DataAcademyForm, DataPersonalForm, Summary, TableRegister } from './pages'

function App() {
  const [step, setStep] = useState(1)
  return (
    <Box>
      <Container maxW={"container.md"} mt={10}>
        {
          step === 1 && <DataPersonalForm setStep={setStep} />
        }
        {
          step === 2 && <DataAcademyForm setStep={setStep} />
        }
        {
          step === 3 && <Summary setStep={setStep} />
        }
        {
          step === 4 && <TableRegister />
        }
      </Container>
    </Box>
  )
}

export default App
