import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DocumentData } from "firebase/firestore";
import { Box, Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";

import { CertificateScreen } from "..";
import { CertificateParams } from "../../services/firebase/firebase";
import { Services } from "../../services";

import alertIcon from "/alert-circle.svg";

const ValidateScreen = () => {
  const { id } = useParams();
  const [certificate, setCertificate] = useState<
    CertificateParams | DocumentData
  >();
  const [hasError, setError] = useState(false);

  const fetchData = async () => {
    const response = await Services.getCertificateById(id!);
    if (response.empty) {
      setError(true);
    }
    setCertificate(response.docs[0].data());
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (hasError) {
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
          <Heading fontSize='md'>
            Infelizmente não encontramos esse certificado.
          </Heading>
          <Text>Por favor entre em contato com o time da Rethink</Text>
        </Box>
      </Flex>
    );
  }
  if (!certificate) {
    return (
      <Flex
        flex={1}
        height='100vh'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap={10}
      >
        <Spinner size='xl' color='brand.details' />
        <Heading fontSize='md'>Carregando Certificado...</Heading>
      </Flex>
    );
  }
  return (
    <CertificateScreen
      courseName={certificate?.courseName}
      studentName={certificate?.studentName}
      teacherName={certificate?.teacherName}
      duration={certificate?.duration}
      startDate={certificate?.startDate}
      endDate={certificate?.endDate}
      id={certificate?.id}
    />
  );
};

export default ValidateScreen;
