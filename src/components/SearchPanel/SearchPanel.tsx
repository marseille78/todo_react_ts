import { FC } from "react";
import { Container } from "./SearchPanel.styled";
import AppFilter from "../AppFilter";

const SearchPanel: FC = () => {
  return (
    <Container>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Знайти працівника"
      />
      <AppFilter/>
    </Container>
  );
};

export default SearchPanel;