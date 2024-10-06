/*
Component where we can vote for out favorite framework, adn then when we submit, it will show
the results down below, and we are gonna keep track of it with a map
*/

const poll = new Map();
/* Creating out poll options:
We are using set() to add the data,
And the key for this first one will be React, and the value is gonna be 0.
The value for all of them is gonna be 0, because that represents the number of votes.
And of course it's gonna be zero to begin with.
*/
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);
// Now I have a value in our map for each of our options.

// Now we want something to happen when we press the submit button:
function submitForm(e){
    e.preventDefault();

    const selectedOption = document.querySelector("input[name='poll-option']:checked");
// All of out inputs have: name="poll-option" and add: :checked  for checked option
// console.log(selectedOption); When I select and click submit:
// <input class='form-check-input' type='radio' name="poll-option" id="poll-option" value="Vue">
  if(!selectedOption){
    alert('Please select an option');
    return;
  } 

  let voteCount = poll.get(selectedOption.value) // .get() method retrieves the value associated with a specific
// ket in a Map object - which in this case will be the value of selectedOption.
// Then we want to set the polls, we are gonna set the selectedOption value (React, Vue, Angular...)
// and then we want to pass in as the value the voteCount, whatever the voteCount is + 1, becasue its getting a vote.
  poll.set(selectedOption.value, voteCount + 1);
// Once we did that, we want to display the results
console.log(poll)
}

document.querySelector('#poll-form').addEventListener('submit', submitForm);