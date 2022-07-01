import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: "",
    balance: "", 
    avatar: "",
    transactions: [],
    isLoading: false,
  },
  getters: {
    formattedBalance(state){
      if (state.balance === "") {
        return "0.00";
      }else{
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });
        return formatter.format(state.balance);
      }
    }
  },
  mutations: {
    setUserName (state, value) {
      state.userName = value;
    },
    setBalance (state, value) {
      state.balance = value;
    },
    setTransactions(state, value){
      state.transactions = value;
    },
    setAvatar(state, value){
      state.avatar = value;
    },
    setIsLoading(state, value){
      state.isLoading = value;
    },
  },
  actions: {
    loadAppData({ commit, state }) {

      commit('setIsLoading', true);

      //Call server to bootstrap data from server
      //-------------------------------------------
      // axios.get('/api/1/pageData?ID=12345')
      // .then(function (response) {
      //   commit('setTransactionsData', response.data);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // })
      //avataaars.png
      //"http://www.fillmurray.com/200/200"
      //This is temporarily hardcoded for demo
      //I might look into breaking the user info and the transactions info into 2 seperate calls
      //I also might only prefetch the first 100 rows and do a second call for the rest (for performance)
      const data = 
      {
        "name": "Paisley Higgs",
        "avatar": "avataaars.png",
        "balance": 212,
        "transactions": [
              {
                "merchant": "Starbucks",
            "date": "2019-01-02",
            "amount": 4.67,
            "type": "debit",
            "id" : 1
          },
          {
                "merchant": "Till, Inc.",
            "date": "2019-01-15",
            "amount": 1000000,
            "type": "credit",
            "details": "Payroll",
            "id" : 2
          },
          {
                "merchant": "Sweet Green",
            "date": "2019-01-16",
            "amount": 8.72,
            "type": "debit",
            "id" : 3
          },
          {
                "merchant": "Amazon",
            "date": "2019-01-19",
            "amount": 2785,
            "type": "debit",
            "id" : 4
          },
          {
                "merchant": "IRS",
            "date": "2019-02-15",
            "amount": 1500,
            "type": "credit",
            "details": "Federal Income Tax Refund",
            "id" : 5
          }
        ]
      }

      setTimeout(() => {
        commit('setTransactions', data.transactions);
        commit("setUserName", data.name);
        commit("setBalance", data.balance);
        commit("setAvatar", data.avatar);
        commit('setIsLoading', false);
      }, "3000")
      



    },
  },
  modules: {
  }
})
