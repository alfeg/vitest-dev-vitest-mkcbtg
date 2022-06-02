import { assert, describe, expect, it } from 'vitest';
import Hello from '../Hello.vue';
import { mount } from '@vue/test-utils';

export default function suite() {
  const i = Math.random();
  describe.concurrent('suite name ' + i, () => {
    for (let a = 0; a < 100; a++) {
      it.concurrent('hello ' + a, () => {
        const wrapper = mount(Hello, {
          props: {
            name: 'Hello',
          },
        });

        expect(wrapper.text()).toBe('Hello');
      });
    }
  });
}
