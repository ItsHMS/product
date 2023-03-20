import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", () => {
  const login = ref(false)
  const productImages = ref([]);
  const step = ref(1);
  const title = ref("");
  const specification = ref("");
  const productRequirements = ref("");
  const color = ref([]);
  const material = ref([]);
  const inspiration = ref([]);
  //   const doubleCount = computed(() => count.value * 2)
  //   function increment() {
  //     count.value++
  //   }
  const getProduct = async (type = "image") => {
    try {
      localStorage.setItem("title",title.value)
      localStorage.setItem("specification",specification.value)
      const response = await axios.post(
        "http://185.28.23.2:1337/api/custom-api/get-product-details",
        {
          type: type,
          title: title.value,
          specification: specification.value,
          color: color.value,
          material: material.value,
          inspiration: inspiration.value,
        }
      );

      console.log(response);

      if (type == "image") {
        productImages.value = []
        response.data.data.forEach((element) => {
          let prefix = "data:image/png;base64,";
          let res = prefix.concat(element.b64_json);
          console.log(res);
          productImages.value.push(res);
        });
        localStorage.setItem("images", JSON.stringify(productImages.value));
        step.value = 2;
      }
      if (type == "text") {
        productRequirements.value = response.data.choices[0].text.trim();
        localStorage.setItem("text", JSON.stringify(productRequirements.value));
        step.value = 3;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    productImages,
    getProduct,
    step,
    title,
    specification,
    material,
    color,
    inspiration,
    productRequirements,
    login
  };
  //   return { count, doubleCount, productImages ,getProduct}
});
