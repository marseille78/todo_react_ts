import { FC } from "react";
import { Container } from "./App.styled";
import AppInfo from "../AppInfo";
import SearchPanel from "../SearchPanel";
import EmployeesList from "../EmployeesList";
import EmployeeAddForm from "../EmployeeAddForm";

const App: FC = () => {
  return (
    <Container>
      <AppInfo/>
      <SearchPanel/>
      <EmployeesList/>
      <EmployeeAddForm/>
    </Container>
  );
};

export default App;