import { useState } from "react";
import {
  useToast,
  Image,
  useDisclosure,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { CustomDrawer, Form } from "../../components";
import Certificates from "../Certificates/Certificates";
import utils from "../../utils";

type HomePropsType = {};
function Home({}: HomePropsType) {
  const toast = useToast();
  const [selectedFont, setSelectedFont] = useState("cursive");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [studentName, setStudentName] = useState("XXXXXXXX");
  const [teacherName, setTeacherName] = useState("XXXXXXXX");
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

  const onSelectFont = () => {
    const randomFont = utils.getNextFont();
    console.log({ randomFont });
    setSelectedFont(randomFont);
  };

  return (
    <>
      <CustomDrawer isOpen={isOpen} onClose={onClose}>
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
          onSelectFont={onSelectFont}
        />
      </CustomDrawer>
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

      <Certificates
        studentName={studentName}
        teacherName={teacherName}
        courseName={courseName}
        duration={duration}
        startDate={startDate}
        endDate={endDate}
        selectedFont={selectedFont}
      />
    </>
  );
}

export default Home;
