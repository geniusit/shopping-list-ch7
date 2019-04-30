<template id="items-template">
  <ul>
    <item-component :key="item.title" v-for="item in items" :item="item" :id="id"></item-component>
  </ul>
</template>

<script>
import ItemComponent from "./ItemComponent";

export default {
  props: ['items', 'id'],
  components: {
    ItemComponent
  }
};
</script>