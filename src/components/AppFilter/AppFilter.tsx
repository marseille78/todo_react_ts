import { FC } from "react";
import { BtnGroup } from "./AppFilter.styled";

const AppFilter: FC = () => {
  return (
    <BtnGroup className="btn-group">
      <button
        className="btn btn-light"
        type="button"
      >Всі співробітники</button>
      <button
        className="btn btn-outline-light"
        type="button"
      >Співробітники на підвищення</button>
      <button
        className="btn btn-outline-light"
        type="button"
      >З/П більше $1000</button>
    </BtnGroup>
  );
};

export default AppFilter;