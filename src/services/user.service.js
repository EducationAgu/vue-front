import api from './api';

class UserService {
  getPublicContent({skip},{take}) {
    return api.post('/', {skip: skip, take: take});
  }

  searchContacts({searchP}, {filter}, {skip},{take} ) {
    return api.post("/", {searchP: searchP, filter:filter, skip: skip, take: take})
  }

  getUserBoard({userUC}) {
    return api.post('/user', {"uc": userUC});
  }

  addToFav({userUC}) {
    return api.post('/user/addToFav', {"uc": userUC});
  }
}

export default new UserService();
