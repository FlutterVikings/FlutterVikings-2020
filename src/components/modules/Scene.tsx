import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import config from '../../config';
import { useWindowSize } from '../../hooks/useWindowSize';

import '../../style/northenLights.scss';
import { sizes } from '../../utils/media';

const Aurora = () => {
  return (
    <div className="bg">
      <div className="aur_cont">
        {Array(24)
          .fill(0)
          .map((_, i) => {
            return <span key={i} className={`aur aur_${i + 1}`} />;
          })}
      </div>
      <div className="star" />
      {Array(4)
        .fill(0)
        .map((_, i) => {
          return <span key={i} className={`wave wave_${i + 1}`} />;
        })}
    </div>
  );
};

const Scene = () => {
  const { width } = useWindowSize();
  return (
    <section className="Scene">
      <div className="Scene-layers">
        {width > sizes.md && <Aurora />}
        <div className="Scene-fullSize Scene-sun" />
        <div className="Scene-fullSize Scene-stars" />
        <div className="Scene-cloudsWrapper Scene-clouds Scene-clouds--back" />
        <div className="Scene-cloudsWrapper Scene-clouds Scene-clouds--front" />
        <div className="Scene-fullSize Scene-town" />
      </div>

      <div className="SceneOverlay">
        <img alt="FlutterVikings" className="SceneOverlay-logo" src="/assets/logo.svg" />
        <h1 className="font__caesar size__h1">Flutter Vikings</h1>
        <p className="SceneOverlay-slogan">
          The biggest <span className="font__caesar">Nordic</span> Flutter Conference!
        </p>
        <div className="SceneOverlay-info">
          <p className="SceneOverlay-date">17-19 November, 2020</p>
          <p className="SceneOverlay-location">3 Days Online</p>
        </div>
        <div className="CTA-actions" style={{ display: 'flex' }}>
          <a
            className="Btn Btn--ticket Btn--cta"
            target="_blank"
            rel="noopener noreferrer"
            href={config.ticketUrl}
          >
            Get your FREE ticket
          </a>

          <ScrollIntoView selector="#agenda">
            <button className="Btn Btn--cfp Btn--cta">Program/Agenda</button>
          </ScrollIntoView>
        </div>
      </div>
    </section>
  );
};
export { Scene };
