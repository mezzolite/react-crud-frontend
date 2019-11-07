# React CRUD Project #

## As an software engineering educator, I have noticed that many students have difficulty implementing full CRUD functionality in React apps. This blog guides readers through that process ##

### A dog adoption facility wants you to build a Dog Adoption app that allows users to ###

* View all dogs available for adoption

* "Favorite" dogs by clicking them and adding them to MyFavoriteDogs list at the top of the page
  * A particular dog can only be added to favorites one time (no duplicates)

* Delete dogs from MyFavoriteDogs list by clicking on the dog

* Add an adoptable dog to the adoptable dogs list by clicking a button

* Search for dogs by breed

### Below is the wireframe for the Dog Adoption app ###

![App Wireframe Image](/readme-images/dog-app-wireframe.png)

### Below is a list of components in the Dog Adoption app ###

* App.js
* AdoptableDogsContainer.js
* FavoriteDogsContainer.js
* DogCard.js
* AddDogForm.js

**Based on the wireframe and component list above, draw a component tree to determine the structure of this Dog Adoption app, as well as where state will be held and how props will be passed**

### Try drawing, THEN reveal answer below ###

<details><summary>CLICK ME TO COMPARE APP TREE TO YOUR OWN</summary>
<p>

![App Structure Tree](/readme-images/app-structure-tree.png)

</p>
</details>

### Below are the step-by-step instructions to complete the Dog Adoption app ###

Refactor App.js from a functional to a class component, then initialize state in the App.js component.

Fetch data from `https://dogs-backend.herokuapp.com/dogs` put returned data in state.

![App.js File](/readme-images/app-image.png)
