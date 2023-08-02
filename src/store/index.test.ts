import { setActivePinia, createPinia } from 'pinia';
import { useAppStore } from '.';
import { mockInfoData } from '@/tests/mocks';

describe('App Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('adds a new contact', () => {
    const mockContact = mockInfoData;
    const appStore = useAppStore();
    expect(appStore.contacts.length).toBe(0);

    appStore.addContact(mockContact);

    expect(appStore.contacts.length).toBe(1);
    expect(appStore.contacts[0]).toEqual(mockContact);
    expect(appStore.contactNames[0]).toMatch(mockContact.name);
  });

  it('removes existing contact', () => {
    const mockContact = mockInfoData;
    const appStore = useAppStore();
    appStore.addContact(mockContact);
    expect(appStore.contacts.length).toBe(1);

    appStore.deleteContact(1);

    expect(appStore.contacts.length).toBe(0);
  });
});
