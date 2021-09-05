<template>
  <el-table
    :data="tableData"
  >
  </el-table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => [
        { id: 1, sortable: true, prop: 'date', label: '日期', width: 180 },
        { id: 2, sortable: true, prop: 'name', label: '姓名', width: 180 },
        { id: 3, sortable: false, prop: 'address', label: '地址', width: '0' }
      ]
    },
    tableData: {
      type: Array,
      default: () => [{
        username: '2016-05-03',
        department: '2016-05-03',
        pageviews_count: '2016-05-03',
        interplay_count: '2016-05-03',
        manual_count: '2016-05-03',
        tools: '2016-05-03'
      }]
    }
  },
  data() {
    return {
      multipleSelection: []
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;

      this.$emit('multipleEvent', this.multipleSelection);
    }
  }
};
</script>

<style lang="less">
  .data-table{
    .table-img{
      width: 100px; height: 100px;
    }
  }
</style>
