import faker from 'faker';

function fakeData(locale = 'fi', amount = 20) {
  faker.locale = locale;
  return Array.from({ length: amount }, () => ({
    id: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('+3584########'),
  }));
}

export default fakeData;
