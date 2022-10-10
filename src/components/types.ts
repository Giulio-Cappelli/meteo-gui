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

type Giorno = {
  idPrevisione: number;
  giorno: string;
  idIcona: number;
  icona: string;
  descrizioneIcona: string;
  testoGiorno: string;
  tMin: number;
  tMax: number;
  fasce: Fascia[];
};

type Fascia = {
  idFascia: number;
  fascia: string;
  fasciaPer: string;
  fasciaOre: string;
  icona: string;
  descIcona: string;
  idPrecProb: string;
  descPrecProb: string;
  idPrecInten: string;
  descTempInten: string;
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
};
