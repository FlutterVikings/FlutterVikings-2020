import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { useAllFiles } from '../../hooks/useAllFiles';
import { useCommunities } from '../../hooks/useCommunities';
import { RelativeDirectory } from '../../models/file';
import { Container, MainTitle, Section } from '../common';
import { SponsorshipEmailLink, SponsorsLevel } from './CommonSponsors';

const Communities = () => {
  const images = useAllFiles(RelativeDirectory.communities);
  const sponsors = useCommunities(images);
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Section bgColor={theme.colors.sectionHighLight}>
            <Container>
              <MainTitle title="Supporter" titleStrokeText={'Communities'} />
              <SponsorsLevel title="" list={sponsors} theme={theme} />
              <SponsorshipEmailLink title="Do you want to become part of this amazing conference?" />
            </Container>
          </Section>
        )}
      </ThemeConsumer>
    </>
  );
};

export { Communities };
