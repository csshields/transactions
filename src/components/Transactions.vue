<template>
  <div>
    <h3>Transactions</h3>

    <table>
      <thead>
        <tr>
          <th>Merchant</th>
          <th>Date</th>
          <th class="cellRight">Amount</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in transactions" :key="data.id">
          <td>{{data.merchant}}</td>
          <td>{{ formatDate(data.date) }}</td>
          <td class="cellRight">
              <span v-if="data.type === 'credit'">+</span> 
              <span v-else>-</span>

              {{ formatAmount(data.amount) }} 
          </td>
          <td :title="data.details">{{data.details}}</td>
        </tr>
      </tbody>
      </table>

  </div>
</template>

<script>

import {mapState} from 'vuex';
import moment from 'moment';

export default {
  computed: {
      ...mapState(['transactions']),
  },
  methods: {
      formatDate(date) {
        return moment(date).format("MM/DD/YYYY")
      },
      formatAmount(amount){
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });

        return formatter.format(amount);
      }
  },
}
</script>

<style scoped lang="scss">
    h3{margin-bottom:.5rem; font-weight: normal;}
    .cellRight{text-align: right;}

    table {
      display: grid;
      border-collapse: collapse;
      min-width: 100%;
      grid-template-columns: 
        minmax(150px, 1fr)
        minmax(150px, 1.67fr)
        minmax(150px, 1.67fr)
        minmax(150px, 3.33fr)

    }

    thead,
    tbody,
    tr {
      display: contents;
    }

    th,
    td {
      padding: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-transform:capitalize;
    }

    th {
      position: sticky;
      top: 0;
      background:var(--primary);
      text-align: left;
      font-weight: normal;
      font-size: 1.1rem;
      color: var(--white);
    }

    th:last-child {
      border: 0;
    }

    td {
      padding-top: 10px;
      padding-bottom: 10px;
      color: #808080;
    }

    tr:nth-child(even) td {
      background: var(--primary-light);
    }


</style>