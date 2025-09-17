import {defineStore} from "pinia";
import type {NameFieldType, RecordType} from "@/types.ts";

export const useListFormsStore = defineStore('ListFormsStore', {
    state: () => ({
        /** @type { Array<RecordType> } */
        list: [{
            id: 0,
            mark: [{text: 'XXX'}, {text: 'MMMMMMM'}, {text: 'ttrzzg'}],
            type: 'local',
            login: 'login 1',
            password: 'password 1'
        }, {
            id: 1,
            mark: [{text: 'mbnmb'}, {text: 'ytrret'}, {text: 'wrerwe'}],
            type: 'local',
            login: 'login 2',
            password: 'password 2'
        }, {
            id: 2,
            mark: [{text: 'значение'}, {text: 'значение 2'}],
            type: 'LDAP',
            login: 'login 3',
            password: 'password 3'
        }],
        nextId: 3,
    }),
    getters: {
        getAllList(state) {
            return state.list;
        }
    },
    actions: {
        addElem() {
            this.list.push({id: this.nextId++, mark: [], type: '', login: '', password: ''});
        },
        changeElem(newValue: string, id: number, nameField: NameFieldType) {
            const index = this.list.findIndex((item) => item.id === id);

            if (index !== -1) {
                if (nameField === 'mark') {
                    let arr = newValue.split(';');
                    console.log('arr', arr);
                    let result = arr.map(item => {
                        return {text: item};
                    });
                    console.log('result', result);

                    this.list[index][nameField] = result;
                } else {
                    this.list[index][nameField] = newValue;
                }
            }
        },
        deleteElem(id: number) {
            const index = this.list.findIndex((item) => item.id === id);
            this.list.splice(index, 1);
        }
    }
})