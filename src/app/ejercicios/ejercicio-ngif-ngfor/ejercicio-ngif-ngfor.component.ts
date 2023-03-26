import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models';

@Component({
  selector: 'app-ejercicio-ngif-ngfor',
  templateUrl: './ejercicio-ngif-ngfor.component.html',
  styleUrls: ['./ejercicio-ngif-ngfor.component.css']
})
export class EjercicioNgifNgforComponent implements OnInit {
  public loading = true;
  public alumnos: Alumno[] = [
    new Alumno(1, 'Lizeth', 'Castro', 'lizeth@mail.com', 'Español', false, new Date('2023-04-01')),
    new Alumno(2, 'Manuel', 'Valencia', 'manuel@mail.com', 'Español', false, new Date('2023-04-01')),
    new Alumno(3, 'Hugo', 'Flores', 'hugo@mail.com', 'Matematicas', false, new Date('2023-04-02')),
    new Alumno(4, 'Rosa', 'Cruz', 'rosa@mail.com', 'Matematicas', false, new Date('2023-04-02')),
    new Alumno(5, 'Karina', 'Jimenez', 'karina@mail.com', 'Ciencias', false, new Date('2023-04-03')),
    new Alumno(6, 'Roberto', 'Olivares', 'roberto@mail.com', 'Ciencias', false, new Date('2023-04-04')),
    new Alumno(7, 'Milton', 'Huerta', 'milton@mail.com', 'Ingles', false, new Date('2023-04-05')),
    new Alumno(8, 'Fernanda', 'Reyes', 'fernanda@mail.com', 'Ingles', false, new Date('2023-04-05')),
    new Alumno(9, 'Monica', 'Ruiz', 'monica@mail.com', 'Historia', false, new Date('2023-04-06')),
    new Alumno(10, 'Esteban', 'Lima', 'esteban@mail.com', 'Historia', false, new Date('2023-04-06')),
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
