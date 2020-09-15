<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <h1 class="text-h4">Contacts</h1>
      <v-btn color="primary" @click.stop="addContact">
        <v-icon left>mdi-account-plus</v-icon>Add contact
      </v-btn>
    </div>

    <AddContact />

    <v-data-table
      :headers="headers"
      :items="contacts"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      item-key="id"
      show-select
      hide-default-footer
      class="elevation-1 mt-4"
      @page-count="pageCount = $event"
    />
    <div class="d-flex justify-center">
      <v-pagination v-model="page" :length="pageCount" />
    </div>

    <v-snackbar v-model="showNotification" color="primary">
      {{notificationMessage}}
      <template v-slot:action>
        <v-btn
          class="black--text"
          color="grey lighten-4"
          @click="showNotification = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import { Context } from "@nuxt/types";

export default Vue.extend({
  name: "Contacts",
  middleware: (context: Context) => {
    context.store.dispatch("contact/loadContacts", {});
  },
  data: () => {
    return {
      itemsPerPage: 2,
      page: 1,
      pageCount: 0,
      headers: [
        { text: "First Name", value: "firstName" },
        { text: "Last Name", value: "lastName" },
        { text: "Cellphone", value: "cellphone" },
      ],
    };
  },
  computed: {
    ...mapState("contact", ["contacts"]),
    ...mapState("contact", {
      showNotifications: "showNotification",
      notificationMessage: "notificationMessage",
    }),
    showNotification: {
      get(): any {
        return this.showNotifications;
      },
      set(value): void {
        this.updateShowNotification(value);
      },
    },
  },
  methods: {
    ...mapActions("contact", {
      updateAddContactDialog: "updateAddContactDialog",
      updateShowNotification: "updateShowNotification",
      loadContacts: "loadContacts",
    }),
    addContact() {
      this.updateAddContactDialog(true);
    },
  },
});
</script>
