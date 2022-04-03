import api from './api';

class UserService {
  getPublicContent() {
    return api.get('/');
  }

  searchContacts({searchP}, {filter}) {
    return api.post("/", {searchP: searchP, filter:filter})
  }

  getUserBoard({userUC}) {
    return api.post('/user', {"uc": userUC});
  }

  addToFav({userUC}) {
    return api.post('/user/addToFav', {"uc": userUC});
  }
}

export default new UserService();
