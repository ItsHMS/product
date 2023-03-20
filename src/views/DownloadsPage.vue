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

                        <div class="card" v-for="(pdf, i) in pdfsArray" :key="i">
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
                                        <a :href="'http://185.28.23.2:1337' + pdf.url" class="btn downloadBtn">Download
                                            Pdf</a>
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
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
const Router = useRouter()
const pdfsArray = ref([])
onMounted(async () => {
    try {
        if (!localStorage.getItem("user")) {
            Router.push({ name: "home" })
        }
        if (localStorage.getItem('pdfID')) {
            const res = await axios.get(`http://185.28.23.2:1337/api/custom-api/get-all-pdfs?pdfID=${localStorage.getItem('pdfID')}`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt"))}`
                }
            })
            console.log(res);
            pdfsArray.value = res.data.pdfsArray
            localStorage.removeItem('pdfID')
        }
        else {
            const res = await axios.get("http://185.28.23.2:1337/api/custom-api/get-all-pdfs", {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt"))}`
                }
            })
            console.log(res);
            pdfsArray.value = res.data.pdfsArray
        }
    } catch (error) {
        console.log(error);
    }

})
</script>