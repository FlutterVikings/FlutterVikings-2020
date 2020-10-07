import React from 'react';
import {
  Layout,
  TheEvent,
  Scene,
  Committee,
  Sponsors,
  Speakers,
  Diversity,
} from '../components';
import { SEO } from '../components/base/SEO';

export default () => {
  return (
    <Layout>
      <SEO />
      <Scene />
      <TheEvent />
      <Committee />
      <Diversity />
      <Speakers />
      <Sponsors />
    </Layout>
  );
};
