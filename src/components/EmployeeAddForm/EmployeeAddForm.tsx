import { FC } from "react";
import { ContainerForm, Form } from "./EmployeeAddForm.styled";

const EmployeeAddForm: FC = () => {
  return (
    <ContainerForm className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <Form
        className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />

        <button
          type="submit"
          className="btn btn-outline-light"
        >Добавить</button>
      </Form>
    </ContainerForm>
  );
};

export default EmployeeAddForm;