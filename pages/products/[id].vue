<!-- /products/:id -->

<template>
  <div>
    <!-- <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quod
      cumque ut tenetur nam harum? Asperiores nulla vero perferendis. Velit!
    </p> -->

    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>

    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// fetch the product
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
