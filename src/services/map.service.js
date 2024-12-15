import useAuthApi from "../helpers/authHook";

export const mapService = {
  mapData,
};

async function mapData(duty_status, search) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get(
      "map/data?duty_status=" + duty_status + "&search=" + search
    );
    return response.data;
  } catch (e) {
    return e.response;
  }
}
