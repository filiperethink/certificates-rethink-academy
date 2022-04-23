import { useState } from "react";
import { Image, useDisclosure, Button, Tooltip, Flex } from "@chakra-ui/react";
import { CustomDrawer, Form } from "../../components";
import Certificates from "../Certificates/Certificates";
import utils from "../../utils";

import settingsIcon from "/settings.svg";
type HomePropsType = {};
function Home({}: HomePropsType) {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [selectedFont, setSelectedFont] = useState("cursive");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [studentName, setStudentName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [duration, setDuration] = useState("120");
  const [startDate, setStartDate] = useState({
    formattedDate: "01/01/2022",
    date: new Date(),
  });
  const [endDate, setEndDate] = useState({
    formattedDate: "31/12/2022",
    date: new Date(),
  });

  const onSelectFont = () => {
    const randomFont = utils.getNextFont();
    console.log({ randomFont });
    setSelectedFont(randomFont);
  };

  const onThemeChange = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
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
          onThemeChange={onThemeChange}
          currentTheme={currentTheme}
        />
      </CustomDrawer>
      <Flex bg='brand.baseOff'>
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
            <Image width={18} src={settingsIcon} />
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
          currentTheme={currentTheme}
        />
      </Flex>
    </>
  );
}

export default Home;
