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
import { useState } from "react";

type FormPropsType = {
  onSubmit: (values: any) => void;
  isLoading: boolean;
};

function Form({ onSubmit, isLoading }: FormPropsType) {
  const [studentName, setStudentName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [duration, setDuration] = useState("10");

  const handleSubmit = () => {
    onSubmit({
      studentName,
      teacherName,
      courseName,
      duration,
    });
  };
  return (
    <Flex mt={8} w='3xl' flexDirection='column' gap={4}>
      <FormControl isRequired>
        <FormLabel color='brand.base' htmlFor='student'>
          Nome do aluno
        </FormLabel>
        <Input
          variant='outline'
          borderColor='#ababab'
          placeholder='Insira o nome do aluno:'
          onChange={(e) => setStudentName(e.target.value)}
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
      <Flex gap={2}>
        <FormControl isRequired>
          <FormLabel color='brand.base' htmlFor='course'>
            Nome do Curso
          </FormLabel>
          <Input
            onChange={(e) => setCourseName(e.target.value)}
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
        <FormControl isRequired maxW='xs'>
          <FormLabel color='brand.base' htmlFor='duration'>
            Duração do curso: (em horas)
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
      </Flex>
      <FormControl isRequired>
        <FormLabel color='brand.base' htmlFor='teacher'>
          Nome do Professor
        </FormLabel>
        <Input
          onChange={(e) => setTeacherName(e.target.value)}
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
