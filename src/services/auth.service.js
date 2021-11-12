import api from "./api";
import TokenService from "./token.service";
const bcrypt = require('bcryptjs')

class AuthService {
  login({ username, password }) {
      api.get("/auth/salt").then((response)=>{
          const hash = bcrypt.hashSync(password, response.data)
                  return api
                      .post("/auth/signin", {
                          username,
                          "password": hash,
                      }).then((response) => {
                          console.log(response)
                          if (response.data.accessToken) {
                              TokenService.setUser(response.data);
                          }
                          return response.data;
                      });
      })
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
            TokenService.setUser(response.data);
          }
          return response.data;
        });
  }
}

export default new AuthService();
