import styled from 'styled-components';

export const SelectElement = styled.select<{ bgSrc: string }>`
  width: 70%;
  padding: 12px 6px;
  border: 1px solid #e9e9e9;
  border-radius: 0.4rem;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  color: gray;
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  /* padding: 1.2rem 2rem; */
  background: ${({ bgSrc }) => `transparent url(src/assets/seta-baixo.svg) 95.5% 50% no-repeat`};
  outline: transparent;
  cursor: ${({ disabled }) => (disabled ? 'normal' : 'pointer')};
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px 5px;
  }
  margin-bottom: 2.4rem;
`;