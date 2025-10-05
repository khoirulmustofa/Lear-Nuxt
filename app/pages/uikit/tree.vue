<script setup>
import { onMounted, ref } from 'vue'
import { NodeService } from '~/service/NodeService.js'

const treeValue = ref(null)
const selectedTreeValue = ref(null)
const treeTableValue = ref(null)
const selectedTreeTableValue = ref(null)

onMounted(() => {
  NodeService.getTreeNodes().then((data) => (treeValue.value = data))
  NodeService.getTreeTableNodes().then((data) => (treeTableValue.value = data))
})
</script>

<template>
  <div>
    <div class="card">
      <div class="font-semibold text-xl">Tree</div>
      <Tree
        v-model:selection-keys="selectedTreeValue"
        :value="treeValue"
        selection-mode="checkbox"
      ></Tree>
    </div>

    <div class="card">
      <div class="font-semibold text-xl mb-4">TreeTable</div>
      <TreeTable
        v-model:selection-keys="selectedTreeTableValue"
        :value="treeTableValue"
        selection-mode="checkbox"
      >
        <Column field="name" header="Name" :expander="true"></Column>
        <Column field="size" header="Size"></Column>
        <Column field="type" header="Type"></Column>
      </TreeTable>
    </div>
  </div>
</template>
