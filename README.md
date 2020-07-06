# mobiz-assessment

A project illustrating a simple setup of nuxt project with an express backend. The application allows a user to view contacts in a listing and add a contact. It is still feature incomplete

## Specification

A useful feature to have, is allowing the user to update an existing contact. This work was started but not completed. Please implement a component that allows the user the update an existing contact using the existing server methods.

A contact is defined as having the fields _name, surname, and cellphone number_, which can all modified.

For example if Adam is an existing contact as below,

```
{
	"firstName": "Adam"
	"lastName": "Apple"
	"cellphone":"+27791234567"
}
```

then updating adam's cellphone with 0781010101 will return the below in the contacts list

```
{
	"firstName": "Adam"
	"lastName": "Apple"
	"cellphone":"+27781010101"
}
```

To test server endpoints: Run the application and copy contents of server/oaSpecification.json to https://editor.swagger.io/

**(Use the code base as an example to implement this feature.)**

## Weighting

The weighting for the assessment is as below:

| Category                   | Weighting |
| -------------------------- | --------- |
| Feature completeness       | 2         |
| Code reuse                 | 1         |
| Use of Vue / Nuxt features | 1         |
| JavaScript best practices  | 1         |
| Attention to detail        | 1         |
| UI (bells & whistles)      | 0.5       |

Feature completeness: The program works as expected

Code reuse: As much as possible do not duplicate code but reuse any functions, components and styles

Use of Vue / Nuxt features: Use Vue and Nuxt features for its intended purpose

JavaScript best practices: Specific to javascript and general coding best practices

Attention to detail: Demonstrate thoughts and considerations beyond the task at hand (whats still missing? If you had more time what would you do?) Feel free to add a readme with any considerations.

UI (bells & whistles): Making use of Veutify and implementing any additional UI niceties

## Build Setup

```bash

# install dependencies

$ npm install



# run site and server locally

$ npm run start



For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

```
