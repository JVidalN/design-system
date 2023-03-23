const data: any = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' }
];

const group: any = [
  {
    'Swedish Cars': [
      { label: 'Volvo', value: 'volvo' },
      { label: 'Saab', value: 'saab' },
    ]
  },
  { 
    'German Cars': [
      { label: 'Mercedes', value: 'mercedes' },
      { label: 'Audi', value: 'audi' }
    ]
  }
];

export const mock = {
    Data: data,
    Group: group,
}
