import { Box, Heading } from '@chakra-ui/react';
import { Table } from './components';

export default function TableRegister() {
  return (
    <Box w="100%" gap={6} display="flex" flexDir={"column"}>
      <Heading textAlign={"center"}>Lista de usuarios registrados</Heading>
      <Table />
    </Box>
  )
}
