import RequestBuilder from "../../src/Criacional/RequestBuilder";

describe('Design Pattern Builder Tests', () => {
  
  test('sanity', () => {
    
    const requestBuilder = new RequestBuilder();
    const url = 'http://algo/usuaarios';
    const method = 'GET';
    const request = requestBuilder
      .paraUrl(url)
      .useOMetodo(method)
      .payload(null)
      .build();
    expect(request.method).toEqual(method);
    expect(request.payload).toBe.null;
    expect(request.url).toEqual(url);
    
    
  });
  
});
