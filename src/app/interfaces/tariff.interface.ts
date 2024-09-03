
export interface TarifInterface {
  id: string;
  created_at: string;
  productShortName: string;
  internetSpeed: InternetSpeed;
  prices: Prices;
  remarks: Remark[];
  provider: Provider;
}


interface InternetSpeed {
  upload: string;
  download: string;
  minUpSpeed: string | null;
  maxDownSpeed: string | null;
  minDownSpeed: string | null;
  averageUpSpeed: string | null;
  uploadSpeedUnit: string;
  averageDownSpeed: string | null;
  downloadSpeedUnit: string;
  uploadSpeedNumber: number;
  downloadSpeedNumber: number;
}

interface Prices {
  total: number;
  totals: string;
  monthly: string;
  totalCosts25: string;
  savingsPercent: number;
}

export interface Remark {
  body: string;
  type: string;
  header: string;
  caption: string;
}

interface Provider {
  id: string;
  city: string;
  name: string;
  street: string;
  logoImg: string;
  legalName: string;
  telephone: string;
  postalCode: string;
  houseNumber: string;
  orderProfiles: string[];
}

