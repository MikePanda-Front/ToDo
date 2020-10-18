import styled from "styled-components";

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 0;
  width: 500px;
`;

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 500px;

  margin-bottom: 20px;

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  && .ant-row {
    margin: 0;
  }

  && label input {
    cursor: pointer;
  }

  && input {
    border: none;
    font-size: 18px;
    background-color: transparent;
    color: black;
    cursor: auto;
  }

  & button {
    justify-self: flex-end;
    margin-left: 10px;
  }
`;
