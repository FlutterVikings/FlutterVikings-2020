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

const SimpleClickToTweet = styled.div`
  display: block;
  position: relative;
  border-style: solid;
  border: 1px solid #dddddd;
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
                  <SmallHeader className="font__caesar size__h1">
                    Prizes and Gifts!
                  </SmallHeader>
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
                  <p>
                    Some of our sponsors are also giving <strong>gifts</strong> to all
                    attendees! These are discount codes. So, attendees with tickets will
                    get these later in an email.
                  </p>
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
                  <br />
                  <p>
                    <SmallHeader>Stream Contest</SmallHeader>
                  </p>
                  <p>
                    <strong>Codelab</strong>
                  </p>
                  <p>
                    The codelab is built to help users become familiar with our Flutter
                    chat SDK. It requires basic knowledge of Flutter and no prior
                    knowledge of Stream. The tutorial is short and only takes ~15 minutes
                    to complete.{' '}
                  </p>
                  <p>
                    Users are required to scan or enter their ticket ID to unlock the
                    codelab experience.{' '}
                  </p>
                  <p>
                    Codelab URL:{' '}
                    <SmallLink href="https://bit.ly/flutter-vikings-codelab">
                      {' '}
                      https://bit.ly/flutter-vikings-codelab.
                    </SmallLink>{' '}
                  </p>
                  <br />
                  <strong>Activity</strong>
                  <p>
                    Build Viking is a week-long Flutter hackathon which gives developers
                    the freedom to create whatever their heart desires. It is an
                    opportunity for developers to showcase their creativity by building
                    innovative apps, websites, or desktop applications in Flutter.
                  </p>
                  <p>
                    Developers are free to use 3rd party services such as Rive, Firebase,
                    or any package to design and build their applications.
                  </p>
                  <p>
                    Note, participants are *not* required to use Stream for this activity.
                  </p>
                  <p>
                    Submissions for build Vikings close on midnight Sunday, 22nd November
                    2020 UTC. The form for submissions can be found here.
                  </p>
                  <p>
                    Activity URL:{' '}
                    <SmallLink href="https://getstream.io/blog/stream-loves-flutter-vikings/">
                      Stream loves Flutter Vikings
                    </SmallLink>
                  </p>
                  <p>
                    Activity Submission form:{' '}
                    <SmallLink href="https://bit.ly/stream-build-viking">
                      Submit here
                    </SmallLink>
                  </p>
                  <br />
                  <strong>Prizes: </strong>{' '}
                  <p>
                    There are two prizes that will be given to the top two winners of the
                    Flutter app contest. The first place winner will get E-Gift card and
                    Stream swag. The second place winnter will get Stream swag.{' '}
                  </p>
                  <p>
                    They will also give Stream Swag and will be given to a random
                    participant who completes the Stream codelab.{' '}
                  </p>
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
                    <strong>Prize:</strong>&nbsp;For the 3 best logos:{' '}
                    <strong>Dash!</strong> &nbsp; For the next 7 best logos:{' '}
                    <SmallLink href="https://fluttercompletereference.com/">
                      The Complete Flutter Reference
                    </SmallLink>{' '}
                    as an e-book
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
                  <strong>Prizes:</strong>
                </p>
                <p>Grand prize winner: 1-year free Appcircle Professional Package</p>
                <p>2nd place: 1-year free Appcircle Developer Package</p>
                <p>3rd-5th place: 3-month free Appcircle Developer Package</p>

                <br />
                <br />
                <SmallHeader>Flutter Complete Reference Quiz</SmallHeader>
                <p>
                  Alberto Miola, the author of the{' '}
                  <SmallLink href="https://fluttercompletereference.com/">
                    The Complete Flutter Reference
                  </SmallLink>{' '}
                  book, will host a quiz. He made custom flutter web app just for this
                  activity! Link to it will be provided at the start of the quiz. To
                  participate, you will need to enter your ticket number. This will be the
                  first Activitiy on November 18th (Day 2) 4:15 - 4:30 pm CET{' '}
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
