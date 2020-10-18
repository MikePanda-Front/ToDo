import styled from "styled-components";

export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 500px;

  & a {
    margin-right: 42px;
  }
`;
