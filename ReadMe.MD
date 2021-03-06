# Repos/dream-team-devs

# ![ScreenshotFromSAMPLEhtml141638](https://user-images.githubusercontent.com/92233527/152927054-29817d92-7c78-4a74-8195-4edda304c4dc.png)

# SAMPLE.html link
https://github.com/Jaswal1p/dream-team-devs/blob/main/SAMPLE.html
 
# License 
![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg) 
[View License](https://opensource.org/licenses/MIT) 

# Video link
 https://watch.screencastify.com/v/whXaHWwugB5XPumw5BD5
 
# GitHub Repository Link
 https://github.com/Jaswal1p/dream-team-devs.git

# Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#Contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 
 # Description
 This assignment was to build an application from a command line to create a software engineering team (I call it a dream team !) of developers. For this project I first started wuth rough sketech (lic below) on a piece of paper to see how the whole concept will work as required for assignment. I divided it into two parts 
 
 1. OOP & TTM part: Created a branch and worked in it. First I needed to create tests for Employee (parent function as members are employees). I started ny installing inquirer package. I used the commands llearned in lesson in module 10. To my surprise, this package came in with jest in it (unlike module 9 lesson!). But I did go into the package.json file and changed the script entry to 'jest'. After writing a failing test for employee, I entered code and created a passing test for Employee.test. After that I repeated similar steps for Manager, Engineer and Intern objects and also entered some of the unique properties for each oblect, in addition to inheriting properties form parent object Employee.js. After that I ran test on all 4 objects togeather and after multiple trials all passed (all 23 test !! That was great to see as i was geting frustrated, mostly because of first not understanding the concept and later by minor errors like spelling, commas and semi-colons !).

 2. Writing code to generate dynamic html file: I understood concepts for this part better, as I already have worked on something similar in module 9 lesson. But challenge in this part was revisiting module 9 lesson, adapt and write long codes in 3 separate files including css (which i have not done for few weeks now). Not having a starter code was another challenge. But i setup the  directory structure exactly as given in the assignment instruction. 
 
 affter this I slowly started as in module 9 and built the file under app.js, requiring inquirer package, fs function, all 4 passing object.js in lib folder, created output path for dynamically genetrated html.I created the generate-site.js file separately and passed that function in the app.js. 

 Finally I created css file by first created wireframe (pic of it submitted below) and slowly started applying the boxes and their names. Had to use inspect tool a lot in browser to get it right. Had to rfresh on flex properties, as display was not working for cell phone. Since it was taking a lot of time, I left the design as in the mock pic. 

 Once css file was done, I ran the program few times, as there wer minor display problems due to bootsrap file, which i corrected. I had to use '! important' in css file override some bootsrap parent properties. Finally it worked. The final pic of my app with my entries, is included in this ReadMe.MD. 


 # Screenshots
 ![Logic_4573](https://user-images.githubusercontent.com/92233527/152698731-f8646b1c-1fc7-4080-bef6-719255fd551f.jpg)

 ![CSSwireframe_4574](https://user-images.githubusercontent.com/92233527/152698760-bc2f5811-d9c8-4e62-8669-d4b9cf27cd9c.jpg)
 
 # Installation
  The following must be installed to run this application. Node.js, fs, npm dependencies, package.JSON, jest, VScode, GitHub, license and its badges.
 # Usage
  This application is to create a team (any team) of software engineers, with various roles and members at various stages of skill set, to work togeather with every role's some individual properties also recognized for easy accessibility and contact info for each.

 # License 
 > This project is licensed under the MIT license.
 >
 > Click the above link adjacent to badge to read further details.
 
 # Contributing

 Contributors: I and only I can contribute to this project as this time.  
 
 Some day with more established skills I will be able to improvise on it and put this out for contributions from other great developers.

 # Tests
 The following is needed to run the test: node.js and jest.

 # Questions
 If you have any questions about the repo/project, please open an issue or contact by: 
 
 my github username: [Jaswal1p](https://github.com/Jaswal1p) 
 
 my email: Jaswal1p@yahoo.com
