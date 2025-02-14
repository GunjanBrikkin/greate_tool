export default class Project {
  id: number | undefined;
  name: string = "";
  description: string = "";
  date: Date = new Date();
  isActive: boolean = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(para?: any) {
    if (!para) return;
    if (para.id) this.id = para.id;
    if (para.name) this.name = para.name;
    if (this.description) this.description = para.description;
  }
}
