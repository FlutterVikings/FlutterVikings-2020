import { People } from './People';
import { Talk } from './Talk';

export class Speaker extends People {
  talk: Talk;
  coSpeaker: Speaker;

  constructor(
    { id, name, title, company, social, talk, bio, coSpeaker }: any,
    image: any,
  ) {
    super({ id, name, title, company, social, bio }, image);
    this.talk = new Talk(talk);
    this.coSpeaker = coSpeaker || '';
  }
}
