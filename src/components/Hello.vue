<template>
  <div class="hello">
    <h2>Vue magic tree</h2>
    <vue-magic-tree
      :tree="conditionsData"
      :logic-operator-list="logicOperatorList"
      :operator-list="operatorList"
      :property-list='propertyList'
    ></vue-magic-tree>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        propertyList: [
          {
            label: "pv",
            value: "1",
          },
          {
            label: "uv",
            value: "2",
          },
          {
            label: "啥子",
            value: "3",
          },
        ],
        operatorList: [
          {
            label: "大于",
            value: "GT",
          },
          {
            label: "等于",
            value: "EQ",
          },
          {
            label: "不等于",
            value: "NEQ",
          },
        ],
        logicOperatorList: [
          {
            label: "与",
            value: "and",
          },
          {
            label: "或",
            value: "or",
          }
        ],
        conditionsData: [{
          conditions: [
            {
              id: 1,
              operator: "GT",
              propertyCode: "1",
              value: "true"
            },
            {
              id: 2,
              operator: "GT",
              propertyCode: "2",
              value: "2017-01-01"
            }
          ],
          groups: [
            {
              conditions: [
                {
                  id: 3,
                  operator: "EQ",
                  propertyCode: "3",
                  value: "2017-01-01 12:12:12"
                }
              ],
              groups: [
                {
                  conditions: [
                    {
                      id: 4,
                      operator: "NEQ",
                      propertyCode: "4",
                      value: "1.11"
                    },
                    {
                      id: 24916,
                      operator: "GT",
                      propertyCode: "4",
                      value: "333"
                    }
                  ],
                  groups: [],
                  logicalOperation: "and"
                }
              ],
              logicalOperation: "or"
            }
          ],
          logicalOperation: "or"
        }]
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
