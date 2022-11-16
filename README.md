# The-Note-Taker
11 Express.js: Note Taker

[Deployed Application]()
[licenseBadge] [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
*[Description of Repository](#Repository-Description)
*[User-Story](#User-Story)
*[Contribution-Guidelines](#Contribution-Guidelines)
*[Repositiory-End-Goal-Criterea](#Repositiory-End-Goal-Criterea)
*[License](#License)
*[Contact](#Contact)

# Repository-Description
###### [Back to Table of Contents](#Table-of-Contents)
An application that can be used to write, save, and delete notes using Node and Express, utilizing JSON for data storage. With an already completed front-end, my role was to build the back-end and connect it to the front-end, as stated below:

## User-Story
### As the Developer
###### [Back to Table of Contents](#Table-of-Contents)
* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

  ## Contribution-Guidelines
###### [Back to Table of Contents](#Table-of-Contents)
none

## Overview: What Was Accomplished!
### Workflow [Back to Table of Contents](#Table-of-Contents)
Created an Awesome Note Taker so I can write, save and delete notes I've written before by organizing my thoughts and keeping track of tasks I need to complete.

### Screenshots (Building this application)
###### [Back to Table of Contents](#Table-of-Contents)
![](./)

## Repositiory-End-Goal-Criterea
###### [Back to Table of Contents](#Table-of-Contents)
Stay on Task

## License
MIT
* For more information on license types, please reference this website
for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).


## Contact
* Github Username: victor5055
* Github Profile link:(https://github.com/victor5055)
* Email: victor5055@outlook.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
