import api from './api';

class UserService {
  getPublicContent() {
    return api.get('/');
  }

  getUserBoard() {
    return api.get('/api/user');
  }
}

export default new UserService();
