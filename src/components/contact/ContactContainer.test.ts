import { VueWrapper, mount } from '@vue/test-utils';
import ContactContainer from './ContactContainer.vue';
import { Contact } from '@/components/types';

describe('Contact component', () => {
  const mockInfo: Contact = {
    name: 'Test',
    lastname: 'Tester',
    message: 'This is just a test',
    currentRole: 'Artist',
    areaSelected: 'Programmer',
    experience: false,
    areasOfExperience: [],
  };
  let component: VueWrapper<any, any>;

  beforeEach(() => {
    component = mount(ContactContainer);
  });

  test('Renders correctly', () => {
    expect(ContactContainer).toBeTruthy();
    expect(component.find('#contact-form')).toBeDefined();
    expect(component.find('#name')).toBeDefined();
    expect(component.find('#lastname')).toBeDefined();
    expect(component.find('#currentRole')).toBeDefined();
    expect(component.find('#area')).toBeDefined();
    expect(component.find('#experience')).toBeDefined();
    expect(component.find('#newTag')).toBeDefined();
    expect(component.find('#message')).toBeDefined();
    expect(component.find('#submit')).toBeDefined();
  });

  test('Submit button is disbaled unless required fields are valid', async () => {
    component.find('#name').setValue(mockInfo.name);

    expect(component.find('#submit').attributes().disabled).toBe('');

    component.find('#lastname').setValue(mockInfo.lastname);
    component.find('#currentRole').setValue(mockInfo.currentRole);
    component.find('#area').setValue(mockInfo.areaSelected);
    component.find('#message').setValue(mockInfo.message);

    await component.vm.$nextTick();

    expect(component.find('#submit').attributes().disabled).toBeUndefined();
    expect(component.vm.contactInfo).toMatchObject(mockInfo);
  });

  test('Opens snackbar when submit button is clicked and is valid', async () => {
    const loadSpy = vi.spyOn(component.vm, 'loadMessage');

    component.find('#submit').trigger('click');
    expect(loadSpy).not.toHaveBeenCalled();

    component.find('#name').setValue(mockInfo.name);
    component.find('#lastname').setValue(mockInfo.lastname);
    component.find('#currentRole').setValue(mockInfo.currentRole);
    component.find('#area').setValue(mockInfo.areaSelected);
    component.find('#message').setValue(mockInfo.message);

    await component.vm.$nextTick();
    await component.find('#submit').trigger('click');

    expect(loadSpy).toHaveBeenCalled();
  });
});
