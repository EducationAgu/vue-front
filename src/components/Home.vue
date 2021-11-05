<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Добрый день, {{ content.Name }}</h3>
      <ul id="example-1">
        <li v-for="item in content.Students" :key="item">
          Студент номер {{ item.Id }} - {{item.Name}}
        </li>
      </ul>
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
