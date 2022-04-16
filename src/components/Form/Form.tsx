import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
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

type FormPropsType = {
  onSubmit: (values: any) => void;
  isLoading: boolean;
};

function Form({ onSubmit, isLoading }: FormPropsType) {
  const [studentName, setStudentName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [duration, setDuration] = useState("10");
  const [startDate, setStartDate] = useState({
    formattedDate: "",
    date: new Date(),
  });
  const [endDate, setEndDate] = useState({
    formattedDate: "",
    date: new Date(),
  });

  const handleStatDate = (date: Date) => {
    const formattedDate = Utils.handleFormatDate(date);
    setStartDate(formattedDate);
  };

  const handleEndDate = (date: Date) => {
    const formattedDate = Utils.handleFormatDate(date);
    setEndDate(formattedDate);
  };

  const handleSubmit = () => {
    onSubmit({
      studentName,
      teacherName,
      courseName,
      duration,
      startDate: startDate.formattedDate,
      endDate: endDate.formattedDate,
    });
  };

  return (
    <Flex mt={8} w='3xl' flexDirection='column' gap={4}>
      <FormControl isRequired>
        <FormLabel fontSize={12} color='brand.base' htmlFor='student'>
          Nome do aluno
        </FormLabel>
        <Input
          variant='outline'
          borderColor='#ababab'
          placeholder='Insira o nome do aluno:'
          onChange={(e) => setStudentName(e.target.value.trim())}
          _placeholder={{
            color: "brand.baseOff",
            fontSize: "sm",
            fontWeight: "thin",
          }}
          focusBorderColor='brand.details'
          color='brand.base'
          id='student'
          type='student'
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize={12} color='brand.base' htmlFor='teacher'>
          Nome do Professor
        </FormLabel>
        <Input
          onChange={(e) => setTeacherName(e.target.value.trim())}
          placeholder=' Insira o nome do Professor'
          variant='outline'
          _placeholder={{
            color: "brand.baseOff",
            fontSize: "sm",
            fontWeight: "thin",
          }}
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
            Nome do Curso
          </FormLabel>
          <Input
            onChange={(e) => setCourseName(e.target.value.trim())}
            variant='outline'
            borderColor='#ababab'
            placeholder='Insira o nome do Curso:'
            _placeholder={{
              color: "brand.baseOff",
              fontSize: "sm",
              fontWeight: "thin",
            }}
            focusBorderColor='brand.details'
            color='brand.base'
            id='course'
            type='course'
          />
        </FormControl>
      </Flex>
      <Flex gap={2}>
        <FormControl isRequired maxW='xs'>
          <FormLabel fontSize={12} color='brand.base' htmlFor='duration'>
            Duração do curso em horas:
          </FormLabel>
          <NumberInput
            onChange={(value) => setDuration(value)}
            defaultValue={duration}
            min={1}
            focusBorderColor='brand.details'
            color='brand.base'
            borderColor='#ababab'
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper color='brand.base' />
              <NumberDecrementStepper color='brand.base' />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={12} color='brand.base' htmlFor='teacher'>
            Data de inicio do curso:
          </FormLabel>
          <DatePicker
            locale={ptBR}
            dateFormat='dd/MM/yyyy'
            selected={startDate.date}
            onChange={handleStatDate}
            customInput={
              <Input
                variant='outline'
                borderColor='#ababab'
                _placeholder={{
                  color: "brand.baseOff",
                  fontSize: "sm",
                  fontWeight: "thin",
                }}
                focusBorderColor='brand.details'
                color='brand.base'
                id='course'
                type='course'
              />
            }
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={12} color='brand.base' htmlFor='teacher'>
            Data de conclusão do curso:
          </FormLabel>
          <DatePicker
            locale={ptBR}
            customInput={
              <Input
                variant='outline'
                borderColor='#ababab'
                placeholder='Insira o nome do Curso:'
                _placeholder={{
                  color: "brand.baseOff",
                  fontSize: "sm",
                  fontWeight: "thin",
                }}
                focusBorderColor='brand.details'
                color='brand.base'
                id='course'
                type='course'
              />
            }
            dateFormat='dd/MM/yyyy'
            selected={endDate.date}
            onChange={handleEndDate}
          />
        </FormControl>
      </Flex>
      <Button
        onClick={handleSubmit}
        isLoading={isLoading}
        mt={4}
        bg='brand.details'
      >
        Gerar Certificado
      </Button>
    </Flex>
  );
}

export default Form;
