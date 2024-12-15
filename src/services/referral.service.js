import useAuthApi from "../helpers/authHook";
//import moment from "moment-timezone";
import { getDateFormat } from "../helpers/utils";

export const referralService = {
  getAll,
  transform,
  getSingle,
};

async function getAll(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("referrals/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getSingle(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("referrals/cust", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

function transform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach((item) => {
    selectableItems.push({
      id: i++,
      customer_name: item.user.firstname + " " + item.user.lastname,
      customer_phone: item.user.phone,
      referral_name: item.referral.firstname + " " + item.user.lastname,
      referral_phone: item.referral.phone,
      income_earned: item.amount,
      created_at: getDateFormat(item.createdAt),
    });
  });
  return selectableItems;
}
