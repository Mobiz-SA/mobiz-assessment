import axios from "axios";

export const state = () => ({
  contacts: [],
});

export const mutations = {
  setContacts(state: any, contacts: any[]) {
    state.contacts = contacts;
  },
};

export const actions = {
  async loadContacts({ commit }: any) {
    try {
      const response = await axios.get("http://127.0.0.1:3001/contacts", {});
      commit("setContacts", response.data);
    } catch (error) {
      // Do something with the error
    }
  },
};
