import axios from "axios";
type AxiosInstance = ReturnType<typeof axios.create>;


class VCClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    });
  }

  public get instance() {
    return this.client;
  }
}

export default VCClient;
