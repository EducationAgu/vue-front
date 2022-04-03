<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <div v-if="currentUser.Username">
          <p>Пользователь <strong>{{currentUser.Username}}</strong></p>

          <img src="https://picsum.photos/200">
        </div >
        <div v-else>
          <p>
            <strong>Token:</strong>
            {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
          </p>
          <p>
            <strong>Refresh token:</strong>
            {{currentUser.refreshToken.substring(0, 20)}} ... {{currentUser.refreshToken.substr(currentUser.refreshToken.length - 20)}}
          </p>
        </div>

      </h3>
    </header>

  </div>
</template>

<script>

export default {
  name: 'Profile',
  computed: {
    currentUser() {
      if (this.$route.params.Username == null) {
        return this.$store.state.auth.user;
      }
      const obj = {Username: this.$route.params.Username}
      console.log(obj)
      return obj
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>
