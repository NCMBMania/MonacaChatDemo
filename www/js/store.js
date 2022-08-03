const createStore = Framework7.createStore;
const store = createStore({
  state: {
    messages: [
    ]
  },
  getters: {
    messages({ state }) {
      return state.messages;
    }
  },
  actions: {
    addMessages({ state }, messages) {
      state.messages = [...state.messages, ...messages];
    },
  },
})

