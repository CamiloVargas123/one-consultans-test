import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Input, Select } from '@chakra-ui/react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { DataAcademy } from 'src/models/dataAcademic.type'
import { saveAcademyData, selectAcademyData } from 'src/redux/slices/academyData'

interface Props {
  setStep?: Dispatch<SetStateAction<number>>
  isRead?: boolean
}

export default function DataAcademyForm({ setStep, isRead }: Props) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<DataAcademy>()
  const [onError, setOnError] = useState(false)
  const [selectedEducation, setSelectedEducation] = useState<string>()
  const academyData = useSelector(selectAcademyData)
  const dispatch = useDispatch()

  async function onSubmit(data: DataAcademy) {
    try {
      // save in database
      dispatch(saveAcademyData(data))
      if (setStep) setStep(e => e + 1)
    } catch (error) {
      console.error(error)
      setOnError(true)
    }
  }
  useEffect(() => {
    if (selectedEducation) setValue('title', undefined)
  }, [selectedEducation])


  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} w="100%">
      <Container maxW={"container.md"} mt={10}>
        <Grid gridTemplateColumns={'repeat(2, 1fr'} gap={6}>

          <GridItem colSpan={2}>
            <Heading textAlign={"center"}>Datos Academicos</Heading>
          </GridItem>

          <GridItem>
            <FormControl isRequired isInvalid={errors.hasOwnProperty('levelStudy')} >
              <FormLabel>Nivel de estudio</FormLabel>
              <Select placeholder='Seleccionar nivel de educación' defaultValue={academyData.levelStudy} disabled={isRead} {...register("levelStudy", {
                required: "Campo requerido",
                onChange: (e) => setSelectedEducation(e.target.value)
              })}>
                <option value='Básica'>Básica</option>
                <option value='Universitaria'>Universitaria</option>
                <option value='Doctorado'>Doctorado</option>
              </Select>
              {errors.hasOwnProperty('levelStudy') && <FormErrorMessage textAlign="end" color={"red.500"}>{errors.levelStudy?.message}</FormErrorMessage>}
            </FormControl>
          </GridItem>

          {
            selectedEducation && selectedEducation !== 'Básica' &&
            <GridItem>
              <FormControl isRequired isInvalid={errors.hasOwnProperty('title')} >
                <FormLabel>Título obtenido</FormLabel>
                <Input defaultValue={academyData.title} disabled={isRead} {...register("title", {
                  required: "Campo requerido"
                })} />
                {errors.hasOwnProperty('title') && <FormErrorMessage textAlign="end" color={"red.500"}>{errors.title?.message}</FormErrorMessage>}
              </FormControl>
            </GridItem>
          }

          <GridItem>
            <FormControl isInvalid={errors.hasOwnProperty('otherStudy')} >
              <FormLabel>Otros estudios realizados</FormLabel>
              <Input defaultValue={academyData.otherStudy} disabled={isRead} {...register("otherStudy")} />
              {errors.hasOwnProperty('otherStudy') && <FormErrorMessage textAlign="end" color={"red.500"}>{errors.otherStudy?.message}</FormErrorMessage>}
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl isInvalid={errors.hasOwnProperty('otherLanguage')}>
              <FormLabel>Otros idiomas que domina</FormLabel>
              <Input defaultValue={academyData.otherLanguage} disabled={isRead} {...register("otherLanguage")} />
              {errors.hasOwnProperty('otherLanguage') && <FormErrorMessage>{errors.otherLanguage?.message}</FormErrorMessage>}
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl isRequired isInvalid={errors.hasOwnProperty('performance')}>
              <FormLabel>Como fue su desempeño</FormLabel>
              <Select placeholder='Seleccionar nivel de desempeño' defaultValue={academyData.performance} disabled={isRead} {...register("performance", {
                required: "Campo requerido"
              })}>
                <option value='Excelente'>Excelente</option>
                <option value='Bueno'>Bueno</option>
                <option value='Regular'>Regular</option>
              </Select>
              {errors.hasOwnProperty('performance') && <FormErrorMessage>{errors.performance?.message}</FormErrorMessage>}
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
                <AlertDescription>no se han podido guardar tus datos</AlertDescription>
              </Alert>
            </GridItem>
          }
        </Grid>
      </Container>
    </Box>
  )
}
