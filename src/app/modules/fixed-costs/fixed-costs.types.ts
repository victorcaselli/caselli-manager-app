export interface FixedCostsResponse {
  id: string,
  expenses: ExpenseResponse[],
  services: ServicesResponse[],
  totalCost: string,
  servicesTotalCost: string
}

export interface ExpenseResponse {
  id: string,
  createAt: string,
  cost: string,
  description: string
}

export interface ServicesResponse {
  id: string,
  createAt: string,
  cost: string,
  description: string
}
