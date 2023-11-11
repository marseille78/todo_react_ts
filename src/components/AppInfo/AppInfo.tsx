import { FC } from "react";
import { Container } from "./AppInfo.styled";

const AppInfo: FC = () => {
  return (
    <Container>
      <h1>Дані про співробітників в компанії N</h1>
      <h2>Загальна кількість співробітників: </h2>
      <h2>Премію отримають: </h2>
    </Container>
  );
};

export default AppInfo;