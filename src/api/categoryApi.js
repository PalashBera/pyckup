import ajax from './ajax';

class categoryApi {
  async index() {
    return await ajax('/categories');
  }
}

const CategoryApi = new categoryApi();
export default CategoryApi;
