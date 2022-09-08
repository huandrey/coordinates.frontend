import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 160px;
  padding: 16px 20px;

  border-radius: 4px;
  box-shadow: 0 0 4px 4px #e9e9e9;
`;

export const Content = styled.div``;

export const Row = styled.div`
  
  border-bottom: 1px solid #e9e9e9;

  :last-child {
    border-bottom: none;
    margin-bottom: 24px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #5f5f5f;
  letter-spacing: 0.4px;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px 12px;
  background: #4a44a4;
  border: none;
  color: #fff;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.4px;
  cursor: pointer;

  hover {
    background: #403b8a;
  }
`;