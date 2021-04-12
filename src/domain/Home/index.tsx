import * as React from 'react';
import { Layout } from '../../components';
import ParticipantTable from '../../components/ParticipantsTable';

const Home = () => (
  <Layout>
    <div style={{ marginBottom: '1rem' }}>
      <ParticipantTable />
    </div>
  </Layout>
);

export default Home;
