import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login({ username, password }) {
    return api
      .post("/auth/signin", {
        username,
        password
      })
      .then((response) => {
          console.log(response);
        if (response.data.accessToken) {
          console.log(response)
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register({ username, email, password }) {
    return api
        .post("/auth/signup", {
          username,
          email,
          password
        }).then((response) => {
          if (response.data.accessToken) {
            console.log(response)
            TokenService.setUser(response.data);
          }
          return response.data;
        });
  }
}

export default new AuthService();
