export default interface Task {
  id:number,
  title:string,
  description:string,
  timeEnd:Date | null,
  lapsed:boolean
}