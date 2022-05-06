import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import ReactToPdf from "react-to-pdf";
import html2canvas from "html2canvas";
import { downloadFile } from "fs-browsers";

import { Box, Image, Tooltip } from "@chakra-ui/react";
import { ptBR } from "date-fns/locale";

import refredIcon from "/refresh-cw.svg";
import fileTextIcon from "/file-text.svg";
import imageIcon from "/image.svg";
import moonIcon from "/moon.svg";
import sunIcon from "/sun.svg";

import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Button,
} from "@chakra-ui/react";

import Utils from "../../utils";
import { forwardRef, MutableRefObject } from "react";

type FormPropsType = {
  ref: React.ForwardedRef<HTMLInputElement>;
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
  currentTheme: string;
  onSelectFont: () => void;
  setStudentName: (value: string) => void;
  setTeacherName: (value: string) => void;
  setCourseName: (value: string) => void;
  setDuration: (value: string) => void;
  setStartDate: (value: any) => void;
  setEndDate: (value: any) => void;
  onThemeChange: () => void;
};

const Form = forwardRef(
  (
    {
      studentName,
      teacherName,
      courseName,
      duration,
      startDate,
      endDate,
      currentTheme,
      setStudentName,
      setTeacherName,
      setCourseName,
      setDuration,
      setEndDate,
      setStartDate,
      onSelectFont,
      onThemeChange,
    }: FormPropsType,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const options = {
      orientation: "landscape",
      unit: "px",
      format: [397, 678],
    };
    const onComplete = () => {
      console.log("Done");
    };

    const handleDownloadImage = async () => {
      const element = document.getElementById("#pdf-container");
      // @ts-ignore
      const canvas = await html2canvas(ref.current);

      const data = canvas.toDataURL("image/jpg");
      downloadFile(data, "certificate.jpg");
    };

    const handleStatDate = (date: Date) => {
      const formattedDate = Utils.handleFormatDate(date);
      setStartDate(formattedDate);
    };

    const handleEndDate = (date: Date) => {
      const formattedDate = Utils.handleFormatDate(date);
      setEndDate(formattedDate);
    };
    return (
      <Flex mt={2} w='md' flexDirection='column' gap={4}>
        <FormControl isRequired>
          <FormLabel fontSize={12} color='brand.base' htmlFor='student'>
            Nome do(a) estudante
          </FormLabel>
          <Input
            variant='outline'
            value={studentName}
            borderColor='#ababab'
            placeholder='Insira o nome do(a) estudante'
            onChange={(e) => setStudentName(e.target.value)}
            _placeholder={{
              color: "brand.baseOff",
              fontSize: "12px",
              fontWeight: "thin",
            }}
            fontSize='12px'
            focusBorderColor='brand.details'
            color='brand.base'
            id='student'
            type='student'
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={12} color='brand.base' htmlFor='teacher'>
            Nome do professor(a)
          </FormLabel>
          <Input
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            placeholder=' Insira o nome do(a) professor(a)'
            variant='outline'
            _placeholder={{
              color: "brand.baseOff",
              fontSize: "12px",
              fontWeight: "thin",
            }}
            fontSize='12px'
            focusBorderColor='brand.details'
            color='brand.base'
            borderColor='#ababab'
            id='teacher'
            type='teacher'
          />
        </FormControl>
        <Flex gap={2}>
          <FormControl isRequired>
            <FormLabel fontSize={12} color='brand.base' htmlFor='course'>
              Nome do curso
            </FormLabel>
            <Input
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              variant='outline'
              borderColor='#ababab'
              placeholder='Insira o nome do curso'
              _placeholder={{
                color: "brand.baseOff",
                fontSize: "12px",
                fontWeight: "thin",
              }}
              focusBorderColor='brand.details'
              color='brand.base'
              fontSize='12px'
              id='course'
              type='course'
            />
          </FormControl>
        </Flex>

        <Flex gap={2}>
          <FormControl isRequired w='sm'>
            <FormLabel fontSize={12} color='brand.base' htmlFor='duration'>
              Duração em horas
            </FormLabel>
            <NumberInput
              value={duration}
              onChange={(value) => setDuration(value)}
              defaultValue={10}
              min={1}
              fontSize='12px'
              focusBorderColor='brand.details'
              color='brand.base'
              borderColor='#ababab'
            >
              <NumberInputField fontSize='12px' />
              <NumberInputStepper>
                <NumberIncrementStepper color='brand.base' />
                <NumberDecrementStepper color='brand.base' />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl isRequired w='sm'>
            <FormLabel fontSize={12} color='brand.base' htmlFor='teacher'>
              Data de início
            </FormLabel>
            <DatePicker
              locale={ptBR}
              dateFormat='dd/MM/yyyy'
              onChange={handleStatDate}
              selected={startDate.date}
              customInput={
                <Input
                  variant='outline'
                  borderColor='#ababab'
                  _placeholder={{
                    color: "brand.baseOff",
                    fontSize: "12px",
                    fontWeight: "thin",
                  }}
                  fontSize='12px'
                  focusBorderColor='brand.details'
                  color='brand.base'
                  id='course'
                  type='course'
                />
              }
            />
          </FormControl>
          <FormControl isRequired w='sm'>
            <FormLabel fontSize={12} color='brand.base' htmlFor='teacher'>
              Data de conclusão
            </FormLabel>
            <DatePicker
              locale={ptBR}
              selected={endDate.date}
              dateFormat='dd/MM/yyyy'
              onChange={handleEndDate}
              customInput={
                <Input
                  variant='outline'
                  borderColor='#ababab'
                  placeholder='Insira o nome do Curso:'
                  _placeholder={{
                    color: "brand.baseOff",
                    fontSize: "12px",
                    fontWeight: "thin",
                  }}
                  focusBorderColor='brand.details'
                  color='brand.base'
                  id='course'
                  fontSize='12px'
                  type='course'
                />
              }
            />
          </FormControl>
        </Flex>
        <Flex gap={2}>
          <Tooltip
            label='Clique para alterar a font da assinatura.'
            placement='top'
          >
            <Button
              onClick={onSelectFont}
              fontSize='12px'
              _hover={{
                bg: "brand.base",
              }}
              _focus={{
                outline: "none",
              }}
              _active={{
                outline: "none",
                ringColor: "brand.base",
                ringOffsetColor: "brand.base",

                bg: "brand.details",
              }}
              bg='brand.baseOff'
              leftIcon={<Image width={15} src={refredIcon} />}
            >
              Assinar Certificado
            </Button>
          </Tooltip>
          <Tooltip
            label='Clique para alterar o tema do certificado.'
            placement='top'
          >
            <Button
              onClick={onThemeChange}
              fontSize='12px'
              _hover={{
                bg: "brand.base",
              }}
              _focus={{
                outline: "none",
              }}
              _active={{
                outline: "none",
                ringColor: "brand.base",
                ringOffsetColor: "brand.base",

                bg: "brand.details",
              }}
              bg='brand.baseOff'
              leftIcon={
                <Image
                  width={15}
                  src={currentTheme === "light" ? moonIcon : sunIcon}
                />
              }
            >
              {currentTheme === "light" ? "Tema Escuro" : "Tema Claro"}
            </Button>
          </Tooltip>
        </Flex>

        <Box mt={20} h='0.3' bg='brand.bgOff' />
        <Flex gap={4} width='100%'>
          <ReactToPdf
            x={0.8}
            y={1.5}
            onComplete={onComplete}
            targetRef={ref}
            options={options}
          >
            {({ toPdf, ...rest }: any) => {
              return (
                <Button
                  fontSize='12px'
                  bg='brand.details'
                  _hover={{
                    bg: "brand.base",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                  _active={{
                    outline: "none",
                    ringColor: "brand.base",
                    ringOffsetColor: "brand.base",

                    bg: "brand.details",
                  }}
                  onClick={toPdf}
                  leftIcon={<Image width={15} src={fileTextIcon} />}
                >
                  Baixar em PDF
                </Button>
              );
            }}
          </ReactToPdf>
          <Button
            fontSize='12px'
            bg='brand.details'
            _hover={{
              bg: "brand.base",
            }}
            _focus={{
              outline: "none",
            }}
            _active={{
              outline: "none",
              ringColor: "brand.base",
              ringOffsetColor: "brand.base",

              bg: "brand.details",
            }}
            onClick={handleDownloadImage}
            leftIcon={<Image width={15} src={imageIcon} />}
          >
            Baixar em PNG
          </Button>
        </Flex>
      </Flex>
    );
  }
);

export default Form;
