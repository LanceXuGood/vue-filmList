import {
  mount
} from '@vue/test-utils';
import Layout from '@/components/layout.vue';

describe('layout.vue', () => {
  it('Layout', () => {
    const wrapper = mount(Layout, {
      stubs: ['router-link', 'router-view'],
    });

    expect(wrapper.findAll('.dy-content .dy-nav').exists()).toBe(true)
  });
});
