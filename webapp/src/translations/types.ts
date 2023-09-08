export type CustomerTranslations = {
  customer: string;
  customerName: string;
  govId: string;
  taxId: string;
  address: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  province: string;
  mobilePhone: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  primaryPhone: string;
  obs: string;
  new: string;
};

export type SideBarTranslations = {
  dashboard: string;
  customers: string;
};

export type GeneralTranslations = {
  new: string;
  search: string;
  cancel: string;
  save: string;
  additionalInfo: string;
};

export type Dictionary = {
  general: GeneralTranslations;
  customer: CustomerTranslations;
  sidebar: SideBarTranslations;
};
