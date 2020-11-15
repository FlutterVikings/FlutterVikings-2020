import { graphql, Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import React, { useState } from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Layout, Section, Header, Content } from '../components';
import { SEO } from '../components/base/SEO';
import { Agenda } from '../models/Agenda';
import { Speaker } from '../models/Speaker';
import config from '../config';
import { Timezone } from '../models/Timezone';
import spacetime from 'spacetime';
// @ts-ignore
import TimezoneSelect from 'react-timezone-select';
import { AddToCal } from '../components/common/AddToCal';

const SpeakerRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const SpeakerImage = styled.div`
  flex: 1;
`;
const SpeakerInfo = styled.div`
  padding: 0 4rem;
  flex: 1;
`;

const PrizeRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default () => {
  return (
    <>
      <Layout>
        <Section>
          <Container>
            <Header>
              <div style={{ justifyContent: 'center', display: 'flex' }}>
                <img
                  alt="FlutterVikings"
                  className="SceneOverlay-logo"
                  src="/assets/logo.svg"
                />
              </div>
              <h1 className="font__caesar size__h1">Code of Conduct</h1>
            </Header>
            <Content>
              <PrizeRow>
                <p>Prizes!!!</p>
              </PrizeRow>

              <br />
              <br />
              <br />
              <div className="CTA-actions" style={{ textAlign: 'center' }}>
                <Link className="Btn Btn--ticket Btn--cta" to="/">
                  Back to homepage
                </Link>
              </div>
            </Content>
          </Container>
        </Section>
      </Layout>
    </>
  );
};
