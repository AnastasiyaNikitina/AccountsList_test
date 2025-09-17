<script setup lang="ts">
import { useListFormsStore } from "@/stores/listFormsStore.ts"
import {storeToRefs} from "pinia";
import Record from "@/components/Record.vue";

const listFormsStore = useListFormsStore();
const { list } = storeToRefs(listFormsStore);

</script>

<template>
  <div class="header">
    <label>Метки</label>
    <label>Тип записи</label>
    <label>Логин</label>
    <label>Пароль</label>
  </div>
  <form>
    <Record v-for="(item, index) in list"
            :item="item"
            :key="index"
            :index="index"
    />
  </form>
</template>

<style scoped>
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 30px;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
  }
</style>
