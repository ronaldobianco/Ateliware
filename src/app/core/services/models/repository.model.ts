export interface Repository {
  id?:           number;
  name:         string;
  repositoryID: number;
  url:          string;
  language:     string;
  ownerName:     string;
  img_url:      string;
  createdAt?:    Date;
  updatedAt?:    Date;
}
