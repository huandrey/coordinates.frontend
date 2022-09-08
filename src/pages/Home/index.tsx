import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../../components/CustomSelect';
import { useGeoLocation } from '../../hooks/useGeoLocation';
import { api } from '../../services/api';
import { Button, Container, Content, Text, Title, TitleContent, Wrapper } from './styles';

export const Home = () => {
  const navigation = useNavigate();

  const [schools, setSchools] = useState([]);
  const [schoolChosen, setSchoolChosen] = useState<number | null>(null);
  
  useEffect(() => {
    async function getSchools() {
      const res = await api.get('/schools');

      setSchools(res.data.data);
    } 

    getSchools();
  }, [])

  function handleSchool(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    setSchoolChosen(Number(value));
  }

  function redirectToNextPage() {
    navigation(`/school/${schoolChosen}`);
  }

  return (
    <Wrapper>
      <Container>
        <TitleContent>
          <Title>Procure sua escola</Title>
        </TitleContent>
        <Content>
          <Text>Selecione a escola e continue o processo.</Text>
        </Content>
          <CustomSelect onChange={handleSchool} items={schools} />
          <Button disabled={!schoolChosen} onClick={redirectToNextPage}>Prosseguir</Button>
      </Container>
    </Wrapper>
  )
}