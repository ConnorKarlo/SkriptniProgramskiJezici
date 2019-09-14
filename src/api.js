import callApi from "./call-api";

export const listaApi = () => callApi(`/auti/`, { method: "GET" });
export const urediApi = (id, body) =>
  callApi(`/auti/${id}`, { method: "PUT", body });
export const dodajApi = body => callApi(`/auti/`, { method: "POST", body });
export const izbrisiApi = id =>
  callApi(`/auti/${id}`, { method: "DELETE", id });
