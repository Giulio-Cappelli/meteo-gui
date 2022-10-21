import { Giorno } from "../types";

const convertDate = (prop: Giorno) => {
  const giorno = prop;

  const daysOfWeek = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const date = new Date(giorno.giorno);
  const giorno_txt = daysOfWeek[date.getDay()];
  const giorno_num = date.getDate();
  const mese_num = date.getMonth() + 1;

  return { giorno_txt, giorno_num, mese_num };
};
export default convertDate;
