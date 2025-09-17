<script setup lang="ts">
import { useListFormsStore } from "@/stores/listFormsStore.ts"
import ListForms from "@/components/ListForms.vue";
import AskMarkIcon from "@/assets/icons/AskMarkIcon.vue";

const listFormsStore = useListFormsStore();

const handleAdd = () => {
  listFormsStore.addElem();
}

</script>

<template>
  <header>
    <div class="header">
      <h1>Учетные записи</h1>
      <button class="addBtn" @click="handleAdd">+</button>
    </div>
    <div class="tip">
      <p><AskMarkIcon class="icon-ask" /> Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
    </div>
  </header>
  <main>
    <ListForms />
  </main>
</template>

<style scoped>
header {
  padding-bottom: 10px;
}

.header {
  display: flex;
  align-items: center;
}

.addBtn {
  font-size: 20px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid #c3cad9;
  margin-left: 20px;
}

.tip {
  background: #ededed;
}

.icon-ask {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 5px;
}
</style>
