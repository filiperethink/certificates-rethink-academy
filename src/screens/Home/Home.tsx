import { Flex, Heading, Image, toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { Form } from "../../components";
import Utils from "../../utils";

type HomePropsType = {};
function Home({}: HomePropsType) {
  let navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  false;

  const handleSubmit = (values: any) => {
    setLoading(true);
    const isValid = Utils.handleValidadeValues(values);
    if (isValid) {
      setLoading(false);
      toast({
        title: "Ops, tem alguma coisa errada!",
        status: "error",
        description: "Todos os campos devem ser preenchidos.",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    setTimeout(() => {
      setLoading(false);
      navigate("/certificates", { state: { values } });
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
