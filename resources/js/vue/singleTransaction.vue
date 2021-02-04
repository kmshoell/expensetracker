<template>
  <div class="singleTransaction" >
    <div class="property"> {{ transaction.created_at }} </div>
    <div class="property">
      <select v-model="transaction.type" @change="onChange($event, 'type')" required>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
    </div>
    <div class="property">
      <input v-model="transaction.description" @change="onChange($event, 'description')" required/>
    </div>
    <div class="property amount">
      <div>
        <input v-model="transaction.amount" type="number" min=0 step=".01" name="amount" id="amount" @change="onChange($event, 'amount')" required />
      </div>
      <div>
        <button @click="removeTransaction()" class="trashcan">
          <font-awesome-icon icon="trash" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['transaction'],
  methods: {
    onChange(event, prop) {
      if(prop == 'type') this.transaction.type = event.target.value;
      else if (prop == 'description') this.transaction.description = event.target.value;
      else if (prop == 'amount') this.transaction.amount = event.target.value;
      axios.put('api/items/' + this.transaction.id, this.transaction)
      .then( response => {
        if (response.status == 200){
          this.$emit('transactionchanged');
        }
      })
      .catch(error => console.log(error))
    },
    editTransaction() {
      return;
    },

    removeTransaction() {
      axios.delete('api/items/' + this.transaction.id)
      .then( response => {
        if (response.status == 200) {
          this.$emit('transactionchanged');
        }
      })
      .catch(error => console.log(error))

    }
  }
}
</script>

<style scoped>
  .singleTransaction {
    display: flex;
    justify-content: flex-start;
  }
  .property {
    margin: 5px;
    flex: 1;
  }

  select {
    padding: 5px;
    width: 80%;
    text-align: center;
  }

  input {
    padding: 5px;
    width: 80%;
  }

  .amount {
    display: flex;
    justify-content: space-between;
  }

  button {
    margin-left: 5px;
    font-size: 15px;
    background-color: #e6e6e6;
    border: none;
    padding: 3px;
  }

  .trashcan {
    color: red;
  }

  .edit {
    color: green;
  }

</style>
