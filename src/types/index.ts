export interface ICompany {
  id: string;
  title: string;
  desc?: string;
  image?: string;
  webSite?: string;
}

export interface IJob {
  id: string;
  companyId: string;
  title: string;
  desc: string;
  location: string;
  salary?: string;
  phone?: string;
  email?: string;
  telegram?: string;
  instagram?: string;
}
