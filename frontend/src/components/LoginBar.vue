<template>
  <div class="login_cont">
    <form class="container" @submit.prevent="handleSubmit">
      <h1>Login</h1>
      <div id="inputsSpace">
        <input
          type="text"
          placeholder="USERNAME"
          id="username"
          v-model="username"
        />
      </div>

      <div id="inputsSpace">
        <input
          type="text"
          placeholder="PASSWORD"
          id="password"
          v-model="password"
        />
      </div>

      <input id="buttonNext" type="submit" value="LOGIN" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginBar",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("player/login/", {
        username: this.username,
        password: this.password,
      });
      console.log(response);
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
