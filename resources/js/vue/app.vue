
<template>
  <div class="transactionContainer">
    <div class="heading">
      <h2 id="title">Expense Tracker</h2>
      <add-transaction-form  v-on:reloadTransactions="getTransactions()" />
    </div>
    <transaction-view
      :transactions="transactions"
      v-on:reloadTransactions="getTransactions()"
    />
  </div>
</template>

<script>
import addTransactionForm from "./addTransactionForm"
import transactionView from "./transactionView"


export default {
  components: {
    addTransactionForm,
    transactionView
  },
  data: function() {
    return {
      transactions: []
    }
  },
  methods: {
    getTransactions () {
      axios.get('api/items')
      .then( response => this.transactions = response.data)
      .catch( error => console.log(error))
    }
  },
  created() {
    this.getTransactions();
  }
}
</script>

<style scoped>
  .transactionContainer {
    width: 750px;
    margin: auto;
  }

  .heading {
    background: #c6c6c6c6;
    padding: 10px;
  }

  #title {
    text-align: center;
  }
</style>

