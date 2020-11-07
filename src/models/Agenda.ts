import { Speaker } from './Speaker';

interface Program {
  title: string;
  startTime: string;
  endTime: string;
  isActivity?: boolean;
  winnerTime?: boolean;
  speaker?: Speaker;
}
export interface Agenda {
  name: string;
  date: string;
  dateISO: string;
  programs: Program[];
}
