const core = require('@actions/core');

try {
  // Get the input value from action.yml
  const name = core.getInput('name');

  // Create the greeting message
  const message = `Hello, ${name}! 👋`;

  // Print to the logs
  console.log(message);

  // Set the output variable for use in the workflow
  core.setOutput("message", message);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}