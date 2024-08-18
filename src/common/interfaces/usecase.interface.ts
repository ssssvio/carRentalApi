export interface IUsecase {
  execute(data: any | any[], parameters?: any): any;
}