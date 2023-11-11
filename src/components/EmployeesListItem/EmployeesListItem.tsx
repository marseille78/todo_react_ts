import { FC } from "react";
import { EmployeeItem } from "./EmployeesListItem.styled";

const EmployeesListItem: FC = () => {
  return (
    <EmployeeItem className="list-group-item d-flex justify-content-between">
      <span className="list-group-item-label">John Smith</span>
      <input type="text" className="list-group-item-input" defaultValue="1000$"/>
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button" className="btn-cookie btn-sm ">
          <i className="fas fa-cookie"/>
        </button>

        <button type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"/>
        </button>
        <i className="fas fa-star"/>
      </div>
    </EmployeeItem>
  );
};

export default EmployeesListItem;