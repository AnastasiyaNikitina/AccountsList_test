<script setup lang="ts">
import {arrToString} from "@/utils/utils.ts";
import TrashIcon from "@/assets/icons/TrashIcon.vue";
import {useListFormsStore} from "@/stores/listFormsStore.ts";
import {type PropType, ref} from "vue";
import type {NameFieldType, RecordType} from "@/types.ts";

defineProps({
  item: Object as PropType<RecordType>,
  index: Number,
})

const listFormsStore = useListFormsStore();

const listTypes = ref([{title: 'local', value: 'local'}, {title: 'LDAP', value: 'LDAP'}]);

const handleChange = (e: Event, id: number, nameField: NameFieldType) => {
  let value = (e.target as HTMLInputElement).value;
  listFormsStore.changeElem(value, id, nameField);
}

const handleDelete = (id: number) => {
  listFormsStore.deleteElem(id);
}

</script>

<template>
  <div class="row">
    <input
        class="input"
        maxlength="50"
        :value="arrToString(item?.mark ?? [])"
        @blur="handleChange($event, item?.id, 'mark')"
    >
    <select
        :value="item?.type"
        class="selectType"
        :class="{error: item?.type === ''}"
        @change="handleChange($event, item.id, 'type')"
    >
      <option v-for="type in listTypes" v-bind:value="type.value">{{type.title}}</option>
    </select>
    <input
        class="input"
        :class="{fieldWide: item?.type !== 'local', error: item?.login === ''}"
        maxlength="100"
        :value="item?.login"
        @blur="handleChange($event, item?.id, 'login')"
    >
    <input
        v-if="item?.type === 'local'"
        class="input"
        :class="{error: item?.password === ''}"
        maxlength="100"
        :value="item?.password"
        @blur="handleChange($event, item?.id, 'password')"
    >
    <button class='deleteBtn' @click.prevent="handleDelete(item?.id)">
      <TrashIcon class="deleteIcon" />
    </button>
  </div>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 30px;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  padding-bottom: 10px;
}

.fieldWide {
  grid-column-start: 3;
  grid-column-end: 5;
}

.deleteBtn {
  background: transparent;
  border: none;
  outline: none;
}

.deleteIcon {
  width: 15px;
  height: 15px;
}

.error {
  border: 1px solid red;
}
</style>