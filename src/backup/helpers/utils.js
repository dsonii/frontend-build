import moment from "moment-timezone";
import { useAuth } from "../store/useAuth";
//import { useApp } from "../store/useApp";

export const getCurrentDate = () => {
  const auth = useAuth();
  const TZ = auth.general.timezone;
  return moment().tz(TZ);
};

export const getCurrentTime = () => {
  const auth = useAuth();
  const TZ = auth.general.timezone;
  return moment().tz(TZ).format(auth.general.time_format.value);
};

export const getDateFormat = (date, format = "lll", tz = "Asia/Kolkata") => {
  const auth = useAuth();
  const TZ = auth.general.timezone ? auth.general.timezone : tz;
  return date ? moment(date).tz(TZ).format(format) : "-";
};

export const getFirstLetters = (inputString) => {
  const words = inputString.split(" ");
  const firstLetters = words.map((word) => word.charAt(0)).join("");
  return firstLetters;
};
