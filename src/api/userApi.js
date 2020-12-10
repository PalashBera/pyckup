import ajax from './ajax';

class userApi {
  async login(data) {
    return await ajax('/users/login', { method: 'POST', data });
  }

  async signup(data) {
    return await ajax('/users/signup', { method: 'POST', data });
  }

  async auth() {
    return await ajax('/users/auth');
  }
}

const UserApi = new userApi();
export default UserApi;
