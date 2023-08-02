import { Contact } from '@/components/types';
import { defineStore } from 'pinia';
import { Ref, computed, ref } from 'vue';

export const useAppStore = defineStore('main', () => {
  const contacts: Ref<Contact[]> = ref([]);
  const contactNames = computed(() => contacts.value.map((info) => info.name));
  const lastIndex = computed(() =>
    contacts.value.length
      ? Math.max(...contacts.value.map((info) => info.id)) + 1
      : 1
  );
  function addContact(info: Contact) {
    contacts.value.push(info);
  }
  function deleteContact(id: number) {
    const index = contacts.value.findIndex((contact) => contact.id === id);
    contacts.value.splice(index, 1);
  }

  return { contacts, contactNames, lastIndex, addContact, deleteContact };
});
