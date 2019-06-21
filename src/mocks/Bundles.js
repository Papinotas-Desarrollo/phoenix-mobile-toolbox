import Faker from 'faker';

export const Bundles = times => {
  const arr = [];
  for (let i = 0; i < times; i++) {
    const item = {
      first_account_receiver: {
        first_name: Faker.name.firstName(),
        last_name: Faker.name.lastName(),
        __typename: 'AccountType',
      },
      id: Faker.random.number(100),
      body: `${Faker.random.words()} https://ppnt.cl/r9Zng`,
      status: 0,
      scheduled: false,
      to_be_sent_at: Faker.date.between(`01 January ${new Date().getFullYear()}`, `31 December ${new Date().getFullYear()}`).toISOString(), // '2018-11-28T13:20:35Z',
      email_copy: false,
      total_messages: 1,
      not_sent_messages: 0,
      sending_messages: 0,
      sent_messages: 1,
      error_messages: 1,
      created_at: Faker.date.between(`01 January ${new Date().getFullYear()}`, `31 December ${new Date().getFullYear()}`).toISOString(),
      account: null,
      user: {
        id: Faker.random.number(100),
        first_name: Faker.name.firstName(),
        last_name: Faker.name.lastName(),
        __typename: 'UserType',
      },
      __typename: 'BundleType',
    };
    arr.push(item);
  }
  return arr;
};
