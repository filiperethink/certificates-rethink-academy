import { Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Certificates(props: any) {
  let location: any = useLocation();

  console.log(location);
  return (
    <div>
      <Text>{location?.state?.values.studentName}</Text>
      <Text>{location?.state?.values.teacherName}</Text>
      <Text>{location?.state?.values.courseName}</Text>
      <Text>{location?.state?.values.duration}</Text>
      <Text>{location?.state?.values.startDate}</Text>
      <Text>{location?.state?.values.endDate}</Text>
    </div>
  );
}
