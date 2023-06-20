<script>
  // Prompting user for input and storing responses in variables
  var name = prompt("What is your name?");
  var location = prompt("Where are you from?");
  var favoriteFood = prompt("What is your favorite food?");
  var dreamDestination = prompt("Where is your dream vacation destination?");

  // Creating a message by concatenating the responses
  var message = "Greetings, " + name + " from " + location + ", I also like to eat " + favoriteFood + " while on vacation in " + dreamDestination + ".";

  // Displaying the concatenated message in an alert
  alert(message);
</script>
