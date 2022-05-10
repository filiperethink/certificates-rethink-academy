import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import alertIcon from "/alert-circle.svg";

export default function Empty404() {
  return (
    <Flex
      flex={1}
      height='100vh'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={4}
    >
      <Image src={alertIcon} w={10} h={10} />
      <Box textAlign='center'>
        <Heading fontSize='md'>Essa Pagina não existe</Heading>
        <Text>Por favor entre em contato com o time da Rethink</Text>
      </Box>
    </Flex>
  );
}
