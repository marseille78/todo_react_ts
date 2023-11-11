import styled from '@emotion/styled';

export const EmployeeItem = styled('li')`
  padding: 15px 20px;
  border-bottom: 1px solid #3d5a80;
  
  &:last-child {
    border-bottom: none;
  }
  
  span {
    line-height: 35px;
    font-size: 20px;
    cursor: pointer;
    min-width: 550px;
  }

  input {
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: 0;
  }

  button {
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }

  .btn-cookie {
    color: #e09f3e;
  }

  .btn-trash {
    color: #e5383b;
  }

  .fa-star {
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: #FFD700;
    transition: 0.3s all;
    transform: translateX(30px);
    opacity: 0;
  }
  
  &.like .fa-star {
    opacity: 1;
    transform: translateX(0px);
  }

  &.increase .list-group-item-label,
  &.increase .list-group-item-input {
    color: #e09f3e;
  }
  
  &.increase .btn-star {
    color: #aeaeae;
  }
`;