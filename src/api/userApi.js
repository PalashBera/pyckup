import ajax from './ajax';

class userApi {
  async login(data) {
    return await ajax('/users/login', { method: 'POST', data });
  }
}

const UserApi = new userApi();
export default UserApi;