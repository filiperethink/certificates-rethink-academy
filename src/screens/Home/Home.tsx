import { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { downloadFile } from "fs-browsers";

import {
  Image,
  useDisclosure,
  Button,
  Tooltip,
  Flex,
  useToast,
} from "@chakra-ui/react";

import { CustomDrawer, Form } from "../../components";

import { Services } from "../../services";
import utils from "../../utils";

import Certificates from "../Certificates/Certificates";

import settingsIcon from "/settings.svg";
import { useNavigate } from "react-router-dom";

type HomePropsType = {};

function Home({}: HomePropsType) {
  const id = useMemo(() => utils.generateRandomId(), []);
  const toast = useToast();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
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
    setSelectedFont(randomFont);
  };

  const onThemeChange = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
  };

  type HandleDownloadImageParams = {
    type: string;
    generate?: () => void;
  };
  const handleDownloadImage = async ({
    type,
    generate = () => {},
  }: HandleDownloadImageParams) => {
    if (type === "PDF") {
      Services.saveCertificate({
        selectedFont,
        currentTheme,
        studentName,
        teacherName,
        courseName,
        duration,
        startDate,
        endDate,
        id,
      });
      generate();
      const url = `${location.href}validate/${id}`;
      navigator.clipboard.writeText(url);

      toast({
        title: "Url do Certificado salvo no clipboard!",
        description: "Para validar o certificado, cole a url no seu navegador.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      // @ts-ignore
      Services.saveCertificate({
        selectedFont,
        currentTheme,
        studentName,
        teacherName,
        courseName,
        duration,
        startDate,
        endDate,
        id,
      });
      const canvas = await html2canvas(ref.current);
      const data = canvas.toDataURL("image/jpg");
      downloadFile(data, "certificate.jpg");
      const url = `${location.href}validate/${id}`;
      navigator.clipboard.writeText(url);

      toast({
        title: "Url do Certificado salvo no clipboard!",
        description: "Para validar o certificado, cole a url no seu navegador.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }

    onClose();
  };
  return (
    <>
      <CustomDrawer isOpen={isOpen} onClose={onClose}>
        <Form
          id={id}
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
          ref={ref}
          handleDownloadImage={handleDownloadImage}
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
          ref={ref}
          id={id}
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
