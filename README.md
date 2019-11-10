# React Practice Project #

**As a software engineering educator, I have noticed that many students have difficulty understanding React app structure, passing state as props, implementing polymorphic components, as well as implementing CRUD functionality in React apps.** 

**This project guides React developers-in-training through the process of building an app that requires:**

* Multiple, hierarchically structured components
* GET, POST, and DELETE functionality
* Form submission
* Prop drilling
* Component reusability

**A dog adoption facility wants you to build a Dog Adoption app that allows users to:**

* View all dogs available for adoption

* "Favorite" dogs by clicking them and adding them to a favorites list component at the top of the page
  * A particular dog can only be added to the favorites list one time (no duplicates)
  * Remove dogs from favorites list by clicking on the dog card

* Search for dogs by breed

* Add an adoptable dog to the adoptable dogs list by filling out a form

* Delete a dog from the adoptable dogs list by clicking a button

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

<details><summary>CLICK ME TO COMPARE APP TREE TO YOUR OWN</summary>
<p>

![App Structure Tree (header component omitted)](/readme-images/app-structure-tree.png)

</p>
</details>

## Instructions to Complete Dog Adoption Central ##

Refactor App.js from a functional to a class component, then initialize state in the App.js component.

Fetch data from `https://dogs-backend.herokuapp.com/dogs` put returned data in state.

*Attempt to complete this and all step before viewing code below.*

<details>
<summary>SHOW CODE</summary>
<p>

![App.js w/ GET request](/readme-images/app-image.png)

</p>
</details>

Set up all components as functional, put an h1 tag in each of them that contains the name of the component, then import App.js' child components

*Complete this step before viewing code below.*

<details><summary>SHOW CODE</summary>
<p>

![App.js w/ Components Imported](/readme-images/app-components-import.png)
![Example of One Functional Component w/ h2](/readme-images/example-functional-component.png)

</p>
</details>

Put the name of the app in an h1 tag in the Header component. Give it a className of "header". Make sure it renders on the screen.

<details><summary>SHOW CODE</summary>
<p>

![Header.js Component Code](/readme-images/header-component.png)

</p>
</details>

Pass state to AdoptableDogs component as props. Iterate through props in AdoptableDogs component to return an array of DogCard components. Give each dog card a key and a dog prop. Render DogCards in the Adoptable Dogs section in the browser.

<details>
<summary>SHOW CODE</summary>
<p>

*Passing props from App, to AdoptableDogs, to DogCard is called prop drilling:*

*Data is passed from a component higher in the app hierarchy to a child component further down. It allows access to state at different levels of the component hierarchy.*

![Pass Props to AdoptableDogs.js](/readme-images/pass-props-adoptabledogs.png)
![AdoptableDogs.js w/ Map](/readme-images/adoptable-dogs-component.png)

</p>
</details>

Create an HTML card in the DogCard component. It should be wrapped by a div with the className "dog-card". The dog-card div should have two children: (1) An img tag that displays the dog's image and (2) a div with the className "dog-specs". The dog-specs div has two children: (1) h4 tag that displays the dog's name and (2) a p tag that displays the dog's breed.

<details>
<summary>SHOW CODE</summary>
<p>

![Pass Props to AdoptableDogs.js](/readme-images/dog-card-component.png)

</p>
</details>

Add the following functionality: Clicking on a DogCard in the AdoptableDogs component adds it to FavoriteDogs component.

<details>
<summary>SHOW CODE</summary>
<p>

<ol>

<li>Add an empty favoriteDogs array to state in the App component.</li>

<li>Create an addDog function that adds a dog object to state.</li> 

*Remember: Functions that CHANGE state have to live where state lives*

<li>Pass the addDog function as props to the AdoptableDogs component, then to the DogCard component.</li>

<li>Pass the favoriteDogs array in state to the FavoriteDogs component.</li>

<li>Create an array of DogCard components and render them in the FavoriteDogs component.</li>

</ol>

![App.js](/readme-images/app-component-new-state.png)

![FavoriteDogs.js](/readme-images/favorite-dogs-with-props.png)

</p>
</details>

Ensure that once a dog is added to the FavoriteDogs component, it cannot be added again.

<details><summary>SHOW CODE</summary>
<p>

![Pass Props to AdoptableDogs.js](/readme-images/dog-card-component.png)

</p>
</details>

Add the following functionality: Clicking on a DogCard in the FavoriteDogs removes it from that component.

<details>
<summary>SHOW CODE</summary>
<p>

*Did you know that you can give two different props the same name even if they reference different functions!? This increases the reusability of components!*

<ol>

<li>Write a removeDog function that removes the selected dog from the favoriteDogs array in state.</li>

<li>Change the name of AdoptableDogs component's addDog prop to dogAction.</li> 

<li>Pass removeDog function as a prop called dogAction to the FavoriteDogs component.</li> 

<li>Pass dogAction down to DogCard. (Change props names in AdoptableDogs and DogCard components as needed.)</li> 

</ol>

![App.js](/readme-images/app-with-remove.png)

![App.js](/readme-images/adoptable-dogs-new-props.png)

</p>
</details>

Add functionality to SearchBar component: Typing in a form allows user to search by breed.

<details>
<summary>SHOW CODE</summary>
<p>

<ol>

<li>
In the App component, add searchTerm to state and assign it to an empty string. Pass it to the SearchBar component as props.
</li>

<li>
In the App component, write a function called updateSearchTerm that takes in a searchTerm and sets the searchTerm in state.
*Do you remember why this function belongs here and not in another component?*
</li>

<li>Pass the updateSearchTerm function to the SearchBar component as props.</li>

<li>Add a search input to SearchBar component.</li>

<li>Give input a value of the searchTerm previously passed as props.</li>

<li>Give input a placeholder of "Find Adoptable Dog".</li>

<li>Add an onChange event listener to the input that references a function called "updateSearchTerm".</li>

<li>In the SearchBar component, write the updateSearchTerm function that references the updateSearchTerm function written in the App component. It should take in event.target.value as its argument.
</li>

<li>Create a filteredDogs function. (You determine where it should live.) Based on the searchTerm in state, this funciton should filter dogs by breed, name, and age.</li>

 <li>Update adoptableDogs props sent to AdoptableDogs component to reference the filteredDogs function.</li>

</ol>

![SearchBar.js](/readme-images/search-bar.png)

![App.js](/readme-images/app-with-search.png)

</p>
</details>

Create a form in AddDogForm that allows a user to add an adoptable dog to the list. It should have four inputs: one for a dog's name, one for a dog's breed, one for a dog's age, and one with a type attribute assigned to "submit".

Refactor the AddDogForm component to hold a newDog object in state.

Give first three inputs a value that references corresponding information AddDogForm state. 

<details>
<summary>SHOW CODE</summary>
<p>

![AddDogForm.js](/readme-images/add-dog-form-1.png)

</p>
</details>