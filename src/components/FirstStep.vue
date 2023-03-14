<template>
    <div>
        <section id="bannerOne">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="sectionTitle">Streamlining Product Creation with AI-based Requirements Generation</h2>
                        <p class="sectionText">
                            Discover how AI technology is transforming the way products are designed, helping businesses
                            achieve new levels of efficiency and innovation.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="formInnerContents">
                            <form action="#">

                                <div class="singleInput">
                                    <label for="title">Give us a one or two sentence pitch about your product idea.</label>
                                    <textarea v-model="title" name="" id="" cols="30" rows="2"
                                        placeholder="Write title  here" class="form-control"></textarea>
                                </div>

                                <div class="singleInput singleInputtwo">
                                    <label for="title">Give us more detail on the product. </label>
                                    <textarea v-model="specification" name="" id="" cols="30" rows="5"
                                        placeholder="Write specification here" class="form-control"></textarea>
                                </div>
                                <div class="text-center pt-5">
                                    <a @click.prevent="getProduct" class="NextBtn btn">
                                        <span v-if="loading" class="spinner-border spinner-border-sm" style="width: 2rem; height: 2rem;" role="status"
                                            aria-hidden="true"></span>
                                        <span v-else>Next</span>
                                    </a>

                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useProductStore } from './../stores/product';
import { storeToRefs } from "pinia";
const store = useProductStore();
const loading = ref(false)
const { title, specification } = storeToRefs(store);
const getProduct = async () => {
    try {
        loading.value = true
        await store.getProduct()
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false
    }
}
</script>