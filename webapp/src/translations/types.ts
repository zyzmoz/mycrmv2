export type CustomerTranslations = {
  customer: string;
  customerName: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  primaryPhone: string;
  obs: string;
};

export type SideBarTranslations = {
  dashboard: string;
  customers: string;
};

export type GeneralTranslations = {
  new: string;
  search: string;
};

export type Dictionary = {
  general: GeneralTranslations;
  customer: CustomerTranslations;
  sidebar: SideBarTranslations;
};
