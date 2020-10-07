import { ImageSharp } from './ImageSharp';

export class Sponsor {
  id: string;
  name: string;
  level: number;
  image: ImageSharp;
  constructor({ id, name, level }: any, image: any) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.image = image;
  }
}
