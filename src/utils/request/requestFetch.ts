// import { v4 as uuidv4 } from 'uuid';

import { BASIC_CONSTANT } from "../basic.constants";
const queryString = require("query-string");
//

export interface IToken {
  token: string | null | undefined;
}

export interface Ioptions {
  token?: IToken;
  contentType?: string;
}

export enum REQUEST_TYPE {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

/**
 * @property {number} code http code
 * @property {string} message 에러가 있을 경우 메시지
 * @property {*} data 공통 API 의 data 값
 * @property {string} description description
 * @property {*} response http request response 전문
 *
 */

/**
 * request result 결과를 만들어줌.
 *
 * @param {*} code
 * @param {*} message
 * @param {*} data
 */

/**
 *

 * @param {object} API_DATA  {API_CONSTANTS}의 데이터

 * @param {*} data
 * @param {*} component
 * @param {*} isToken
 */
export async function requestAPI<T>(
  url: string,
  method: REQUEST_TYPE,
  data: T,
  t: IToken,
  ct = null,
  isMultiple = null
) {
  let token;
  let contentType;

  if (t) token = t;
  if (ct) contentType = ct;
  return await requestFetch(
    url,
    method,
    data,
    {
      token,
      contentType,
    },
    isMultiple
  );
}

/**
 *
 * @param {string} url
 * @param {GET, POST, PUT, DELETE} method
 * @param {*} data
 * @param {*} options
 */
export async function requestFetch<T>(
  url: string,
  method: REQUEST_TYPE,
  data: any,
  options: Ioptions = {},
  isMultiple: T
) {
  try {
    let Authorization = {};

    if ("token" in options && options.token) {
      Authorization = { Authorization: `Bearer ${options.token}` };
      delete options.token;
    }

    const body =
      method !== REQUEST_TYPE.GET && data ? { body: JSON.stringify(data) } : {};

    if (method === REQUEST_TYPE.GET || method === REQUEST_TYPE.DELETE) {
      if (data && Object.keys(data).length > 0)
        url += `?${queryString.stringify(data)}`;
    }

    const headers = {
      "Content-Type": options["contentType"]
        ? options["contentType"]
        : "application/json",
      ...Authorization,
    };

    // console.log(url);
    let response;
    if (method === REQUEST_TYPE.GET || method === REQUEST_TYPE.DELETE) {
      response = await fetch(url, {
        method,
        headers,
      });
    } else if (options["contentType"] === BASIC_CONSTANT.FORMTYPE) {
      var formData = new FormData();
      for (var key in data) {
        const item: any = data[key];
        if (isMultiple && /[0-9]/.test(key)) key = "files";
        formData.append(key, item);
      }
      // delete headers["Content-Type"];
      response = await fetch(url, {
        method,
        headers,
        body: formData,
      });
    } else {
      response = await fetch(url, {
        method,
        ...body,
        headers,
      });
    }

    if (response.status === 200 || response.status === 201) {
      const result = response.json();
      return method !== REQUEST_TYPE.DELETE ? result : {};
    }

    if (response.status === 302) {
      // console.log(302);
    } else {
      throw response;
    }
  } catch (error) {}
}
