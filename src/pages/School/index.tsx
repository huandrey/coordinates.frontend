import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGeoLocation } from '../../hooks/useGeoLocation';
import { api } from '../../services/api';
import { Button, Container, Content, Description, Row, Title, Wrapper } from './styles';

interface SchoolProps {
  id: number;
  name: string;
  city: string;
  uf: string;
  latitude: string;
  longitude: string;
}

export const School = (props: any) => {
  const { id } = useParams();
  const location = useGeoLocation();
  const navigation = useNavigate();
  const [school, setSchool] = useState({} as SchoolProps);

  useEffect(() => {
    async function getSchool() {
      try {
        const res = await api.get(`/schools/${id}`);

        setSchool(res.data.data);
      } catch (err) {
        navigation('/');
      }
      
    }

    getSchool();
  }, [])
  
  async function putLocationToSchool() {
    const res = await api.put(`/schools/${id}`, {
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    })

    setSchool(res.data.data);
  }
  
  return (
    <Wrapper>
      <Container>
        <Content>
          <Row>
            <Title>Nome da instituição</Title>
            <Description>{school?.name}</Description>
          </Row>
          <Row>
            <Title>Localidade</Title>
            <Description>{school?.city}, {school?.uf}</Description>
          </Row>
          <Row>
            <Title>Latitude</Title>
            <Description>{school?.latitude || "Não informado."}</Description>
          </Row>
          <Row>
            <Title>Longitude</Title>
            <Description>{school?.longitude || "Não informado."}</Description>
          </Row>
        </Content>
        <Button onClick={putLocationToSchool}>Atualizar coordenadas</Button>
      </Container>
    </Wrapper>
  )
}