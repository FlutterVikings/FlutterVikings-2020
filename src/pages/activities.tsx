import { graphql, Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import React, { useState } from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Layout, Section, Header, Content } from '../components';
// @ts-ignore
import TimezoneSelect from 'react-timezone-select';

const ActivityRow = styled.div`
  display: flex;
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
              <h1 className="font__caesar size__h1">Activities</h1>
            </Header>
            <Content>
              <ActivityRow>
                <br></br>
                <div className="entry-contest">
                  <p>Participate in these activities to win prizes</p>
                  <br></br>
                  <p>
                    <strong> Contest </strong>
                  </p>
                  <p>
                    During the conference -&gt; Use the flutter vikings logo and customer
                    painter. Create your own demo and submit to us -&gt;
                    <a href="https://codepen.io">Code Pen</a>
                  </p>
                  <br></br>
                  <p>
                    <strong>Social media</strong>
                  </p>
                  <p>Tweet to win (Be creative with your selfie's and Tweets) </p>
                  <div className="tm-click-to-tweet">
                    <div className="tm-ctt-text">
                      <a
                        href="https://twitter.com/share?text=My+selfie%2C+with+the+Vikings%E2%80%9D+Flutter+Vikings+%23fluttervikings&amp;url=https://www.fluttervikings.com"
                        target="_blank"
                      >
                        “My selfie, with the vikings” Flutter Vikings #fluttervikings
                        &nbsp;
                      </a>
                    </div>
                    <p>
                      <a
                        href="https://twitter.com/share?text=My+selfie%2C+with+the+Vikings%E2%80%9D+Flutter+Vikings+%23fluttervikings"
                        target="_blank"
                        className="tm-ctt-btn"
                      >
                        Click To Tweet
                      </a>
                    </p>
                    <div className="tm-ctt-tip"></div>
                  </div>
                  <p>Share on Linkedin (Be creative with your Linkedin Post)</p>
                  <div className="tm-click-to-tweet">
                    <div>
                      “My selfie, with the vikings” #FlutterVikings, Watching the sessions
                      @fluttervikings &nbsp;
                    </div>

                    <div className="tm-ctt-tip"></div>
                  </div>
                  <br></br>
                  <p></p>
                </div>
              </ActivityRow>

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
