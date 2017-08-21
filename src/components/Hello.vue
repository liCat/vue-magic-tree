<template>
  <div class="hello">
    <h2>Vue magic tree</h2>
    <vue-magic-tree :tree="tree"></vue-magic-tree>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      tree:[
        {
          type: 'branch',
          operationSign: "and",
          leaf:[
            {
              type: "leaf",
              key: "a",
              judgeSign: "大于",
              value: 333
            },
            {
              type: "leaf",
              key: "b",
              judgeSign: "小于",
              value: 444
            },
            {
              type: "leaf",
              key: "c",
              judgeSign: "等于",
              value: 555
            },
            {
              type: "branch",
              operationSign: "or",
              leaf: [
                {
                  type: "leaf",
                  key: "d",
                  judgeSign: "等于",
                  value: 532
                },
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
