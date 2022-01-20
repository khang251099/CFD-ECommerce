import axiosClient from "./axiosClient";

const tagApi = {
  getAll(params) {
    const url = "/tagProducts";
    return axiosClient.get(url, { params: params });
  },
  getById(id) {
    const url = `/tagProducts/${id}`;
    return axiosClient.get(url);
  },
};

export default tagApi;
