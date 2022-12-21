# Liana Technology Website

This is an coding assignment for the frontend internship position from Laina Technologies.

## 1. Functional Requirements

- [x] Responsive designs for various devices
- [x] Main banner image with parallax
- [x] Latest News section contents updated with the RSS feed from https://www.lianatech.com/resources/blog.rss
- [x] Clients, Employees and Users sections with animated counters
- [x] Thank you notification on News Letter subscription section

## 2. Implementation

The section describes how the assignment has been completed. Besides, challenges and key learnings are shared in each step.

1. Analyze components from the UI design
2. Plan a modular architecture
3. Extract images and icons from the given PSD file.
4. Structure DOM on index.html
5. Create styles
6. Build scripts
7. Merge branches
8. Organize codes and add comments on codes

## 3. Overview

- `counter.js`: All logics to animate counters are saved.
- `newsFeeds.js`: The file handles to fetch the news RSS feed and to render recent news.
- `newsLetter.js`: The file has codes display and hide the newsletter notification modal.
- `utils.js`: Helper functions such as `formatDate` are located.
- `main.js`: All modules are imported on this file. It is linked to `index.html`

## 4. Challenges

1. **Navigation for tablets and mobiles**
   Since only the pc design file was provided, it was challenging to make responsive styles for tablets and mobile without a reference. I have created a navigation bar for tablets and mobiles.

2. **Grid for responsiveness**
   During the project, most time was used for setting up responsive design using Grid.

3. **XML format**
   Data type that I used to work with is JSON and it is my first time to use the XML format. It took an hour to get to know about fetching, parsing, and extracting XML formats.

## 5. Working hours

- html: 2 hours
- styles: 8 hours
- javascript: 4 hours
- total: 14 hours
