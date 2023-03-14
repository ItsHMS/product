<template>
    <div>
        <section id="projectList">
            <div class="container">
                <div class="projectBox">
                    <h3 class="projectList">
                        Project List
                    </h3>

                    <div class="projectCards">

                        <div class="card headerCard">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        <p class="commonText">
                                            Title
                                        </p>
                                    </div>
                                    <div class="col-8">
                                        <p class="commonText">
                                            Description
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" v-for="(pdf,i) in pdfsArray" :key="i">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        <p class="commonText">
                                            {{ JSON.parse(pdf.alternativeText).heading }}
                                        </p>
                                    </div>
                                    <div class="col-5">
                                        <p class="commonText">
                                            {{ JSON.parse(pdf.alternativeText).text }}
                                        </p>
                                    </div>
                                    <div class="col-3 text-end">
                                        <a :href="'https://c141c63a7dfa0b.lhr.life'+pdf.url" class="btn downloadBtn">Download Pdf</a>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
const pdfsArray = ref([])
onMounted(async () => {
    try {
        const res = await axios.get("https://c141c63a7dfa0b.lhr.life/api/upload/files")
        console.log(res);
        pdfsArray.value = res.data
    } catch (error) {
        console.log(error);
    }

})
</script>