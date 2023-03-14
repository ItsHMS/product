<template>
  <div class="min-vh-100" id="firstPage">
    <section id="progressBar">
      <div class="container">
        <ul class="list-unstyled">
          <li class="active">
            <span>1</span>
            <p>Description</p>
          </li>

          <li :class="step==2||step==3?'active':'' ">
            <span>2</span>
            <p>Description</p>
          </li>

          <li :class="step==3?'active':'' ">
            <span>3</span>
            <p>Build</p>
          </li>

         
        </ul>
      </div>
    </section>
    <div>
      <FirstStep v-if="step==1"></FirstStep>
      <SecondStep v-if="step==2"></SecondStep>
      <ThirdStep v-if="step==3"></ThirdStep>
    </div>
  </div>
</template>
<script setup>
import FirstStep from '../components/FirstStep.vue';
import SecondStep from '../components/SecondStep.vue';
import ThirdStep from '../components/ThirdStep.vue';
import { useProductStore } from '../stores/product'; import { storeToRefs } from "pinia";
const store = useProductStore();
const { step } = storeToRefs(store);
console.log(step.value);
</script>
<style></style>
