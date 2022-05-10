import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import FirebaseInstance from "./config";

export type CertificateParams = {
  selectedFont: string;
  currentTheme: string;
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
  id: string;
};

const saveCertificate = async (certificate: CertificateParams) => {
  try {
    await setDoc(
      doc(FirebaseInstance.db, "certificates", certificate.id),
      certificate
    );
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
};

const getCertificateById = async (id: string) => {
  const q = query(
    collection(FirebaseInstance.db, "certificates"),
    where("id", "==", id)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

export default { saveCertificate, getCertificateById };
