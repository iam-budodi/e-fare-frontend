// export interface ResponseError {
//   errorNumber: number;
//   errorMessage: string;
//   friendlyMessage: string;
// }

export class ResponseError {
  constructor( public errorNumber: number = 0,
  public errorMessage: string = '',
  public friendlyMessage: string = ''
  ) {}

}
