import axios from 'axios';

export const state = () => ({
  contacts: []
});

export const mutations = {
  setContacts(state: any, contacts: any[]) {
    state.contacts = contacts;
  }
};

export const actions = {
  async loadContacts({ commit }) {
    try {
      // TO fetch data from express server
      // const response = await axios.get('');
      const data = [
        {
          FirstName: "Tom",
          LastName: "Smith",
          Cellphone: "+27611234567",
        },
        {
          FirstName: "Jane",
          LastName: "Doe",
          Cellphone: "+27784569090",
        },
        {
          FirstName: "Alan",
          LastName: "Jones",
          Cellphone: "+27821238686",
        },
      ];

      commit('setContacts', data);
    }
    catch (error) {
      // Do something with the error
    }
  }
};