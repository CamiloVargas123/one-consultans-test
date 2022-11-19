import { Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Grid, GridItem, Heading, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { DataPersonal } from 'src/models/dataPersonal.type'

export default function DataPersonalForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<DataPersonal>()
  const dispatch = useDispatch()
  
  async function onSubmit(data: DataPersonal) {
    console.log("🚀 ~ file: DataPersonal.tsx ~ line 9 ~ onSubmit ~ data", data)
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Container maxW={"container.md"} mt={10}>
        <Grid gridTemplateColumns={'repeat(2, 1fr'} gap={6}>

          <GridItem colSpan={2}>
            <Heading textAlign={"center"}>Datos Personales</Heading>
          </GridItem>

          <GridItem>
            <FormControl isInvalid={errors.hasOwnProperty('firtName')} >
              <FormLabel>Nombres</FormLabel>
              <Input errorBorderColor='red' {...register("firtName", {
                required: "Campo requerido"
              })} />
              {errors.hasOwnProperty('firtName') && <FormErrorMessage textAlign="end" color={"red.500"}>{errors.firtName?.message}</FormErrorMessage>}
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl isInvalid={errors.hasOwnProperty('lastName')} >
              <FormLabel>Apellidos</FormLabel>
              <Input errorBorderColor='red' {...register("lastName", {
                required: "Campo requerido"
              })} />
              {errors.hasOwnProperty('lastName') && <FormErrorMessage textAlign="end" color={"red.500"}>{errors.lastName?.message}</FormErrorMessage>}
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl isInvalid={errors.hasOwnProperty('email')}>
              <FormLabel>Email</FormLabel>
              <Input type='email' {...register("email", {
                required: "Campo requerido"
              })} />
              {errors.hasOwnProperty('email') && <FormErrorMessage>{errors.email?.message}</FormErrorMessage>}
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl isInvalid={errors.hasOwnProperty('age')}>
              <FormLabel>Edad</FormLabel>
              <Input type='number' {...register("age", {
                required: "Campo requerido",
                min: { value: 11, message: "Edad no valida" },
                max: { value: 99, message: "Edad fuera de rango" }
              })} />
              {errors.hasOwnProperty('age') && <FormErrorMessage>{errors.age?.message}</FormErrorMessage>}
            </FormControl>
          </GridItem>

          <GridItem colSpan={2} alignContent="end">
            <Button type="submit" w="100%">Guardar</Button>
          </GridItem>
        </Grid>
      </Container>

    </Box>
  )
}
