## Features to be implemented

* Create registration form (using redux-form) with fields *age* *username* *email*
  * Add multiple addresses with fields *city*(selectable from the preset list) *street*
  * Addresses can be added/removed
* Add validation for fields (using yup, or manually) preventing submitting form if invalid.
  * age - required, between 19, 85
  * username - required, length between 4 and 25
  * email - standard email validation
  * address at least one
    * address city, required
    * address street, required
* Display Emoji Roulette page when user logs in
* Use [twemoji](https://github.com/twitter/twemoji) package to display emoji
* Get random index of emoji and render one from the emojis.js file
* Implement time counter which will get new emoji after 5 seconds
* Store and display the last 5 emojis
* Add input where user can set time to getting new emoji

