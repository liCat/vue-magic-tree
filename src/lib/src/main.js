export default {
  name: 'vueMagicTree',
  props: {
    tree: {
      default: []
    },
    logicOperatorList:{
      type: Array,
    },
    operatorList:{
      type: Array,
    },
    propertyList:{
      type: Array
    }
  },
  computed: {},
  render(h){
    let vm =this;
    let tree = ( this.$props.tree instanceof Array) ? [...this.$props.tree] : [{...this.$props.tree}];

    function solveItem(item) {
      let options_arr=[];
      for(let i=0;i<vm.propertyList.length;i++){
        let _item = vm.propertyList[i];
        options_arr.push(<option value="" selected={_item.value==item.propertyCode}>{_item.label}</option>)
      }

      let op_options_arr=[];
      for(let i=0;i<vm.operatorList.length;i++){
        let _item = vm.operatorList[i];
        op_options_arr.push(<option value="" selected={_item.value==item.operatorList}>{_item.label}</option>)
      }

      return (<div>

        <select>
          {options_arr}
        </select>
        <select>
          {op_options_arr}
        </select>
        <input type="text" value={item.value}/>
      </div>)
    }

    function solveCondition(list) {
      let dom_arr = [];
      for (let i = 0; i < list.length; i++) {
        let _item = list[i];
        dom_arr.push(<div>
          {solveItem(_item)}
        </div>)
      }
      return dom_arr
    };

    function solveGroup(group) {
      let dom_arr = [];
      for (let k in group) {
        if (k == "logicalOperation") {
        }
        else if (k == "groups") {
          let __arr = [];
          for (let i = 0; i < group[k].length; i++) {
            __arr.push(solveGroup(group[k][i]))
          }
          dom_arr.push(__arr);
        }
        else if (k == 'conditions') {
          dom_arr.push(solveCondition(group[k]))
        }

      }
      let selectOption=[];
      for(let i=0;i<vm.$props.logicOperatorList.length;i++){
        let item = vm.$props.logicOperatorList[i];
        selectOption.push(<option selected={item.value==group.logicalOperation}>{item.label}</option>)
      }
      return (<div>
        <select>
          {selectOption}
          </select>
        <div style="margin-left: 20px;">{dom_arr}</div>
      </div>);
    }

    function solveList(list) {
      let dom_arr = [];
      for (let i = 0; i < list.length; i++) {
        let item = tree[i];
        if ('logicalOperation' in item) {
          dom_arr.push(solveGroup(item))
        }
        else if (!('logicalOperation' in item) && ('operator' in item)) {
          dom_arr.push(solveItem(item))
        }
      }
      return (<div>{dom_arr}</div>);
    }


    return (<div>{solveList(tree)}</div>)
  }
};
