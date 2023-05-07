import { ToDo } from './types';

class GetDataService {
  async getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const fetchData = (await data.json()) as ToDo[];
    return fetchData;
  }
}
export const getDataService = new GetDataService();
