import { PropType } from 'vue';

interface TestInterface {
  hello: string;
}

const cool = ['one', 'two'];

type Test = TestInterface | Record<string, string> | typeof cool[number];

export const test = {
  test: {
    required: true,
    type: [Object, String] as PropType<Test>,
    default: 'default',
  },
};
