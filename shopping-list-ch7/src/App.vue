<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :key="list.title" :class= "index===1 ? 'active' : ''" v-for="(list, index) in shoppinglists" role="presentation">
        <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div  :key="list.title" :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" class="tab-pane" role="tabpanel" :id="list.id">
        <shopping-list :id="list.id" :title="list.title" :items="list.items"></shopping-list>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList"
import ShoppingListTitleComponent from "./components/shopping-list/ShoppingListTitleComponent"
import store from './vuex/store'
import { mapGetters, mapActions } from 'vuex'
import _ from 'underscore'

export default {
  store,
  components: {
    ShoppingList,
    ShoppingListTitleComponent
  },
  computed: mapGetters({
    shoppinglists: 'getLists'
  }),
  methods: _.extend({}, mapActions(['populateShoppingLists', 'createShoppingList']), {
    addShoppingList() {
      let list = {
        title: 'New Shopping List',
        items: []
      }
      this.createShoppingList(list)
    }
  }),
  mounted () {
    this.populateShoppingLists()
  }
};
</script>

<style>
.container {
  width: 40%;
  margin: 20px auto 0px auto;
}
</style>