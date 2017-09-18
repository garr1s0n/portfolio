<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="less">
@playfair: 'Playfair Display', serif;
@raleway: 'Raleway', sans-serif;

html {
  font-family: @raleway;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--white {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #fff;
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
  transition: all .35s ease-in;
}
.button--white:not(:first-child) {
  margin-left: 15px;
}

.button--white:hover {
  color: rgba(125,185,232,1);
  background-color: #fff;
}

@media screen and (max-width: 30em) {
  .button--white {
    font-size: .825em;
    padding: .25em 1em;
  }
}
</style>
