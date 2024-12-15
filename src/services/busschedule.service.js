import useAuthApi from "../helpers/authHook";
import { getDateFormat, getTimeFormat } from "../helpers/utils";

export const busScheduleService = {
  getAll,
  create,
  update,
  remove,
  find,
  status,
  q,
  tranform,
};

async function q(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("bus-schedules", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function status(id, Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.post("bus-schedules/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAll(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("bus-schedules/list", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function create(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.post("bus-schedules", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.patch("bus-schedules/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function find(id) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("bus-schedules/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function remove(id) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.delete("bus-schedules/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach((item) => {
    selectableItems.push({
      id: i++,
      route_name: item.route_name,
      bus_name: item.bus_name,
      departure_time: getTimeFormat(item.departure_time),
      arrival_time: getTimeFormat(item.arrival_time),
      start_to_end: item.start_to_end,
      status: item.status,
      createdAt: getDateFormat(item.createdAt),
    });
  });
  return selectableItems;
}
