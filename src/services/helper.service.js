import useAuthApi from "../helpers/authHook";

export const helperService = {
  getAll,
  deleteHelper,
  update,
  tranform,
};

async function getAll(Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.get("helpers/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.patch("helpers/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteHelper(id) {
  try {
    const privateAuth = useAuthApi();
    const response = await privateAuth.delete("helpers/" + id);
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
      ticket_no: item.ticket_no,
      firstname: item.firstname,
      lastname: item.lastname,
      email: item.email,
      phone: item.phone,
      gender: item.gender,
      helpemail: item.helpemail,
      description: item.description,
      createdAt: item.createdAt,
    });
  });
  return selectableItems;
}
