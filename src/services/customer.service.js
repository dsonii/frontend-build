import useAuthApi from "../helpers/authHook";
import { getDateFormat } from "../helpers/utils";

export const customerService = {
  getAll,
  tranform,
  deleteUser,
  create,
  update,
  find,
  walletHistory,
  bookingHistory,
  q,
  //load,
  isExists,
};

// async function load() {
//   try {
//     const response = await baseURL.get("roles");
//     return response.data;
//   } catch (e) {
//     if (e.response.status === 401) {
//       return e.response.data;
//     }
//   }
// }

async function walletHistory(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("users/wallet-histories", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function bookingHistory(customerId, Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("bookings/histories/" + customerId, {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function find(id) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("users/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAll(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("users/search", {
      params: Objparams,
    });
    
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function isExists(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.post("users/is-exists", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function q(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("users/q", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach((user) => {

    selectableItems.push({
      id: i++,
      fullname: user.fullname,
      company: user.company,
      emp_code: user.customer_code,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
      home_address: user.places.home.address,
      office_address: user.places.office.address,
     
      status: user.status,
      createdAt: getDateFormat(user.createdAt),
    });
  });
  return selectableItems;
}

async function create(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.post("users", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.patch("users/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteUser(id) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.delete("users/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
