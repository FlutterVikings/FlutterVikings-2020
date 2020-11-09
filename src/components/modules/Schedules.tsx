import AddToCalendar from '@culturehq/add-to-calendar';
import React, { useState } from 'react';
import { useAgenda } from '../../hooks/useAgenda';
import { Container, MainTitle, Section } from '../common';

// @ts-ignore
import TimezoneSelect from 'react-timezone-select';

// @ts-ignore
// tslint:disable-next-line
import '@culturehq/add-to-calendar/dist/styles.css';

import { Agenda } from '../../models/Agenda';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { useSpeakers } from '../../hooks/useSpeakers';
import { useAllFiles } from '../../hooks/useAllFiles';

const AddToCal = ({
  startTime,
  date,
  endTime,
  title,
  desc,
}: {
  startTime: string;
  date: string;
  endTime: string;
  title: string;
  desc: string;
}) => {
  return (
    <AddToCalendar
      event={{
        name: `FlutterVikings - ${title}`,
        details: desc,
        location: 'Europe/Oslo',
        startsAt: `${date}T${startTime}:00+01:00`,
        endsAt: `${date}T${endTime}:00+01:00`,
      }}
    />
  );
};
interface Props {
  agendaDay: Agenda;
  selectedTimezone: Timezone;
}

