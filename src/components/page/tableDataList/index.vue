<template>
  <sortable :columns="columns" :table-data="tableData" />

</template>
<script>
import sortable from '@comps/ui/widgets/sortable';
import { columns } from './tableConfig';
export default {
  name: 'Index',
  components: {
    sortable,
  },
  data() {
    return {
      columns: columns,
      tableData: []
    };
  },
  mounted() {
  },
};
</script>

<style lang="less">
</style>
