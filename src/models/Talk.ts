export class Talk {
  title: string;
  description: string;
  lightening: boolean;
  constructor({ title, description, lightening }: any) {
    this.title = title;
    this.description = description;
    this.lightening = lightening;
  }
}
