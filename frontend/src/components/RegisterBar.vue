<template>
  <div class="registration">
    <form class="container" @submit.prevent="handleSubmit">
      <h1>Player registration</h1>
      <h3>Required</h3>
      <div id="inputsSpace">
        <input
          type="text"
          placeholder="USERNAME (can not be purely numeric)"
          id="username"
          v-model="username"
        />
      </div>

      <div v-if="error_username" color="red" class="invalid-feedback">
        {{ error_username }}
      </div>

      <div id="inputsSpace">
        <input
          type="text"
          placeholder="PASSWORD (8+ characters)"
          id="password"
          v-model="password1"
        />
      </div>

      <div id="inputsSpace">
        <input
          type="text"
          placeholder="PASSWORD VALIDATION"
          id="password-validation"
          v-model="password2"
        />
      </div>

      <div v-if="error_password2" color="red" class="invalid-feedback">
        {{ error_password2 }}
      </div>

      <h3>Optional</h3>
      <div id="inputsSpace">
        <input
          id="kingdomName"
          type="text"
          placeholder="KINGDOM NAME (optional)"
          v-model="kingdomname"
        />
      </div>

      <input id="buttonNext" type="submit" value="NEXT" />
    </form>
  </div>
</template>

<script scoped>
import axios from "axios";

export default {
  name: "LoginBar",
  data() {
    return {
      username: "",
      password1: "",
      kingdomname: "",
      error_username: "",
      error_password2: "",
      password2: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("player/registration/", {
          username: this.username,
          password1: this.password1,
          password2: this.password2,
          error_username: this.error_username,
          error_password2: this.error_password2,
          kingdomname: this.kingdomname,
        });
        console.log(response);
        console.log(this.repeatpassword);

        this.$router.push("/login");
      } catch (e) {
        console.log(e.response.data);

        if (
          e.response.data["username"] == "This field cannot be purely numeric"
        ) {
          console.log(e.response.data);
          this.error_username = e.response.data["username"];
        }

        if (Array.isArray(e.response.data["username"])) {
          this.error_username = e.response.data["username"][0];
        }

        if (Array.isArray(e.response.data["password2"])) {
          this.error_password2 = e.response.data["password2"][0];
        }
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 40%;
  margin: 0 auto;
  border-radius: 0px;
  background: #6e2594;
  border: 5px solid #57e2e5;
  border-radius: 10px;
}

input {
  /* color: white; */
  display: block;
  margin: 40px auto;
  width: 300px;
  height: 35px;
  padding-left: 8px;
  border: 4px solid #57e2e5;
  border-radius: 5px;
  background: #e7e7e7;
}

::placeholder {
  color: #6e2594;
  font-family: "M PLUS Rounded 1c", sans-serif;
}

h1,
h3 {
  color: yellow;
  text-align: center;
  font-family: "M PLUS Rounded 1c", sans-serif;
}

#buttonNext {
  background: yellow;
  border-radius: 5px;
  width: 60px;
  border: none;
  color: #7209b7;
  font-weight: bold;
}

input:focus {
  outline: none !important;
  border-color: #57e2e5;
  box-shadow: 0 0 10px #57e2e5;
  color: black;
}

.invalid-feedback {
  font-family: "M PLUS Rounded 1c", sans-serif;
  color: red;
  text-align: center;
  margin-top: -30px;
  font-weight: bold;
}
</style>
