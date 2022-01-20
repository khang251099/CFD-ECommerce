import axiosClient from "./axiosClient";

const sliderApi = {
  getAll(params) {
    const url = "/banner";
    return axiosClient.get(url, { params: params });
  },
  getById(id) {
    const url = `/banner/${id}`;
    return axiosClient.get(url);
  },
};

export default sliderApi;
