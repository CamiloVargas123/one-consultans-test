import { Button, HStack, VStack } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { DataAcademyForm } from '../DataAcademy'
import { DataPersonalForm } from '../DataPersonal'

interface Props {
  setStep: Dispatch<SetStateAction<number>>
}

export default function Summary({ setStep }: Props) {
  return (
    <VStack gap={4}>
      <DataPersonalForm isRead={true} />
      <DataAcademyForm isRead={true} />
      <HStack w="100%" pt={10}>
        <Button w="100%" onClick={() => setStep(1)}>Cancelar</Button>
        <Button w="100%" colorScheme={"blue"} onClick={() => setStep(e => e + 1)}>Guardar información</Button>
      </HStack>
    </VStack>
  )
}
