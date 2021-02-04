<template>
  <div>
    <div class="transactionHeader" >
    <div class="property"> Date </div>
    <div class="property"> Type </div>
    <div class="property"> Description </div>
    <div class="property"> Amount </div>
  </div>
  <div v-for="(transaction, idx) in transactions" :key="idx">
    <single-transaction
      :transaction="transaction"
      class="transaction"
      v-on:transactionchanged="$emit('reloadTransactions')"
    />
  </div>
  </div>
</template>

<script>
import singleTransaction from "./singleTransaction"
import SingleTransaction from './singleTransaction.vue'

export default {
  props: ['transactions'],
  components: {
    singleTransaction
  }
}
</script>

<style scoped>
  .transaction {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
  }

  .transactionHeader {
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
  }
  .property {
    flex: 1;
    padding: 10px;

  }
</style>
