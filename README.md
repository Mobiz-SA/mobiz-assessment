# Mobiz Assessment

## Overview
This assessment application consists of a [Nuxt](https://nuxtjs.org) frontend and an [Express](https://expressjs.com) backend. See [here](#technology-stack) for more details on the application's tech stack.

The application allows a user to view contacts in a table, and add a contact via a modal. Contacts have 3 data attributes: first name, last name, and cellphone number.

## Instructions
Your task is to add a feature that allows the user to update an existing contact, using a modal similar to adding a contact.

Fork this repo and create a PR that adds this feature.

Additionally, add a section to the forked repo's README that briefly explains:
* Why you structured your solution in the way you did
* What assumptions you made
* What you would do if you had more time
* What UI/UX changes and improvements you would make

## Rubric
* Feature completeness (2)
* Code reuse (1)
* Use of Vue/Nuxt features - use Vue and Nuxt features for their intended purposes (1)
* General coding/JavaScript best practices (1)
* Attention to detail (1)
* UI bells and whistles - make use of Vuetify to implement any additional UI niceties (0.5)

## Setup
Install the relevant dependencies for the frontend and backend, and then start the frontend and backend apps.

## Technology stack
The assessment application is built using these technologies:
* [Vue](https://vuejs.org)
  * JavaScript framework for building user interfaces and single-page applications
* [Nuxt](https://nuxtjs.org)
  * Web application framework that builds upon Vue
  * Simplifies Vue application development by providing sensible defaults and convention-over-configuration guidelines for how to structure and architecture a Vue app
  * Based on a modular architecture that allows for plugging in pre-made modules
* [Vuetify](https://vuetifyjs.com)
  * [Material Design](https://material.io/design/introduction) UI component library for Vue
  * Provides a set of ready-made UI components that can be used in Vue
* [Vuex](https://vuex.vuejs.org)
  * State management library that provides a centralized store for all components in the app
  * Integrates with the backend API
* [Express](https://expressjs.com)
  * Web application framework for [Node](https://nodejs.org)

In this application, Express provides the contacts API endpoints. This API is described by an [OpenAPI Specification](https://www.openapis.org) document. Once you have the backend setup and running, you can access a [SwaggerUI](https://swagger.io/tools/swagger-ui) visualisation of the contacts API at `localhost:3001/api-docs`.
