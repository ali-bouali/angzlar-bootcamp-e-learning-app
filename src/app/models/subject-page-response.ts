import {SubjectResponse} from './subject-response';

export interface SubjectPageResponse {
  content?: SubjectResponse[];
  totalPages?: number;
}
