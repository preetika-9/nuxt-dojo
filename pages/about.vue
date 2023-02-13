<!-- /about -->
<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      ipsum deserunt aperiam ex quae officia velit, eveniet temporibus ab
      quaerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      ipsum deserunt aperiam ex quae officia velit, eveniet temporibus ab
      quaerat.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/ninja?name=mario", {
//   method: "post",
//   body: { age: 30 },
// });

// const { data } = await useFetch("/api/ninja");

const { data } = await useFetch("/api/currency/AED");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
