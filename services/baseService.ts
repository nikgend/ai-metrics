import axios, { AxiosInstance } from 'axios'

export class BaseService {
  protected client: AxiosInstance

  constructor(baseURL: string = '') {
    this.client = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  protected async handleRequest<T>(promise: Promise<any>): Promise<T> {
    try {
      const response = await promise
      return response.data
    } catch (error: any) {
      console.error('API Error:', error.response?.data || error.message)
      throw new Error(error.response?.data?.message || error.message)
    }
  }
}
