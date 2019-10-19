import Request from "./Request";

export default class RequestBuilder {
  constructor() {
    this.request = new Request();
  }
  
  paraUrl(url) {
    this.request.url = url;
    return this;
  }
  
  useOMetodo(method) {
    this.request.method = method;
    return this;
  }
  
  payload(payload) {
    this.request.payload = payload;
    return this;
  }
  
  build() {
    return this.request;
  }
}
