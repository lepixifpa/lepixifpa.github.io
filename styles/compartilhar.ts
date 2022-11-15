import styled from "styled-components";

export const LinkContainer = styled.span`
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  padding: 8px;
  border-radius: 12px;
  display: inline-block;
  word-wrap: break-word;
  margin: 8px;
`;

export const RedesSociaisContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  width: 450px;
  max-width: 95%;
  margin: auto;
  padding: 8px;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);

  svg {
    color: black;
  }

  button {
    box-shadow: none;
  }
`;

export const CopiarBtn = styled.button``;
