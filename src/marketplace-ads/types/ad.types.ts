export interface AdDto {
  id: number;
  name: string;
  description: string;
  price: number;
  //tag String
  image?: string;
  createAt: Date;
  updatedAt: Date;
}
export interface AdResultDto {
  items: AdDto[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}
