<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="display-1">Contacts</h1>
      </v-col>
      <v-col class="text-right">
        <v-btn color="primary" dark @click.stop="addContact">
          <v-icon dark left>mdi-account-plus</v-icon>Add contact
        </v-btn>
      </v-col>
    </v-row>

    <AddContact @change-page="goToActionPage" />

    <v-data-table
      :headers="headers"
      :items="contacts"
      :page.sync="page"
      show-select
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      item-key="id"
      class="elevation-1 mt-4"
      hide-default-footer
    ></v-data-table>
    <div class="text-center">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
    <v-snackbar v-model="showNotification" color="blue darken-2">
      {{notificationMessage}}
      <template v-slot:action>
        <v-btn class="black--text" color="grey lighten-4" @click="showNotification = false">Close</v-btn>
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
    async goToActionPage(action: string) {
      if (action === "add") {
        await this.loadContacts({});
      }
    },
  },
});
</script>
