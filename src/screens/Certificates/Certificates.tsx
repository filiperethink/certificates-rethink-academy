import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import utils from "../../utils";
import arrowIcon from "/arrow.svg";
import logoRa from "/logo-ra.png";
import logoMinRa from "/logo-min.svg";

type CertificatesPropsType = {
  studentName: string;
  teacherName: string;
  courseName: string;
  duration: string;
  startDate: {
    formattedDate: string;
    date: Date;
  };
  endDate: {
    formattedDate: string;
    date: Date;
  };
  selectedFont: string;
};
export default function Certificates({
  studentName,
  teacherName,
  courseName,
  duration,
  startDate,
  endDate,
  selectedFont,
}: CertificatesPropsType) {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      p={8}
      width='full'
      height='100vh'
    >
      <Box position='relative' w={1200} height={700} bgColor='brand.bg'>
        <Flex
          alignItems='center'
          justifyContent='center'
          height={130}
          bgColor='brand.details'
        >
          <Heading color='brand.bg' fontSize={70} fontWeight='thin'>
            CERTIFICADO
          </Heading>
          <Image
            src={logoMinRa}
            w={30}
            h={20}
            position='absolute'
            top={0}
            right={8}
          />
        </Flex>
        <Box mt={2} height={2} bgColor='brand.details'></Box>
        <Flex justifyContent='center' alignItems='center'>
          <Box mt={16}>
            <Flex
              gap={6}
              position='relative'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Flex
                position='relative'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
              >
                <Image
                  position='absolute'
                  top={2}
                  left={-2}
                  src={arrowIcon}
                  color='brand.details'
                  w={2}
                  h={2}
                />
                <Text fontWeight='light' color='brand.base' fontSize={20}>
                  Rethink certifica que
                </Text>
              </Flex>
              <Text fontWeight='thin' color='brand.base' fontSize={45}>
                {studentName}
              </Text>
              <Text fontWeight='medium' color='brand.base' fontSize={14}>
                ID RA-001
              </Text>
              <Text
                maxW='container.sm'
                textAlign='center'
                fontWeight='light'
                color='brand.base'
                fontSize={20}
              >
                <>
                  concluiu o curso de <Text as='b'>{courseName}</Text>,
                  ministrado por {teacherName}. Com um total de {duration}{" "}
                  horas, realizado nos dias {startDate.formattedDate} a{" "}
                  {endDate.formattedDate}
                </>
              </Text>
              <Flex
                maxW='900px'
                width='75%'
                justifyContent='space-between'
                alignItems='flex-end'
              >
                <Flex
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Text
                    fontSize={30}
                    color='brand.base'
                    fontFamily={selectedFont}
                  >
                    {teacherName}
                  </Text>
                  <Box w='200px' height='1' bg='brand.details' mb={2} />
                  <Text fontWeight='light' color='brand.base'>
                    {teacherName}
                  </Text>
                </Flex>
                <Flex
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Image w={74} height={61} mt={4} mb={4} src={logoRa} />
                  <Text fontWeight='light' color='brand.base'>
                    Rethink Academy
                  </Text>
                  <Text fontWeight='light' color='brand.base'>
                    {utils.getCurrentYear()}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
