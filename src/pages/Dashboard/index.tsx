import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="github explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/8497405?v=4"
          alt="Lucas Barque"
        />
        <div>
          <strong>NLW-05-PlantManager</strong>
          <p>🌱 Aplicação feita durante a NLW#05 na trilha de ReactNative</p>
        </div>
        <FiChevronRight size="20" />
      </a>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/8497405?v=4"
          alt="Lucas Barque"
        />
        <div>
          <strong>NLW-05-PlantManager</strong>
          <p>🌱 Aplicação feita durante a NLW#05 na trilha de ReactNative</p>
        </div>
        <FiChevronRight size="20" />
      </a>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/8497405?v=4"
          alt="Lucas Barque"
        />
        <div>
          <strong>NLW-05-PlantManager</strong>
          <p>🌱 Aplicação feita durante a NLW#05 na trilha de ReactNative</p>
        </div>
        <FiChevronRight size="20" />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
