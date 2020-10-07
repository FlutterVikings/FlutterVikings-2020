import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import config from '../../config';
import { useAllFiles } from '../../hooks/useAllFiles';
import { useSponsors } from '../../hooks/useSponsors';
import { RelativeDirectory } from '../../models/file';
import { VikingTheme } from '../../theme';
import { Container, MainTitle, Section, FetchSvg, Content } from '../common';
import { ResponsiveGrid } from '../common/ResponsiveGrid';

const SponsorImage = styled.div<{ theme: VikingTheme }>`
  height: 6rem;
  padding: 1rem;
  margin-right: 1rem;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  svg {
    fill: ${(props) =>
      props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
    height: 4rem;
    width: 100%;
  }
  g {
    fill: ${(props) =>
      props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  }
  :hover {
    svg {
      transition: all 0.1s linear;
      fill: ${(props) => props.theme.colors.logoLightBlue};
    }
    g {
      transition: all 0.1s linear;
      fill: ${(props) => props.theme.colors.logoLightBlue};
    }
  }
`;

const Sponsors = () => {
  const images = useAllFiles(RelativeDirectory.sponsors);
  const sponsors = useSponsors(images);
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Section>
            <Container>
              <MainTitle title="Our Supporters" titleStrokeText={'sponsors'} />
              <ResponsiveGrid size={21}>
                {sponsors.map((sp) => (
                  <SponsorImage key={sp.id} theme={theme}>
                    <FetchSvg url={sp.image.publicURL} />
                  </SponsorImage>
                ))}
              </ResponsiveGrid>
              <br />
              <br />
              <Content center={true}>
                <div className="CTA-actions">
                  <h3>Do you like to become part of this amazing event?</h3>
                  <br />
                  <a
                    className="Btn Btn--cfp Btn--cta"
                    target="_blank"
                    href={`mailto:${config.email}`}
                  >
                    SEND US AN EMAIL
                  </a>
                  <br />
                  <br />
                  team@fluttervikings.com
                </div>
              </Content>
              <br />
              <br />
              <br />
              <br />
              <br />
            </Container>
          </Section>
        )}
      </ThemeConsumer>
    </>
  );
};

export { Sponsors };
