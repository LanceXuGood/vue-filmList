import {
  mount
} from '@vue/test-utils';
import Layout from '@/components/Layout.vue';

describe('Layout.vue', () => {
  it('Layout', () => {
    const wrapper = mount(Layout, {
      stubs: ['router-link', 'router-view'],
    });

    expect(wrapper.findAll('.dy-content .dy-nav').exists()).toBe(true)
  });
});
