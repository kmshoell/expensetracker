<template>
  <div class="addTransaction">
    <span>Type:
      <select v-model="transaction.type" required>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
    </span>
    <span>Description:
      <input v-model="transaction.description" required/>
    </span>
    <span>Amount:
      <input v-model="transaction.amount" type="number" min=0 step=".01" name="amount" id="amount" required />
    </span>
    <font-awesome-icon
      icon="plus-square"
      @click="addItem()"
      :class="[ transaction.type && transaction.description && transaction.amount ? 'active' : 'inactive', 'plus' ]"
    />
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      transaction: {
        type: "",
        description: "",
        amount: ""
      }
    }
  },
  methods: {
    addItem() {
      if ( this.transaction.type == '' || this.transaction.amount == "" || this.transaction.description == '') {
        return;
      }

      axios.post('api/items', this.transaction)
        .then(response => {
          if (response.status == 201) {
            this.transaction.type = "";
            this.transaction.description = "";
            this.transaction.amount = "";
            this.$emit('reloadTransactions');
          }
        })
        .catch(error => console.log(error))
    }
  }
}

</script>

<style scoped>
  .addTransaction {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    margin-left: 10px;
    margin-right: 10px;
  }

  input {
    padding: 5px;
  }

  select {
    padding: 5px;

  }

  .plus {
    font-size: 30px;
  }

  .active {
    color: green;
  }

  .inactive {
    color: #999999;
  }
</style>
