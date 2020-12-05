import axios from 'axios';
import { getToken } from '../helpers/localStorage';

const clientUrl = (uri) => {
  const uriPath = uri.startsWith('/') ? uri : `/${uri}`;
  return `http://localhost:4000/api${uriPath}`;
};

const objectToFormData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;
  const objectKeys = Object.keys(obj);

  objectKeys.forEach((property) => {
    if (namespace) {
      formKey = `${namespace}[${property}]`;
    } else {
      formKey = property;
    }

    const value = obj[property];

    if (Array.isArray(value)) {
      arrayToFormData(fd, formKey, value);
    } else if (typeof value === 'object' && !(value instanceof File)) {
      objectToFormData(value, fd, formKey);
    } else {
      fd.append(formKey, value);
    }
  });

  return fd;
};

const arrayToFormData = (fd, formKey, value) => {
  value.forEach((a) => {
    if (typeof a === 'object' && !(a instanceof File)) {
      objectToFormData(value, fd, `${formKey}[]`);
    } else {
      fd.append(`${formKey}[]`, a);
    }
  });
};

const buildParam = (params, asJSON = true) => {
  if (asJSON) {
    return JSON.stringify(params);
  }
  return objectToFormData(params);
};

const getDefaultOptions = () => ({ method: 'GET', headers: {} });

function ajax(uri, options = {}) {
  let defaultOptions = getDefaultOptions();

  defaultOptions = { ...defaultOptions, method: options.method || defaultOptions.method };
  const tokenFromStorage = getToken('jwtToken');

  if (tokenFromStorage) {
    defaultOptions = {
      ...defaultOptions,
      headers: { Authorization: `Bearer ${tokenFromStorage}` }
    };
  }

  if (options.data) {
    if (options.formData) {
      defaultOptions.data = buildParam(options.data, false);
    } else {
      defaultOptions.headers['Content-Type'] = 'application/json; charset=UTF-8';
      defaultOptions.data = buildParam(options.data);
    }
  }

  defaultOptions.url = clientUrl(uri);

  return axios(defaultOptions);
}

export default ajax;
