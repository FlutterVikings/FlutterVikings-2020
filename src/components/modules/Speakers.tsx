import React from 'react';
import { ThemeConsumer } from 'styled-components';
import config from '../../config';
import { useAllFiles } from '../../hooks/useAllFiles';
import { useSpeakers } from '../../hooks/useSpeakers';
import { RelativeDirectory } from '../../models/file';
import { Container, Content, MainTitle, Section } from '../common';
import { FaceImage } from '../common/FaceImage';
import { ResponsiveGrid } from '../common/ResponsiveGrid';

const Speakers = () => {
  const speakerImages = useAllFiles(RelativeDirectory.speakrs);
  const speakers = useSpeakers(speakerImages);
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Section bgColor={theme.colors.sectionHighLight}>
            <Container>
              <MainTitle title="Amazing Line-Up" titleStrokeText={'speakers'} />
              <ResponsiveGrid>
                {speakers.map((member) => {
                  return <FaceImage key={member.id} member={member} />;
                })}
              </ResponsiveGrid>
            </Container>
          </Section>
        )}
      </ThemeConsumer>
    </>
  );
};

export { Speakers };
