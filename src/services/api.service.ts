import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { singleton } from 'tsyringe'

@singleton()
export class ApiService {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_BASE_URL,
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    this.setupRequestInterceptor()
  }

  private setupRequestInterceptor() {
    // We can add more interceptors here
    // this.axiosInstance.interceptors.response.use(
    //   response => response,
    //   (error) => error
    // )
  }

  public get<ResponseType>(url: string, config: AxiosRequestConfig = {}) {
    return this.axiosInstance.get<ResponseType>(url, config)
  }

  public post<ResponseType, RequestType = never>(
    url: string,
    data: RequestType,
    config: AxiosRequestConfig = {}
  ) {
    return this.axiosInstance.post<ResponseType>(url, data, config)
  }

  public put<ResponseType, RequestType = never>(
    url: string,
    data: RequestType,
    config: AxiosRequestConfig = {}
  ) {
    return this.axiosInstance.put<ResponseType>(url, data, config)
  }

  public delete<ResponseType>(url: string, config: AxiosRequestConfig = {}) {
    return this.axiosInstance.delete<ResponseType>(url, config)
  }

  public patch<ResponseType, RequestType = never>(
    url: string,
    data: RequestType,
    config: AxiosRequestConfig = {}
  ) {
    return this.axiosInstance.patch<ResponseType>(url, data, config)
  }

  public head<ResponseType>(url: string, config: AxiosRequestConfig = {}) {
    return this.axiosInstance.head<ResponseType>(url, config)
  }

  public options<ResponseType>(url: string, config: AxiosRequestConfig = {}) {
    return this.axiosInstance.options<ResponseType>(url, config)
  }

  public request<ResponseType>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<ResponseType>(config)
  }
}
