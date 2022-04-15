import { Flex, Heading, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "../../components";

function Home() {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: any) => {
    setLoading(true);
    console.log({ values });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Flex
      gap={2}
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      bg='brand.bg'
      h='100vh'
    >
      <Image h={100} src='/assets/logo.png' />
      <Heading size='md' color='brand.base' fontWeight='thin'>
        Bem-vindo ao gerador de certificados do Rethink Academy.
      </Heading>
      <Form onSubmit={handleSubmit} isLoading={isLoading} />
    </Flex>
  );
}

export default Home;
