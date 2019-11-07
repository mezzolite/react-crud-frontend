# React Practice Project #

**As an software engineering educator, I have noticed that many students have difficulty understanding React app structure, passing state as props, implementing polymorphic components, as well as implementing CRUD functionality in React apps.** 

**This project guides React developers-in-training through the process of building an app that requires:**

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

**Wireframe for Dog Adoption Central:**

![App Wireframe Image](/readme-images/dog-adoption-app-wireframe.png)

**Dog Adoption Central Component List**

* App.js
* Header.js
* SearchBar.js
* AdoptableDogs.js
* FavoriteDogs.js
* DogCard.js
* AddDogForm.js

**Based on the wireframe and component list above, draw a component tree to determine the structure of this Dog Adoption app, as well as where state will be held and how props will be passed**

*Try drawing the component tree before viewing the answer below. Think about where state should be held (highest common component).*

<details><summary>CLICK ME TO COMPARE APP TREE TO YOUR OWN</summary>
<p>

![App Structure Tree (header component omitted)](/readme-images/app-structure-tree.png)

</p>
</details>

### Instructions to Complete Dog Adoption Central ###

Refactor App.js from a functional to a class component, then initialize state in the App.js component.

Fetch data from `https://dogs-backend.herokuapp.com/dogs` put returned data in state.

*Complete this step before viewing code below.*

<details><summary>SHOW CODE</summary>
<p>![App.js File](/readme-images/app-image.png)</p>
</details>



Set up all components as functional, put an h1 tag in each of them that contains the name of the component, then import App.js' child components

*Complete this step before viewing code below.*

<details><summary>SHOW CODE</summary>
<p>

![App.js w/ Components Imported](/readme-images/app-components-import.png)
![Example of One Functional Component w/ h2](/readme-images/example-functional-component.png)

</p>
</details>

*Remember: Functions that CHANGE state have to live where state lives*

Put the name of the app in an h1 tag in the Header component. Give it a className of "header". Make sure it renders on the screen.

<details><summary>SHOW CODE</summary>
<p>

![Header.js Component Code](/readme-images/header-component.png)

</p>
</details>

