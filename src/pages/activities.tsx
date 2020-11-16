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

const InlineThing = styled.div`
  display: inline-block;
`;

const SmallHeader = styled.header`
  position: relative;
  padding: 0rem 0rem 1rem;
  text-align: center;
  font-size: 32px;
`;

const VerySmallHeader = styled.header`
  position: relative;
  text-align: center;
  font-size: 18px;
`;

const SmallLink = styled.a`
  color: white;
  font-weight: bold;
`;

export default () => {
  return (
    <>
      <Layout>
        <Section>
          <Container>
            <Content>
              <SmallHeader>
                <h1 className="font__caesar size__h1">Activities & Prizes</h1>
              </SmallHeader>
              <ActivityRow>
                <div className="entry-contest">
                  <p>
                    As an online conference, we know that it's important to go the extra
                    mile to keep our attendees interested and engaged.
                  </p>
                  <br />
                  <p>
                    That's why we have a host of live activities and contests running
                    through the conference lined up:
                  </p>
                  <br />

                  <SmallHeader className="font__caesar size__h1">Contests</SmallHeader>
                  <p>
                    <SmallHeader>Logo Contest</SmallHeader>
                  </p>
                  <table>
                    <tr>
                      <td>
                        <p>
                          During the conference: Recreate the Flutter Vikings logo using a
                          custom painter (or whatever you like). For bonus points, add
                          some animation. Create your own creative demo and submit a
                          codepen link to us.
                        </p>
                        <br />
                        <p>
                          Make your codepen here: &nbsp;
                          <SmallLink href="https://codepen.io">Code Pen</SmallLink>
                        </p>
                        <p>
                          Submit your codepen logo link here with the subject "LOGO
                          CONTEST": &nbsp;
                          <SmallLink href="mailto:team@flutterVikings.com">
                            team@flutterVikings.com
                          </SmallLink>
                        </p>
                      </td>
                      <td>
                        <img
                          alt="FlutterVikings"
                          className="SceneOverlay-logo"
                          src="/assets/logo.svg"
                        />
                      </td>
                    </tr>
                  </table>
                  <br />
                  <SmallHeader>Social Media Contests</SmallHeader>
                  <p>
                    Take a selfie and tweet it with this to win (Be creative with your
                    selfie's and Tweets){' '}
                  </p>
                  <div className="tm-click-to-tweet">
                    <SmallLink
                      className="tm-ctt-btn"
                      href="https://twitter.com/share?text=Me+with+the+Vikings%E2%80%9D+%23fluttervikings&amp;url=https://www.fluttervikings.com"
                      target="_blank"
                    >
                      “I'm plundering for Flutter treasures 💙 with the Vikings”
                      #fluttervikings @fluttervikings
                    </SmallLink>
                  </div>
                  <br />

                  <VerySmallHeader>AND / OR </VerySmallHeader>

                  <br />
                  <p>
                    Take a selfie and post it on Linkedin with this text to win (Be
                    creative with your Linkedin Post)
                  </p>
                  <div className="tm-click-to-tweet">
                    <SmallLink href="https://www.linkedin.com/">
                      “I'm plundering for Flutter treasures 💙 with the Vikings”
                      #FlutterVikings &nbsp;
                    </SmallLink>
                  </div>
                  <br />
                  <p />
                </div>
              </ActivityRow>
              <p>
                🤔 Why should you do participate? Well, we hope that they will be fun and
                that maybe you will learn something new about Flutter while participating.
                However, we also have some more concrete incentives lined up... Prizes!!!
              </p>
              <br />
              <br />
              <div className="live_activities">
                <p>
                  <SmallHeader className="font__caesar size__h1">
                    Live Activities
                  </SmallHeader>
                </p>

                <p>
                  During the conference, there will be a number of different live
                  activities. Some of these activities involve quizes and contests, for
                  which you can get prizes. You can see when the different activities are
                  scheduled here: &nbsp;
                  <SmallLink href="https://fluttervikings.com/#agenda">Agenda</SmallLink>
                </p>
              </div>
              <br />
              <br />
              <SmallHeader className="font__caesar size__h1">Prizes!</SmallHeader>
              <p>
                Here are the prizes that will be given out throughout the conference for
                the various contest and quiz winners!
              </p>
              <ul>
                <li>🎫 Udemy voucher 🎫</li>
                <li>🎫 Codemagic Voucher for $2000 USD 🎫</li>
                <li>🎫 AppCircle Voucher + FREE account 🎫</li>
                <li>💰 2500 Euro by The@Company (distributed to multiple winners) 💰</li>
                <li>🧸 Dash the bird (10) 🧸</li>
                <li>👕 T-Shirt (FlutterVikings/Community/Flutter) 👕</li>
                <li>📚 Flutter full reference book (Ebook and paper copy) 📚</li>
                <li>📚 Flutter in Action Ebook and voucher for paper copy 📚</li>
                <li>✨ Stream contest prize (cash + swag) ✨</li>
              </ul>
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
