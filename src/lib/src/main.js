export default {
  name: 'vueMagicTree',
  props: {
    tree: {
      default: []
    }
  },
  computed: {},
  render(createElement){
    return (<div><pre>{JSON.stringify(this.$props,null,2)}</pre></div>)
  }
};
