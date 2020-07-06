<template>
  <v-container>
    <h1>Our Contacts</h1>
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
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
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
  },
});
</script>
