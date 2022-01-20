import axiosClient from "./axiosClient";
const blogApi = {
  getAll(params) {
    const url = "/blog";
    return axiosClient.get(url, { params: params });
  },
  getById(id) {
    const url = `/blog/${id}`;
    return axiosClient.get(url);
  },
};

export default blogApi;
