<template lang="ejs">
  <div>
    <h1>Hello, </h1>
    <button @click="foo()">Click me</button>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {}
  },
  methods: {
    foo: function() {
      console.log(this.session)
    }
  }
}
</script>
