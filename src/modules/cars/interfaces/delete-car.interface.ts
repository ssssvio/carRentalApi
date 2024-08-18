export interface IDeleteCarUsecase {
  execute(id: number): Promise<void>;
};