// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (license !== "None") {
    return ` ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ""
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project was developed under the ${license} license.`
    )
  }
  return ""
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
return `# ${data.title}

#  Project Title
${data.title}

${renderLicenseBadge(data.license)}

##  Description
${data.description}

##  Table of Contents
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  
## Technologies
${data.tech}


## Installation
${data.install}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions  
See my Github [GitHub](https://www.github.com/${data.github})  
Email me  <${data.email}>
`;
}

module.exports = generateMarkdown;
