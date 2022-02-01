import { shallowMount } from "@vue/test-utils";
import Message from '@/components/Message.vue';

describe('Message.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Message, {
      propsData: {
        msg: 'Hello'
      }
    })
    expect(wrapper.text()).toContain('Hello');
  })
})
