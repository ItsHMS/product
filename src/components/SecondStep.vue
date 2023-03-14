<template>
    <div>
        <section id="colorSelectionOne">
            <div class="container">
                <div class="row colorRow">
                    <div class="col-md-5 d-flex align-items-center bgTwo pe-md-4">
                        <div class="row row-cols-md-2 row-cols-1 g-5">
                            <div class="col">
                                <img :src="productImages?.[0] || 'images/card-1.png'" alt="card" class="img-fluid">
                            </div>

                            <div class="col">
                                <img :src="productImages?.[1] || 'images/card-2.png'" alt="card" class="img-fluid">
                            </div>

                            <div class="col">
                                <img :src="productImages?.[2] || 'images/card-3.png'" alt="card" class="img-fluid">
                            </div>

                            <div class="col">
                                <img :src="productImages?.[3] || 'images/card-4.png'" alt="card" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">

                        <div class="colorSelectionBoxCtrl">

                            <div class="singlePartOfColor">
                                <h3 class="colorTitle">Select Color</h3>

                                <div class="d-flex align-items-center justify-content-between" id="colorBox">
                                    <div class="singleColor">
                                        <input type="checkbox" value="red" class="btn-check" id="color-1" autocomplete="off"
                                            name="color" v-model="color">
                                        <label class="btn btn-outline-primary" for="color-1">Red</label>
                                    </div>

                                    <div class="singleColor">
                                        <input type="checkbox" value="blue" class="btn-check" id="color-2"
                                            autocomplete="off" name="color" v-model="color">
                                        <label class="btn btn-outline-primary" for="color-2">Blue</label>
                                    </div>

                                    <div class="singleColor">
                                        <input type="checkbox" value="black" class="btn-check" id="color-3"
                                            autocomplete="off" name="color" v-model="color">
                                        <label class="btn btn-outline-primary" for="color-3">Black</label>
                                    </div>

                                    <div class="singleColor">
                                        <input type="checkbox" value="orange" class="btn-check" id="color-4"
                                            autocomplete="off" name="color" v-model="color">
                                        <label class="btn btn-outline-primary" for="color-4">Orange</label>
                                    </div>

                                    <!-- <div class="singleColor">
                                    <input type="checkbox" class="btn-check" id="color-5" autocomplete="off" name="color">
                                    <label class="btn btn-outline-primary" for="color-5">Custom</label>
                                </div> -->
                                </div>

                                <div class="hiddenInputField">
                                    <input v-model="customColor" type="text" name="" id="selectCustomColor"
                                        class="form-control hiddenInput" placeholder="Type Custom Color and press enter">
                                </div>


                            </div>

                            <div class="singlePartOfColor">
                                <h3 class="colorTitle">Select Material</h3>

                                <!-- <select class="form-select" aria-label="Default select example">
                                <option selected>Material</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> -->

                                <div class="d-flex align-items-center justify-content-between" id="materialBox">
                                    <div class="singleColor">
                                        <input type="checkbox" value="plastic" class="btn-check" id="color-7"
                                            autocomplete="off" name="color" v-model="material">
                                        <label class="btn btn-outline-primary" for="color-7">Plastic</label>
                                    </div>

                                    <div class="singleColor">
                                        <input type="checkbox" value="aluminium" class="btn-check" id="color-8"
                                            autocomplete="off" name="color" v-model="material">
                                        <label class="btn btn-outline-primary" for="color-8">Aluminum</label>
                                    </div>

                                    <div class="singleColor">
                                        <input type="checkbox" value="steel" class="btn-check" id="color-9"
                                            autocomplete="off" name="color" v-model="material">
                                        <label class="btn btn-outline-primary" for="color-9">Steel</label>
                                    </div>

                                    <div class="singleColor">
                                        <input type="checkbox" value="leather" class="btn-check" id="color-10"
                                            autocomplete="off" name="color" v-model="material">
                                        <label class="btn btn-outline-primary" for="color-10">Leather</label>
                                    </div>

                                </div>
                                <div class="hiddenInputField">
                                    <input v-model="customMaterial" type="text" name="" id="SelectMaterial"
                                        class="form-control hiddenInput" placeholder="Type your material ">
                                </div>


                            </div>

                            <div class="singlePartOfColor">
                                <h3 class="colorTitle">Select Inspiration</h3>

                                <div class="d-flex align-items-center justify-content-between" id="InspirationBox">
                                    <div class="singleColor">
                                        <input type="checkbox" value="apple" class="btn-check" id="color-11"
                                            autocomplete="off" name="color" v-model="inspiration">
                                        <label class="btn btn-outline-primary" for="color-11">Apple</label>
                                    </div>

                                    <div class="singleColor">
                                        <input type="checkbox" value="samsung" class="btn-check" id="color-12"
                                            autocomplete="off" name="color" v-model="inspiration">
                                        <label class="btn btn-outline-primary" for="color-12">Samsung</label>
                                    </div>

                                    <div class="singleColor">
                                        <input type="checkbox" value="nike" class="btn-check" id="color-13"
                                            autocomplete="off" name="color" v-model="inspiration">
                                        <label class="btn btn-outline-primary" for="color-13">Nike</label>
                                    </div>

                                    <div class="singleColor">
                                        <input type="checkbox" value="leather" class="btn-check" id="color-14"
                                            autocomplete="off" name="color" v-model="inspiration">
                                        <label class="btn btn-outline-primary" for="color-14">Leather</label>
                                    </div>

                                </div>

                                <div class="hiddenInputField">
                                    <input v-model="customInspiration" type="text" name="" id="SelectInspiration"
                                        class="form-control hiddenInput" placeholder="Type your inspiration">
                                </div>

                            </div>

                            <div class="singlePartOfColor text-primary d-flex justify-content-center pt-4">
                                <button @click.prevent="getProduct('image')" class="btn genBtn">
                                    <span v-if="regenerateLoader" style="width: 2rem; height: 2rem;" class="spinner-border spinner-border-sm" role="status"
                                        aria-hidden="true"></span>
                                    <span v-else>Regenerate</span>

                                </button>
                                <a @click="getProduct('text')" class="btn active genBtn">
                                    <span v-if="nextLoader" style="width: 2rem; height: 2rem;" class="spinner-border spinner-border-sm" role="status"
                                        aria-hidden="true"></span>
                                    <span v-else>Next</span>

                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useProductStore } from './../stores/product'; import { storeToRefs } from "pinia";
const store = useProductStore();
const { productImages, color, inspiration, material, secondStep } = storeToRefs(store);
const customColor = ref('')
const customMaterial = ref('')
const customInspiration = ref('')
const regenerateLoader = ref(false)
const nextLoader = ref(false)
console.log(productImages);
const getProduct = async (type) => {
    try {
        if (type == "image") {
            regenerateLoader.value = true
        }
        else {
            nextLoader.value = true
        }
        console.log(customColor.value);
        console.log(customMaterial.value);
        console.log(customInspiration.value);
        if (customColor.value) {
            color.value.push(customColor.value)
        }
        if (customMaterial.value) {
            material.value.push(customMaterial.value)
        }
        if (customMaterial.value) {
            inspiration.value.push(customInspiration.value)
        }
        await store.getProduct(type)
    } catch (error) {
        console.log(error);
    } finally {
        regenerateLoader.value = false
        nextLoader.value = false
    }
}
</script>