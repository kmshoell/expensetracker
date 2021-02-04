
<template>
  <div class="transactionContainer">
    <div class="heading">
      <h1 id="title">Expense Tracker</h1>
      <h2 id="balance">Balance: {{this.balance}}</h2>
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
      transactions: [],
      balance: ""
    }
  },
  methods: {
    getTransactions () {
      axios.get('api/items')
      .then( response => {
        this.transactions = response.data
        this.balance = this.transactions.reduce((total, transaction) => {
          let amount = parseInt(transaction.amount)
          if(transaction.type == 'expense') return total -= amount;
          else if (transaction.type == 'income') return total += amount
        }, 0)
      })
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
    padding: 10px;
  }

  #title {
    text-align: center;
    color: steelblue;
  }

  #balance {
    text-align: center;
    color: steelblue;
  }
</style>

