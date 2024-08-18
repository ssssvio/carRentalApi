export interface IDeleteUSerUsecase {
  execute(id: number): Promise<void>;
};