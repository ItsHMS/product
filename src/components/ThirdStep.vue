<template>
    <div>
        <section id="downloadForm">
            <div class="container">
                <div class="downloadFormCtrl">
                    <!-- <h3 class="intro">Introduction</h3>

                    <div class="singleInputNote">
                        <textarea name="" id="" cols="30" rows="2" class="form-control"
                            placeholder="write here...."></textarea>
                        <div class="notes">
                            <p class="noteText">Notes</p>
                            <button class="btn arrowBtn">
                                <img src="images/rightArrow.png" alt="rightArrow" class="img-fluid">
                            </button>
                        </div>
                    </div> -->


                    <h3 class="intro">Product Requirements</h3>

                    <div class="singleInputNote">
                        <textarea readonly v-model="productRequirements" name="" id="" cols="30" rows="9"
                            class="form-control" placeholder="write here...."></textarea>
                        <div class="notes">
                            <p class="noteText">Notes</p>
                            <button class="btn arrowBtn">
                                <img src="images/rightArrow.png" alt="rightArrow" class="img-fluid">
                            </button>
                        </div>
                    </div>

                    <div class="text-center">
                        <a @click="pdfMaker" class="downloadBtn btn">
                            <span v-if="loading" style="width: 2rem; height: 2rem;" class="spinner-border spinner-border-sm" role="status"
                                        aria-hidden="true"></span>
                            <span v-else>Download now</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import axios from 'axios';
import jsPDF from 'jspdf';
import { useRouter } from 'vue-router';
import { useProductStore } from './../stores/product';
import { ref } from 'vue';
import { storeToRefs } from "pinia";
const Router = useRouter()
const loading = ref(false)
const store = useProductStore();
const { productRequirements, title } = storeToRefs(store);

const pdfMaker = async () => {
    loading.value = true
    const pdf = new jsPDF();
    pdf.setFontSize(12)
    let text = localStorage.getItem("text")
    let streamingPhoneReqsList = productRequirements.value.split('\n').filter(item => item.trim() !== '').map(item => `• ${item}`).join('\n');
    let productRequirementsText = productRequirements.value.split('\n').slice(1).join('\n');
    console.log({ productRequirementsText });
    console.log(streamingPhoneReqsList);
    pdf.text(streamingPhoneReqsList, 10, 10, { maxWidth: 180, });
    pdf.addPage()
    let images = JSON.parse(localStorage.getItem('images'))
    let img1 = new Image();
    img1.src = images[0];
    pdf.addImage(img1, 'PNG', 10, 10, 100, 100);
    let img2 = new Image();
    img2.src = images[1];
    pdf.addImage(img2, 'PNG', 10, 150, 100, 100)
    pdf.addPage()
    let img3 = new Image();
    img3.src = images[2];
    pdf.addImage(img3, 'PNG', 10, 10, 100, 100);
    let img4 = new Image();
    img4.src = images[3];
    pdf.addImage(img4, 'PNG', 10, 150, 100, 100)
    var temp = pdf.output('blob');
    var data = new FormData();
    data.append("files", temp);
    data.append("fileInfo", JSON.stringify({
        alternativeText: JSON.stringify({
            heading: title.value,
            text: productRequirementsText
        })
    }))
    axios.post("https://c141c63a7dfa0b.lhr.life/api/upload", data)
        .then((response) => {
            const fileId = response.data[0].id
            const meta = JSON.parse(response.data[0].alternativeText)
            console.log(meta);
            console.log(fileId);
            if (localStorage.getItem("user")) {
                Router.push({ name: "pdfs" })
            }
            else{
                Router.push({name:"auth"})
            }
        })
        .catch((error) => {
            console.log(error);
        }).finally(()=>{
            loading.value = false
        })
}
</script>