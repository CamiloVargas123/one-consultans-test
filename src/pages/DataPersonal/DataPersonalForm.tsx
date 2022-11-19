import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Input } from '@chakra-ui/react'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { DataPersonal } from 'src/models/dataPersonal.type'
import { savePersonalData, selectPersonalData } from 'src/redux/slices/personalData'

interface Props {
  setStep?: Dispatch<SetStateAction<number>>
  isRead?: boolean
}
export default function DataPersonalForm({ setStep, isRead }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<DataPersonal>()
  const [onError, setOnError] = useState(false)
  const personalData = useSelector(selectPersonalData)
  const dispatch = useDispatch()

  async function onSubmit(data: DataPersonal) {
    try {
      // save in database
      dispatch(savePersonalData(data))
      if (setStep) setStep(e => e + 1)
    } catch (error) {
      console.error(error)
      setOnError(true)
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} w="100%">

      <Grid gridTemplateColumns={'repeat(2, 1fr'} gap={6}>

        <GridItem colSpan={2}>
          <Heading textAlign={"center"}>Datos Personales</Heading>
        </GridItem>

        <GridItem>
          <FormControl isRequired isInvalid={errors.hasOwnProperty('firtName')} >
            <FormLabel>Nombres</FormLabel>
            <Input disabled={isRead} defaultValue={personalData.firtName} {...register("firtName", {
              required: "Campo requerido"
            })} />
            {errors.hasOwnProperty('firtName') && <FormErrorMessage textAlign="end" color={"red.500"}>{errors.firtName?.message}</FormErrorMessage>}
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl isRequired isInvalid={errors.hasOwnProperty('lastName')} >
            <FormLabel>Apellidos</FormLabel>
            <Input defaultValue={personalData.lastName} disabled={isRead} {...register("lastName", {
              required: "Campo requerido"
            })} />
            {errors.hasOwnProperty('lastName') && <FormErrorMessage textAlign="end" color={"red.500"}>{errors.lastName?.message}</FormErrorMessage>}
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl isRequired isInvalid={errors.hasOwnProperty('email')}>
            <FormLabel>Email</FormLabel>
            <Input defaultValue={personalData.email} disabled={isRead} type='email' {...register("email", {
              required: "Campo requerido"
            })} />
            {errors.hasOwnProperty('email') && <FormErrorMessage>{errors.email?.message}</FormErrorMessage>}
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl isRequired isInvalid={errors.hasOwnProperty('age')}>
            <FormLabel>Edad</FormLabel>
            <Input defaultValue={personalData.age} disabled={isRead} type='number' {...register("age", {
              required: "Campo requerido",
              min: { value: 11, message: "Edad no valida" },
              max: { value: 99, message: "Edad fuera de rango" }
            })} />
            {errors.hasOwnProperty('age') && <FormErrorMessage>{errors.age?.message}</FormErrorMessage>}
          </FormControl>
        </GridItem>

        {
          !isRead &&
          <GridItem colSpan={2} alignContent="end">
            <Button type="submit" w="100%" colorScheme={"blue"}>Siguiente</Button>
          </GridItem>
        }

        {
          onError &&
          <GridItem colSpan={2}>
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>nos se han podido guardar tus datos</AlertDescription>
            </Alert>
          </GridItem>
        }
      </Grid>
      {
        personalData.isSend && setStep &&
        <Button w="100%" colorScheme={"green"} onClick={() => setStep(4)} mt={4}>Ir a la tabla de usuarios registrados</Button>
      }
    </Box>
  )
}
