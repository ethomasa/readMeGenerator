


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
# Title
${data.Title}
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)]
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The install nescessary dependencies, run the following command: ${data.Dependencies}
# License
This project is license under the ${data.License} license.
# Info about contributing,
 ${data.Contributor}
# Tests
To run tests, you need to run the following command: ${data.Test}
# Questions
If you have any questions about the repo, open an issue or contact ${data.UserName} directly ${data.Email}
# Repo
Information for the user about the REPO: ${data.Repoinfo}`

}


module.exports = generateMarkdown;
