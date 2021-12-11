import { CURRENT_ENV } from "../configs/env";
import a from "axios";

const axios = a.create({ baseURL: CURRENT_ENV.API_URL });

export default class BaseService {
  init(prefix = true) {
    this.prefix = prefix;
    return this;
  }

  callWithParams(method, url, params, options, usePrefix = true) {
    return axios
      .get(url, {
        params,
        ...options,
      })
      .then(({ data }) => data);
  }

  callWithBody(method, url, body, options, usePrefix = true) {
    return axios[method](
      usePrefix ? `${this.prefix}${url}` : url,
      body,
      options
    ).then(({ data }) => data);
  }

  get(url, params, options, usePrefix = true) {
    return this.callWithParams("get", url, params, options, usePrefix);
  }

  post(url, body, options, usePrefix = true) {
    return this.callWithBody("post", url, body, options, usePrefix);
  }

  put(url, body, options, usePrefix = true) {
    return this.callWithBody("put", url, body, options, usePrefix);
  }

  patch(url, body, options, usePrefix = true) {
    return this.callWithBody("patch", url, body, options, usePrefix);
  }

  delete(url, params, options, usePrefix = true) {
    return this.callWithParams("delete", url, params, options, usePrefix);
  }
}
