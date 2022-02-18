<template>
  <div class="container">
    <header class="jumbotron">
      Буков Александр
      <img src="../assets/ekAyaO0Doz4.jpg">
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: {
        "Name" : "",
        "Students" : [{
          "Id": 0,
          "Name": "",
          "Username":"",
          "Email":"",
        }]
      },
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
