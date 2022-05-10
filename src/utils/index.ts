import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Create a function using date-fns that get current Year.
const getCurrentYear = () => {
  const currentYear = format(new Date(), "yyyy", {
    locale: ptBR,
  });
  return currentYear;
};

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

const listFonts = [
  "cursive",
  "Arizonia",
  "Mr De Haviland",
  "Clicker Script",
  "Licorice",
];

// Create a function that loop trough the listFonts and return one randomized.
const getNextFont = (): string => {
  const randomFont = listFonts[Math.floor(Math.random() * listFonts.length)];
  return randomFont;
};

const generateRandomId = () => {
  let ts = String(new Date().getTime()),
    i = 0,
    out = "";

  for (i = 0; i < ts.length; i += 6) {
    out += Number(ts.substring(i, 6)).toString(36);
  }

  return "RA-" + out;
};

export default {
  handleFormatDate,
  handleValidadeValues,
  getCurrentYear,
  generateRandomId,
  getNextFont,
  listFonts,
};
