<template>
  <div class="singleTransaction" >
    <div class="property"> {{ transaction.created_at }} </div>
    <div class="property"> {{ transaction.type }} </div>
    <div class="property"> {{ transaction.description }} </div>
    <div class="property amount">
      <div>
        ${{ transaction.amount }}
      </div>
      <div>
        <button @click="editTransaction()" class="edit">
          <font-awesome-icon icon="edit" />
        </button>
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
