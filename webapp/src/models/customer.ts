export type TCustomer = {
  ID: string;
  FirstName: string;
  LastName: string;
  Email: string;
  primaryPhone: string;
  BirthDate: string;
  Obs: string;
}

export type TCustomers = TCustomer[]