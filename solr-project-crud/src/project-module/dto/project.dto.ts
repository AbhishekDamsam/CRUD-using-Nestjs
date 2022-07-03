export interface ProjectDto {
    id: number,
    customerId: number,
    constructionDate: Date,
    productId: number,
    count: number,
    orderDate: Date | null
  }