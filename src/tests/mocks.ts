/// this can be added in the global mocks from Vitest.

import { Contact } from '@/components/types';

export const mockInfoData: Contact = {
  id: 1,
  name: 'Test',
  lastname: 'Tester',
  message: 'This is just a test',
  currentRole: 'Artist',
  areaSelected: 'Programmer',
  experience: false,
  areasOfExperience: [],
};
