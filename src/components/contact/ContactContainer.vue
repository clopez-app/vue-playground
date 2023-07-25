<template>
  <form id="contact-form">
    <div class="input-group">
      <label for="name">Name</label>
      <input id="name" v-model="contactInfo.name" autocomplete="false" />
    </div>
    <div class="input-group">
      <label for="lastname">Lastname</label>
      <input
        id="lastname"
        v-model="contactInfo.lastname"
        autocomplete="false"
      />
    </div>
    <div class="input-group">
      <label for="currentRole">Current Role</label>
      <input
        id="currentRole"
        v-model="contactInfo.currentRole"
        autocomplete="false"
      />
    </div>
    <div class="input-group">
      <div>
        Choose which area do you want to learn: {{ contactInfo.areaSelected }}
      </div>
      <select id="area" v-model="contactInfo.areaSelected">
        <option disabled value="">Please select one</option>
        <option
          v-for="(area, index) in areasOfLearning"
          :key="index"
          :value="area"
        >
          {{ area }}
        </option>
      </select>
    </div>
    <div class="input-group">
      <label for="experience"
        >Do you have previous experience with this area?<input
          id="experience"
          v-model="contactInfo.experience"
          autocomplete="false"
          type="checkbox"
      /></label>
    </div>
    <div v-if="contactInfo.experience" class="input-group">
      <label>Please write areas or tools that you have experience with?</label>
      <div class="new-tag-section">
        <button @click="addAreaOfExperience($event)">+</button
        ><input id="newTag" v-model="newTagInput" autocomplete="false" />
      </div>
      <div class="curren-tags">
        <span
          v-for="(tag, index) in contactInfo.areasOfExperience"
          :key="index"
          class="tag-element"
          >{{
            index === contactInfo.areasOfExperience.length - 1
              ? tag.value
              : tag.value + ', '
          }}</span
        >
      </div>
    </div>
    <div class="input-group">
      <label for="message"
        >Let us know the reason of your interest in your application:</label
      >
      <textarea
        id="message"
        v-model="contactInfo.message"
        autocomplete="false"
      ></textarea>
    </div>

    <div class="submit-button">
      <input id="submit" type="submit" />
    </div>
  </form>

  <div class="preview">
    <div>
      {{ contactInfo }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { InputDynamicElement } from '../types';

interface contact {
  name: string;
  lastname: string;
  message: string;
  currentRole: string;
  areaSelected: string;
  experience: boolean;
  areasOfExperience: InputDynamicElement[];
}

const areasOfLearning = [
  'Programmer',
  'Designer',
  'Artist',
  'Sound designer/composer',
  'Project Manager',
  'Writter',
  'Producer',
  'Quality assurance/tester',
];

const contactInfo: Ref<contact> = ref({
  name: '',
  lastname: '',
  message: '',
  currentRole: '',
  areaSelected: '',
  experience: false,
  areasOfExperience: [],
});

let id = 1;

const newTagInput = ref('');

function addAreaOfExperience(event: Event): void {
  event.preventDefault();
  if (newTagInput.value != '') {
    contactInfo.value.areasOfExperience.push({
      id,
      value: newTagInput.value,
      creationDate: new Date(),
      lastUpdate: new Date(),
    });
    id++;
    newTagInput.value = '';
  }
}
</script>

<style scoped>
form {
  max-width: 600px;
  padding-top: 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
  column-gap: 24px;
}

.input-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  text-align: left;
  justify-content: center;
}

.preview {
  padding-top: 8px;
}

.submit-button {
  grid-column-start: 1;
  grid-column-end: 3;
  display: inline-grid;
  justify-content: center;
}
</style>
