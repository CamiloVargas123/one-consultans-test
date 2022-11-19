import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { resetAcademyData } from 'src/redux/slices/academyData';
import { resetPerosnalData } from 'src/redux/slices/personalData';
import { Table } from './components';

interface Props {
  setStep: Dispatch<SetStateAction<number>>
}

export default function TableRegister({ setStep }: Props) {
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(resetAcademyData())
    dispatch(resetPerosnalData())
    setStep(1)
  }

  return (
    <Box w="100%" gap={6} display="flex" flexDir={"column"}>
      <Heading textAlign={"center"}>Lista de usuarios registrados</Heading>
      <Table />
      <HStack justifyContent={"flex-end"}>

        <Button onClick={() => setStep(1)}>Ir al inicio</Button>
        <Button colorScheme={"blue"} onClick={handleClick}>Registrar otro usuario</Button>
      </HStack>
    </Box>
  )
}
