import useAuthApi from "../helpers/authHook";

export const paymentGatewayService = {
  update,
  fetch,
  isEnabled,
};

async function isEnabled() {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("payment-gateways/is-enabled");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function fetch(site) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("payment-gateways/" + site);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(site, Objparams) {
  try {
    console.log("site, Objparams", site, Objparams);
    const privateAuth = useAuthApi();
    const response = await privateAuth.patch(
      "payment-gateways/" + site,
      Objparams
    );
    return response.data;
  } catch (e) {
    return e.response;
  }
}
