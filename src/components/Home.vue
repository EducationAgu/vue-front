<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="container">
    <header class="jumbotron">

      <img src="https://ic.pics.livejournal.com/sparkling_photo/26091671/602563/602563_original.jpg" width="200" height="200">

      <form @submit.prevent="search">
        <input type="text" id ="sp" v-model="formData.sp" placeholder="Search.." >
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>

      <div v-if="content.Name" >
        <h3>Добрый день, {{ content.Name }}</h3>
      </div>
      <div>
        <input type="checkbox" v-model="filter.favOnly" @click="search">Избранное
      </div>
      <ul id="example-1">
        <li v-for="item in content.Students" :key="item">
            <p>
              Пользователь номер {{ item.Id }} - {{item.Name}}
              <input v-if = "item.isFavorite == true" checked type="checkbox" @click="addToFav(item.uc)">
              <input v-else type="checkbox" @click="addToFav(item.uc)"> Избранное
            </p>

          <img src="https://picsum.photos/200"  @click="openUser(item.uc)">

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
          "uc":"",
          "isFavorite": false,
        }]
      },
      formData: {
        sp: "",
      },
      user: {
        id: 0,
      },
      filter: {
        favOnly: false,
      }
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
  methods: {
    search() {
      UserService.searchContacts({searchP: this.formData.sp},{filter: !this.filter.favOnly}).then(
          (resp) => {
            this.content = resp.data;
          },
          (error) => {
            this.content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      )
    },
    openUser: function (UC) {
      UserService.getUserBoard({userUC: UC}).then(
          (response) => {
            console.log(response.data.Id)
            this.$router.push({name: "profile", params: {
                Id: response.data.Id,
                Username: response.data.Username,
              }})
          }
      )
    },
    addToFav: function (UC) {
      UserService.addToFav({userUC: UC}).then()
    },
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* Style the search field */
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>
