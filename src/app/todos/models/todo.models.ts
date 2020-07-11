export class Todo {

  public id: number;
  public texto: string ;
  public comletado: boolean;

  constructor(texto: string){
    this.texto = texto;
    this.id = new Date().getTime();
    this.comletado = false;
  }

}
