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

const SimpleClickToTweet = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  position: relative;
  border-style: solid;
  border: 1px solid #dddddd;
  -moz-border-radius: 4px;
  border-radius: 4px;
  padding: 15px 30px;
  margin: 15px 0px;
`;

const TwitterLogoLink = styled.a`
  margin: 0;
  padding: 0;
  position: center;
  display: inline-block;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 100%;
  color: #ffffff;
  float: center;
  padding-right: 24px;
  text-decoration: none;
  background: transparent url(/assets/Twitter_Social_Icon_Circle_Color.svg) no-repeat
    right top;
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
  color: #bbb;
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
                    mile to keep our attendees interested and engaged. That's why we have
                    a host of live activities and contests running throughout the
                    conference lined up.
                  </p>
                  <br />
                  <SmallHeader className="font__caesar size__h1">Prizes!</SmallHeader>
                  <p>
                    Why should you participate 🤔 ? Well, we hope that they will be fun
                    and that maybe you will learn something new about Flutter while
                    participating. However, we also have some more concrete incentives
                    lined up... Prizes!!!
                  </p>
                  <p>
                    Here are the prizes that will be awarded throughout the conference for
                    the various activity contests and quiz winners!
                  </p>
                  <ul>
                    <li>🎫 Udemy vouchers 🎫</li>
                    <li>
                      🎫 Codemagic Voucher for $100 USD credit, for 20 winners each 🎫
                    </li>
                    <li>🎫 AppCircle Voucher + FREE account 🎫</li>
                    <li>💰 500€ by The@Company for 5 winners each 💰</li>
                    <li>🧸 Dash the bird!!! (10) 🧸</li>
                    <li>👕 T-Shirt (FlutterVikings/Community/Flutter) 👕</li>
                    <li>
                      📚 "Flutter Complete Reference" book (Ebook and/or paper copy) 📚
                    </li>
                    <li>📚 "Flutter in Action" Ebook (voucher from Manning) 📚</li>
                    <li>✨ Stream contest prize (cash + swag) ✨</li>
                  </ul>
                  <br />
                  <br />
                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    Contests Running Through the Conference
                  </SmallHeader>
                  <p>
                    <SmallHeader>The @ Company App Contest</SmallHeader>
                  </p>
                  <p>
                    Create a simple mobile application using the @protocol and to submit
                    your application to us by 3p PST Friday, November 20, 2020.
                  </p>
                  <br />
                  <p>
                    <strong>Prize:</strong>&nbsp;Winners of the challenge will receive{' '}
                    <strong>500 Euro</strong>!!! They will select up to five winning apps.
                  </p>
                  <br />
                  <SmallLink href="https://atsign.com/flutter-vikings/">
                    Read more about the details here
                  </SmallLink>
                  <br />
                  <br />
                  <br />

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
                  <p>
                    <strong>Prize:</strong>&nbsp;For the 10 best logos:{' '}
                    <strong>Dash!</strong>
                  </p>
                  <br />
                  <br />
                  <SmallHeader>Social Media Contests</SmallHeader>
                  <p>
                    Take a selfie and tweet it with this to win (Be creative with your
                    selfie's and Tweets){' '}
                  </p>
                  <SimpleClickToTweet>
                    <SmallLink
                      className="tm-ctt-btn"
                      href="https://twitter.com/share?text=Me+with+the+Vikings%E2%80%9D+%23fluttervikings&amp;url=https://www.fluttervikings.com"
                      target="_blank"
                    >
                      “I'm plundering for Flutter treasures 💙 with the Vikings”
                      #fluttervikings @fluttervikings
                    </SmallLink>
                    <TwitterLogoLink
                      href="https://twitter.com/share?text=Me+with+the+Vikings%E2%80%9D+%23fluttervikings&amp;url=https://www.fluttervikings.com"
                      target="_blank"
                    >
                      &nbsp;
                    </TwitterLogoLink>
                  </SimpleClickToTweet>

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
                  <p>
                    <strong>Prize:</strong>&nbsp;For the 5 best social media posts each
                    day: <strong>Udemy voucher</strong>
                  </p>
                  <p />
                </div>
              </ActivityRow>

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
                <br />
                <SmallHeader>AppCircle Quiz</SmallHeader>
                <p>
                  The AppCircle company will host a quiz. This will be the first Activitiy
                  on November 17th (Day 1) 4:10 - 4:30 pm CET{' '}
                </p>
                <br />
                <p>
                  <strong>Prize:</strong>&nbsp;TBA
                </p>
                <br />
                <br />
                <SmallHeader>Flutter Complete Reference Quiz</SmallHeader>
                <p>
                  Alberto Miola, the author of the "Flutter Complete Reference" book, will
                  host a quiz. He made custom flutter web app just for this activity! Link
                  to it will be provided at the start of the quiz. To participate, you
                  will need to enter your ticket number. This will be the first Activitiy
                  on November 18th (Day 2) 4:15 - 4:30 pm CET{' '}
                </p>
                <br />
                <p>
                  <strong>Prize:</strong>&nbsp;The first 10 winners can get either a
                  physical or digital copy of the book. The second 10 winners get a
                  digital copy of the book{' '}
                </p>
                <br />

                <br />
                <SmallHeader>Diversity Activity</SmallHeader>
                <p>
                  Danielle Cox, the Flutterfly, will give a talk and host an activity
                  about diversity. This will be the second Activitiy on November 18th (Day
                  2) 4:15 - 4:30 pm CET{' '}
                </p>
                <br />
                <p>
                  <strong>Prize:</strong>&nbsp;TBA
                </p>
                <br />
                <br />
                <SmallHeader>CodeMagic Quiz</SmallHeader>
                <p>
                  CodeMagic will host a personality test type quiz. This will be the first
                  Activitiy on November 19th (Day 3) 4:15 - 4:30 pm CET{' '}
                </p>
                <br />
                <p>
                  <strong>Prize:</strong>&nbsp;They will give $100 credit for CodeMagic to
                  the first 20 people who win (We don't know how you win a personality
                  quiz either. It will be interesting to find out!)
                </p>
                <br />
                <br />
              </div>
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
