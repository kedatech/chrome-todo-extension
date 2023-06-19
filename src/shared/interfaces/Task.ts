export default interface Task {
  id:number, // identificador
  title:string, // titulo de la tarea
  description:string, // descripción de la tarea
  timeEnd:Date | null, //fehca de finalización de la tarea
  lapsed:boolean, //vencida
  check:boolean // terminada
}