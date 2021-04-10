import * as React from 'react';
import { Layout } from '../../components';
import Button from '../../components/Button';

const Home = () => (
  <Layout>
    <div style={{ marginBottom: '1rem' }}>
      <Button variant="primary">Save</Button>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <Button variant="secondary">Cancel</Button>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <Button variant="default">Add new</Button>
    </div>
  </Layout>
);

export default Home;
