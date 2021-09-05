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
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
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
