import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 160px;
  padding: 16px 14px;

  border-radius: 4px;
  box-shadow: 0 0 4px 4px #e9e9e9;
`;

export const TitleContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const Content = styled.div`
  margin: 12px 0;
`;

export const Text = styled.div`
  font-size: 14px;
  color: #a6a4a4;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px 12px;
  background: #2c742c;
  border: none;
  color: #fff;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.4px;
  cursor: pointer;

  hover {
    background: #236223;
  }
`;