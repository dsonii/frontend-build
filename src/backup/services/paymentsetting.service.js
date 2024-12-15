import useAuthApi from "../helpers/authHook";

export const paymentSettingService = {
  update,
  fetch,
};

async function fetch() {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("payment-settings");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(name, Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.patch(
      "payment-settings/" + name,
      Objparams
    );
    return response.data;
  } catch (e) {
    return e.response;
  }
}
