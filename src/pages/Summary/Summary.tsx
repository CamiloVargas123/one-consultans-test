import { Button, HStack, VStack } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAcademyData } from 'src/redux/slices/academyData'
import { modifyPersonalData, selectPersonalData } from 'src/redux/slices/personalData'
import { DataAcademyForm } from '../DataAcademy'
import { DataPersonalForm } from '../DataPersonal'

interface Props {
  setStep: Dispatch<SetStateAction<number>>
}

export default function Summary({ setStep }: Props) {
  const personalData = useSelector(selectPersonalData)
  const academyData = useSelector(selectAcademyData)
  const dispatch = useDispatch()

  function handleClick() {
    let users = localStorage.getItem('users-one')
    if (users) {
      const formmated = JSON.parse(users)
      localStorage.setItem("users-one", JSON.stringify(formmated.concat({ ...personalData, ...academyData, id: Date.now() })))
    }
    if (!users) {
      localStorage.setItem("users-one", JSON.stringify([{ ...personalData, ...academyData, id: Date.now() }]))
    }
    dispatch(modifyPersonalData({ isSend: true }))
    setStep(e => e + 1)
  }

  return (
    <VStack gap={4}>
      <DataPersonalForm isRead={true} />
      <DataAcademyForm isRead={true} />
      <HStack w="100%" pt={10}>
        <Button w="100%" onClick={() => setStep(1)}>Cancelar</Button>
        <Button w="100%" colorScheme={"blue"} onClick={handleClick}>Guardar información</Button>
      </HStack>
      {
        personalData.isSend &&
        <Button w="100%" colorScheme={"green"} onClick={() => setStep(4)}>Ir a la tabla de usuarios registrados</Button>
      }
    </VStack>
  )
}
