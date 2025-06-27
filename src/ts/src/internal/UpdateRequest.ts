export interface UpdateRequest<TUpdatedValueDto> {
  id: string;
  values: TUpdatedValueDto;
}
