import axios from 'axios'
import type { AxiosRequestConfig } from 'axios/index'

enum AJaxCode {
  OK,
}

const AjaxError = (error) => {
  throw new Error(error.message)
}

const Ajax = (config: AxiosRequestConfig = {}) => {
  const ajaxInstance = axios.create({
    baseURL: '',
    timeout: 1000,
  })

  ajaxInstance.interceptors.response.use(
    (res) => {
      if (res.data.status === AJaxCode.OK) {
        return res.data.data
      } else {
        return Promise.reject(AjaxError)
      }
    },
    (error) => Promise.reject(AjaxError(error))
  )

  return {
    get: (url: string, params: Record<string, unknown>) => {
      return ajaxInstance.get(url, {
        ...config,
        ...params,
      })
    },
  }
}

export default Ajax()