export default defineEventHandler(async (event) => {
  //   // handle query params
  //   const { name } = useQuery(event);

  //   //   handle post data
  //   const { age } = await useBody(event);

  //   api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=Rc32PhiaSQTH9aG1ZYOkVfjuAW34cxOaUCr6sgcI"
  );
  return data;

  //   return {
  //     message: `Hello, ${name}! You are ${age} years old`,
  //   };
});
