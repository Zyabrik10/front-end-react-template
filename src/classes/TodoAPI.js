import API from './API';

export default class TodoAPI extends API {
  constructor() {
    super({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      token: '',
    });
  }

  getTodos = () => {
    return this.fetch({ api: 'todos' });
  };
}
