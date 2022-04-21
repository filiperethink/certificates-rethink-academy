import { useState } from "react";
import { Form } from "../../components";
import {
  useToast,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import Utils from "../../utils";

type HomePropsType = {};
function Home({}: HomePropsType) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [studentName, setStudentName] = useState("XXXX-XXXX");
  const [teacherName, setTeacherName] = useState("XXXX-XXXX");
  const [courseName, setCourseName] = useState("XXXX-XXXX");
  const [duration, setDuration] = useState("XX");
  const [startDate, setStartDate] = useState({
    formattedDate: "XX/XX/XXXX",
    date: new Date(),
  });
  const [endDate, setEndDate] = useState({
    formattedDate: "XX/XX/XXXX",
    date: new Date(),
  });

  return (
    <>
      <Drawer size='md' isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg='brand.bg'>
          <DrawerCloseButton _focus={{}} color='brand.details' />
          <DrawerHeader color='#9f9f9f' mt={10} fontWeight='normal'>
            Insira os detalhes do seu certificado
          </DrawerHeader>
          <DrawerBody>
            <Form
              studentName={studentName}
              teacherName={teacherName}
              courseName={courseName}
              duration={duration}
              startDate={startDate}
              endDate={endDate}
              setStudentName={setStudentName}
              setTeacherName={setTeacherName}
              setCourseName={setCourseName}
              setDuration={setDuration}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Tooltip
        label='Clique para alterar as informaçôes do certificado.'
        placement='auto-start'
      >
        <Button
          _focus={{}}
          onClick={onOpen}
          position='absolute'
          top={6}
          left={6}
          h='60px'
          w='60px'
          fontSize='12px'
          bg='brand.details'
        >
          <Image width={18} src='/assets/settings.svg' />
        </Button>
      </Tooltip>

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
              src='/assets/logo-min.svg'
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
                    src='/assets/arrow.svg'
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
                    <Image
                      w={74}
                      height={61}
                      mt={4}
                      mb={4}
                      src='/assets/logo-ra.png'
                    />
                    <Text fontSize={12} fontWeight='light' color='brand.base'>
                      Rethink Academy
                    </Text>
                    <Text fontSize={12} fontWeight='light' color='brand.base'>
                      {Utils.getCurrentYear()}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Home;