const AgendaDay = ({ agendaDay, selectedTimezone }: Props) => {
  const { name, date, dateISO, programs } = agendaDay;
  const timezoneValue = selectedTimezone.value;
  const [year, month, day] = dateISO.split('-');
  return (
    <div className="Agenda-column Agenda-column">
      <div className="Agenda-columnTitle">
        <p className="Agenda-day">{name}</p>
        <p className="Agenda-date">{date}</p>
        <span className="Agenda-dash" />
      </div>
      {/* Event--ligthningTalk */}
      {programs &&
        programs.map((program, i) => {
          const { title, startTime, endTime, speaker, isActivity, winnerTime } = program;
          const [startTimeH, StartTimeMinute] = startTime.split(':');
          const [endTimeH, endTimeMinute] = endTime.split(':');

          const timezoneBasedStartTime = new Date(
            Number(year),
            Number(month),
            Number(day),
            Number(startTimeH),
            Number(StartTimeMinute),
          )
            .toLocaleString('en-US', {
              timeZone: timezoneValue,
            })
            .split(',')[1]
            .replace(/:\d{2}\s/, ' ');

          const timezoneBasedEndTime = new Date(
            Number(year),
            Number(month),
            Number(day),
            Number(endTimeH),
            Number(endTimeMinute),
          )
            .toLocaleString('en-US', {
              timeZone: timezoneValue,
            })
            .split(',')[1]
            .replace(/:\d{2}\s/, ' ');

          return (
            <div
              key={i}
              className={`Event${speaker ? ' Event--talk' : ''}${
                isActivity ? ' Event--lunch' : ''
              }${winnerTime ? ' Event--coffeeBreak' : ''}${
                speaker && speaker.talk?.lightening ? ' Event--ligthningTalk' : ''
              }`}
            >
              <div className="Event-time">
                {timezoneBasedStartTime} - {timezoneBasedEndTime}
              </div>
              <div className="Event-details">
                <span className="Event-name">{speaker?.talk?.title || title}</span>
                {speaker && (
                  <>
                    <AddToCal
                      startTime={startTime}
                      endTime={endTime}
                      date={dateISO}
                      title={`${speaker?.talk?.title} by ${speaker?.name}` || title}
                      desc={
                        `${speaker?.talk?.description} https://flutterVikings.com` || ''
                      }
                    />
                    <a
                      href={`/#${speaker.id}`}
                      target="blank"
                      className="SpeakerInformation"
                    >
                      <div className="SpeakerInformation-pictureWrapper">
                        <GatsbyImage
                          className="SpeakerInformation-picture"
                          fixed={speaker.image.fixed}
                        />
                      </div>
                      <span className="SpeakerInformation-name">{speaker.name}</span>
                    </a>
                    {speaker?.talk.coSpeaker && (
                      <a
                        href={`/#${speaker.id}`}
                        target="blank"
                        className="SpeakerInformation"
                      >
                        <div className="SpeakerInformation-pictureWrapper">
                          <GatsbyImage
                            className="SpeakerInformation-picture"
                            fixed={speaker?.talk.coSpeaker.image.fixed}
                          />
                        </div>
                        <span className="SpeakerInformation-name">
                          {speaker?.talk.coSpeaker.name}
                        </span>
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      <div className="Event Event--space">
        <p className="Event-time" />
        <div className="Event-details">
          <span className="Event-name" />
        </div>
      </div>
      <div className="Agenda-columnFooter">
        <span className="Agenda-dash" />
      </div>
    </div>
  );
};

const CheckMark = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  height: 24px;
  width: 12px;
  border-bottom: 7px solid ${(props) => props.theme.colors.logoLightBlue};
  border-right: 7px solid ${(props) => props.theme.colors.logoLightBlue};
  position: absolute;
  top: 5px;
  right: 10px;
`;

const AgendaTabButton = styled.button<{ selected?: boolean }>`
  margin: 5px;
  padding: 10px 25px;
  position: relative;
  cursor: pointer;
  border: 3px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.logoLightBlue
        : props.theme.colors.logoDarkBlue};
  background: ${(props) => props.theme.colors.sectionbg};
  color: ${(props) =>
    props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  width: 100%;
  :hover {
    transition: all 0.5 linear;
    border-color: ${(props) => props.theme.colors.logoLightBlue};
  }
`;

const Notice = styled.div`
  color: ${(props) =>
    props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  text-align: center;
  padding: 3rem 0;
  font-size: 1.7rem;

  .css-2b097c-container,
  .css-yk16xz-control,
  .css-1pahdxg-control,
  .css-26l3qy-menu {
    background: ${(props) =>
      props.theme.isDark ? props.theme.colors.black : props.theme.colors.grey};
    text-align: left;
    :hover,
    :focus {
      border-color: ${(props) => props.theme.colors.logoLightBlue};
    }
  }
  .css-1uccc91-singleValue,
  .css-b8ldur-Input {
    color: ${(props) =>
      props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  }
`;
interface Timezone {
  value: string;
  label: string;
  altName: string;
  abbrev: string;
}
const Schedules = () => {
  const defaultTimezone = {
    value: 'Europe/Amsterdam',
    label: '(GMT+1:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    altName: 'Central European Time',
    abbrev: 'CET',
  };
  const images = useAllFiles();
  const speakers = useSpeakers(images);
  const agenda = useAgenda(speakers);
  const [selectedTab, seTSelectedTab] = useState(0);
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone>(defaultTimezone);

  const setTab = (index: number) => () => seTSelectedTab(index);
  return (
    <>
      <Section>
        <Container>
          <MainTitle title="Event Agenda" titleStrokeText={'Schedule'} />
          <Notice>
            Time is based on {selectedTimezone.altName} ({selectedTimezone.abbrev})
            <br />
            <br />
            <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
          </Notice>
          <div className="Agenda-twoColumnContainer">
            {agenda.map((agendaDay, i) => (
              <AgendaTabButton
                selected={i === selectedTab}
                className="Agenda-columnTitle"
                key={i}
                onClick={setTab(i)}
              >
                <p className="Agenda-day">{agendaDay.name}</p>
                <p className="Agenda-date">{agendaDay.date}</p>
                {i === selectedTab && <CheckMark />}
              </AgendaTabButton>
            ))}
          </div>
          <br />
          <br />
          <div className="Agenda-twoColumnContainer">
            {agenda.map(
              (agendaDay, i) =>
                i === selectedTab && (
                  <AgendaDay
                    key={i}
                    selectedTimezone={selectedTimezone}
                    agendaDay={agendaDay}
                  />
                ),
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export { Schedules };
