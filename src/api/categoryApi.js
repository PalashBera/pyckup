import ajax from './ajax';

class categoryApi {
  async index() {
    return await ajax('/categories');
  }

  async create(data) {
    return await ajax('/categories', { method: 'POST', data });
  }
}

const CategoryApi = new categoryApi();
export default CategoryApi;
