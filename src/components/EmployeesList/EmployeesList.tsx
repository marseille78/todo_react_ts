import { FC } from "react";
import EmployeesListItem from "../EmployeesListItem";
import { ContainerList } from "./EmployeesList.styled";

const EmployeesList: FC = () => {
  return (
    <ContainerList className="list-group">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
    </ContainerList>
  );
};

export default EmployeesList;