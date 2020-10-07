import React from 'react';
import {
  Layout,
  Row,
  TheEvent,
  Scene,
  Committee,
  Sponsors,
  Speakers,
  Schedules,
  Diversity,
  Team,
} from '../components';
import { Helmet } from 'react-helmet';
import config from '../config';

export default () => {
  return (
    <Layout>
      <Helmet title={`${config.siteTitle} | Homepage`} />
      <Scene />
      <TheEvent />
      <Committee />
      <Diversity />
      <Speakers />
      {/* <Schedules /> */}
      <Sponsors />
      {/* <Team /> */}
    </Layout>
  );
};
