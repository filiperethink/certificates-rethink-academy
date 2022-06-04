import { forwardRef } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import arrowIcon from "/arrow.svg";
import logoRa from "/ra-logo.png";
import logoMinRa from "/min-logo-dark.png";
import logoMinRaDetails from "/min-logo-details.png";

type CertificatesPropsType = {
  ref: React.MutableRefObject<HTMLInputElement>;
  id: string;
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
  selectedFont?: string;
  currentTheme?: string;
};
const Certificates = forwardRef(
  (
    {
      id,
      studentName,
      teacherName,
      courseName,
      duration,
      startDate,
      endDate,
      selectedFont = "cursive",
      currentTheme = "dark",
    }: CertificatesPropsType,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const textColor = currentTheme === "dark" ? "brand.base" : "brand.bg";
    const bgHeaderColor =
      currentTheme === "light" ? "brand.details" : "brand.bg";
    const bhHeader = currentTheme === "light" ? "brand.bg" : "brand.details";

    return (
      <Flex
        alignItems='center'
        justifyContent='center'
        p={8}
        width='full'
        height='100vh'
      >
        <Box
          id='pdf-container'
          ref={ref}
          position='relative'
          w={1200}
          height={700}
          bgColor={currentTheme === "dark" ? "brand.bg" : "brand.base"}
        >
          <Flex
            alignItems='center'
            justifyContent='center'
            height={130}
            bgColor={bhHeader}
          >
            <Heading color={bgHeaderColor} fontSize={70} fontWeight='thin'>
              CERTIFICADO
            </Heading>
            <Image
              src={currentTheme === "dark" ? logoMinRa : logoMinRaDetails}
              w={30}
              h={6}
              position='absolute'
              top={4}
              right={8}
            />
          </Flex>
          <Box mt={2} height={2} bgColor={bhHeader}></Box>
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
                  <Text fontWeight='light' color={textColor} fontSize={20}>
                    Rethink certifica que
                  </Text>
                </Flex>
                <Text fontWeight='thin' color={textColor} fontSize={45}>
                  {studentName || "Nome do aluno"}
                </Text>
                <Text fontWeight='medium' color={textColor} fontSize={14}>
                  ID {id.toLocaleUpperCase()}
                </Text>
                <Text
                  maxW='container.sm'
                  textAlign='center'
                  fontWeight='light'
                  color={textColor}
                  fontSize={20}
                >
                  <>
                    concluiu o curso de{" "}
                    <Text as='b'>{courseName || "Nome do Curso"}</Text>,
                    ministrado por {teacherName || "Professor(a)"} e convidados.
                    Com um total de {duration} horas, realizado entre os dias{" "}
                    {startDate.formattedDate} a {endDate.formattedDate}.
                  </>
                </Text>
                <Flex
                  mt={10}
                  maxW='900px'
                  width='80%'
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
                      color={textColor}
                      fontFamily={selectedFont}
                    >
                      {teacherName || ""}
                    </Text>
                    <Box
                      w='200px'
                      height='1'
                      bg='brand.details'
                      mb={2}
                      mt={1}
                    />
                    <Text fontWeight='light' color={textColor}>
                      {teacherName || "Professor(a)"}
                    </Text>
                  </Flex>
                  <Flex
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Image w={125} height={50} mt={4} mb={4} src={logoRa} />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
);

export default Certificates;
