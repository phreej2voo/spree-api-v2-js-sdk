import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface DigitalAttr {
  url: string
  content_type: string
  filename: string
  byte_size: number
}

export interface PageData extends JsonApiDocument {
  type: string
  id: string
  attributes: DigitalAttr
  relationships: IRelationships
}

export interface IDigital extends JsonApiSingleResponse {
  data: PageData
}

export interface IDigitals extends JsonApiListResponse {
  data: PageData[]
}

export interface IDigitalResult extends ResultResponse<IDigital> {}

export interface IDigitalsResult extends ResultResponse<IDigitals> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>
