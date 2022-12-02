export type Risposta = {
  fonteDaCitare: string;
  codiceTitolare: string;
  nomeTitolare: string;
  dataPubbicazione: string;
  idPrevisione: number;
  evoluzione: string;
  evoluzioneBreve: string;
  allerteList: string[];
  previsione: PrevisioneMeteo[];
};

type PrevisioneMeteo = {
  giorni: Giorno[];
  localita: string;
  quota: number;
};

export type Giorno = {
  idPrevisione: number;
  giorno: string;
  idIcona: number;
  icona: string;
  descIcona: string;
  testoGiorno: string;
  tMinGiorno: number;
  tMaxGiorno: number;
  fasce: Fascia[];
};
export type Fascia = {
  idPrevisioneFascia: number;
  fascia: string;
  fasciaPer: string;
  fasciaOre: string;
  icona: string;
  descIcona: string;
  idPrecProb: string;
  descPrecProb: string;
  idPrecInten: string;
  descPrecInten: string;
  idTempProb: string;
  descTempProb: string;
  idVentoIntQuota: string;
  descVentoIntQuota: string;
  idVentoDirQuota: string;
  descVentoDirQuota: string;
  idVentoIntValle: string;
  descVentoIntValle: string;
  idVentoDirValle: string;
  descVentoDirValle: string;
  iconaVentoQuota: string;
  zeroTermico: number;
  limiteNevicate: number;
};
