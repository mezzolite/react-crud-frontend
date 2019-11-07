# React CRUD Project #

**As an software engineering educator, I have noticed that many students have difficulty understanding app structure, passing state as props, and CRUD functionality in React apps. This blog guides readers through the process of building an app that requires:**

* Multiple, hierarchically structured components
* GET, POST, and DELETE functionality
* Form submission
* Prop drilling
* Polymorphic components

**A dog adoption facility wants you to build a Dog Adoption app that allows users to:**

* View all dogs available for adoption

* "Favorite" dogs by clicking them and adding them to a favorites list component at the top of the page
  * A particular dog can only be added to the favorites list one time (no duplicates)
  * Remove dogs from favorites list by clicking on the dog card

* Add an adoptable dog to the adoptable dogs list by filling out a form

* Delete a dog from the adoptable dogs list by clicking a button

* Search for dogs by breed

**Below is the wireframe for Dog Adoption Central**

![App Wireframe Image](/readme-images/dog-adoption-app-wireframe.png)

**Below is a list of components in Dog Adoption Central**

* App.js
* Header.js
* SearchBar.js
* AdoptableDogsContainer.js
* FavoriteDogsContainer.js
* DogCard.js
* AddDogForm.js

**Based on the wireframe and component list above, draw a component tree to determine the structure of this Dog Adoption app, as well as where state will be held and how props will be passed**

### Try drawing, THEN reveal answer below. Think about where state should be held (highest common component). ###

<details><summary>CLICK ME TO COMPARE APP TREE TO YOUR OWN</summary>
<p>

![App Structure Tree (header component omitted)](/readme-images/app-structure-tree.png)

</p>
</details>

### Below are the step-by-step instructions to complete the Dog Adoption app ###

Refactor App.js from a functional to a class component, then initialize state in the App.js component.

Fetch data from `https://dogs-backend.herokuapp.com/dogs` put returned data in state.

![App.js File](/readme-images/app-image.png)
