export interface InputDynamicElement {
  id: number;
  value: string;
  creationDate: Date;
  lastUpdate: Date;
}

export interface Contact {
  name: string;
  lastname: string;
  message: string;
  currentRole: string;
  areaSelected: string;
  experience: boolean;
  areasOfExperience: InputDynamicElement[];
}
