import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const handleFormatDate = (date: Date) => {
  const formattedDate = format(new Date(date), "dd/MM/yyyy", {
    locale: ptBR,
  });
  return { formattedDate, date };
};

const handleValidadeValues = (values: any) => {
  if (
    values.studentName ||
    values.teacherName ||
    values.courseName === undefined ||
    null ||
    ""
  ) {
    return false;
  }
  return true;
};
export default { handleFormatDate, handleValidadeValues };
