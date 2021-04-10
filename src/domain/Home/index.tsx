import * as React from 'react';
import { Layout } from '../../components';
import Input from '../../components/Input';

const Home = () => {
  const [value, setValue] = React.useState('');
  return (
    <Layout>
      <div style={{ marginBottom: '1rem' }}>
        <Input
          type="text"
          placeholder="Placeholder"
          aria-label="test"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>{value}</div>
      </div>
    </Layout>
  );
};

export default Home;
