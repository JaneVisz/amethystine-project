<template>
  <nav class="navbar">
    <div class="container-navBar">
      <a href="/#" class="navbar-home">HOME</a>
      <div class="navbar-rightPart">
        <ul class="navbar-lst">
          <li class="nav-item">
            <a href="/#/login" class="nav-link">LOGIN</a>
          </li>
          <li class="nav-item">
            <a href="/#/register" class="nav-link">SING UP</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script scoped>
export default {
  name: "NavBar",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&family=Roboto:ital,wght@1,100;1,300&family=Yellowtail&display=swap");

.container-navBar {
  font-weight: bold;
  font-family: "M PLUS Rounded 1c", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10%;
  border-radius: 5px;
}

.navbar-rightPart li {
  display: inline-block;
  padding: 0px 20px;
}

.nav-item {
  transition: all 0.5s ease 0s;
}

a:hover {
  color: #97b1a6;
}
a {
  color: black;
}
</style>
