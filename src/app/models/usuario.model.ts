export interface IAlumno {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  materia: string;
  isTop10: boolean;
  horario: Date;
}

export class Alumno implements IAlumno {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public materia: string,
    public isTop10: boolean,
    public horario: Date,
  ) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  alternarTop10(ev: MouseEvent) {
    console.log(ev);
    this.isTop10 = !this.isTop10;
  }
}
