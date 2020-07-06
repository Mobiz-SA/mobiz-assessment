<template>
  <div class="justify-end">
    <v-dialog v-model="showAddContactDialog" width="450">
      <v-card>
        <v-form v-model="valid" @submit.prevent="saveAndCloseForm" ref="form">
          <v-container class="px-11 py-7">
            <v-row>
              <h1 class="headline">Add Contact</h1>
              <v-spacer></v-spacer>
              <v-btn icon @click="resetContactForm()">
                <v-icon dark>mdi-close</v-icon>
              </v-btn>
            </v-row>
            <v-row class="mt-5">
              <label>
                First name
                <span class="grey--text text--lighten-1">(Optional)</span>
              </label>

              <v-responsive width="100%"></v-responsive>
              <v-text-field v-model.trim="firstName" type="text" autocomplete="off" outlined dense></v-text-field>
            </v-row>
            <v-row>
              <label>
                Last name
                <span class="grey--text text--lighten-1">(Optional)</span>
              </label>
              <v-responsive width="100%"></v-responsive>
              <v-text-field v-model.trim="lastName" type="text" autocomplete="off" outlined dense></v-text-field>
            </v-row>
            <v-row>
              <label>
                Cellphone
                <span class="grey--text text--lighten-1">(Required)</span>
              </label>
              <v-responsive width="100%"></v-responsive>
              <v-text-field v-model.trim="cellphone" type="text" autocomplete="off" outlined dense></v-text-field>
            </v-row>
            <v-row class="justify-end mt-12">
              <v-card-actions class="pr-0">
                <v-btn outlined color="primary" @click.stop="resetContactForm()">Cancel</v-btn>
                <v-btn type="submit" color="primary">Create Contact</v-btn>
              </v-card-actions>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  name: "AddContact",
  data() {
    return {
      hasErrorActive: false,
      valid: true,
      showConfirmationBox: false,
      id: "",
      firstName: "",
      lastName: "",
      cellphone: "",
      errors: {},
    };
  },
  computed: {
    ...mapState("contact", {
      showAddContactDialog: "showAddContactDialog",
      selectedContacts: "selectedContacts",
      prevPages: "prevPages",
      currentPage: "currentPage",
    }),
  },
  methods: {
    ...mapActions("contact", {
      createContact: "createContact",
      updateAddContactDialog: "updateAddContactDialog",
      updateShowNotification: "updateShowNotification",
    }),
    closeDialog() {
      this.updateAddContactDialog(false);
    },
    resetContactForm() {
      this.closeDialog();
      this.clearForm();
    },
    clearForm() {
      this.id = "";
      this.cellphone = "";
      this.clearErrors();
      this.firstName = "";
      this.lastName = "";
    },
    clearErrors() {
      this.errors = {};
    },
    formIsValid() {
      return this.valid && this.cellphone !== "" && !this.hasErrorActive;
    },
    async saveAndCloseForm() {
      const result = await this.saveContact();
      this.clearForm();
      this.closeDialog();

      if (result && result.status === 201) {
        this.updateShowNotification({
          show: true,
          message: "Contact successfuly saved.",
        });
      } else {
        this.updateShowNotification({
          show: true,
          message: "Contact could not be saved. Please try again.",
        });
      }
    },
    async saveContact(): Promise<any> {
      const createContactResponse: any = await this.createContact({
        contact: {
          firstName: this.firstName,
          lastName: this.lastName,
          cellphone: this.cellphone,
        },
      });
      return createContactResponse;
    },
  },
});
</script>

<style lang="scss" scoped>
.phone-input {
  width: 100% !important;
}
</style>
