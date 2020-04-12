# Ideabox Group Project

The IdeaBox project provides a fluid and responsive client-side interface to record and archive client ideas quickly and cleanly.

Our team will utilize an agile workflow over two weekly sprints. We will use a complementary color palette and presentation, with a reliance on Javascript, as well as localStorage to maintain our client's ideas between sessions.

## Planning

Deployed Pages Link: https://leighlars.github.io/ideabox-boilerplate/

* Derek Romero Gihub Link: https://github.com/dereklromero13
* Dustin LaDue Github Link: https://github.com/DustinLaDue
* Leigh Larson Github Link: https://github.com/leighlars
* Driver/navigator style collaboration.
* Text editor: Atom
* Project management tool: Github Projects

Estimated schedule:
* Iteration 0 completed: Tuesday pm
* Iteration 1 completed: Thursday pm
* Iteration 2 completed: Saturday pm
* Iteration 3 completed: Monday pm
* Iteration 4 completed: Tuesday pm
* Polishing / refactoring / mentor feedback: Wednesday


## Progression

### Iteration 0 - Desktop Layout
4/6/2020: Created repo, Github Project planner, Slack channel. Planned out HTML, CSS, JS using hand-drawn wireframes, identified/ labeled appropriate elements. Updated READMe to feature contact info, project overview, timeline. Added svg to created assets folder and created README imgs folder.

4/7-8/2020: On these two days we really spent time making our code clear and concise. We had big breakthroughs with using flex-box and really honing in and understanding the usage of correct spacing. The svg icons were a bit tricky as it was our first time really working with them. But once we started to understand the process we were able to move quickly with all the other svg icons. We worked together as a team to review each code block to make sure we were all on the same page and had the same understanding on how all the code worked as a cohesive unit to build the layout of our webpage.


![screenshot of desktop layout]( https://files.slack.com/files-pri/T029P2S9M-F011QFU5R36/screen_shot_2020-04-08_at_8.45.29_pm.png)

### Iteration 1 - Mobile Layout
4/9-10/20: We refactored our CSS and used media queries for responsive mobile layout, which included adding JS for a drop down menu.  We also collaborated with Mod 4 student Kim McCaskill to complete this iteration.   

Full mobile layout:

![Mobile Layout](/assets/it1-mobile-view.png)

Full mobile layout with open navigation:

![Mobile Layout with Dropdown](/assets/it1-mobile-view-drop-menu.png)

### Iteration 2

4/11/2020:

Desktop layout:

![Desktop layout with cards](/assets/it2-desktopview.png)

Mobile layout with duplication prevention alert:

![Mobile Layout with duplication alert](/assets/it2-mobileview.png)


### Iteration 3



## Rubric

### Functional Expectations

* **4:** Application meets all of the expectations from Iteration 4 and most functionality from Iteration 5.
* **3:** Application meets all of the expectations from Iteration 4.
* **2:** Application meets all of the expectations of Iteration 3.
* **1:** Application meets all of the expectations of Iteration 2.

### Comp Recreation

* **4:** Additional elements that have been added match the visuals established in the comps. Every little detail was built out thoughtfully - from hover states to placeholders, etc.
* **3:** Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment, etc.) with **smooth transitions between screen sizes**. Additional elements added generally match the visuals established in the comps, but may be slightly awkward.
* **2:** Application implements most major comp details accurately and correctly on **desktop and mobile** (colors, fonts, icons, spacing, alignment, etc.). Transitions between screen sizes may not be smooth.
* **1:** Application implements all major comp details on desktop only (colors, fonts, icons, spacing, alignment, etc.), OR masonry layout is not implemented.

### Git Workflow & Documentation

* **4:** A PR template was used. A code review was requested and completed by a mentor, and all team members can speak to how the feedback in code review was implemented (and point to the commit(s) that implemented the feedback).
* **3:** Every team member (on a team of 3) authors between 25%-40% of the commits. Most commits are formatted correctly. Every team member contributes to at least 2 meaningful PR conversations. The README is formatted well and contains:
  - Overview of project and goals
  - Overview of technologies used, challenges, and wins, any other reflections
  - Screenshots of comp and your app
  - Credit all teammates
* **2:** Every team member (on a team of 3) authors between 20%-45% of the commits. More than a few commits are formatted incorrectly. The README is formatted well but may be lacking in detail.
* **1:** Commit and PR history does not tell a story of the application OR a README has not been created/has minimal information.

### JavaScript - Style and Implementation

* **4:**
  * All loops are refactored into the proper array prototype iteration methods
  * Uses logical operators instead of if/else statements where applicable
  * When 'Filtering and Searching by Text' and 'Viewing Urgent ToDo Cards', to-dos that do not need to be shown on the DOM should be completely removed from the DOM, instead of only being hidden from view
* **3:**
  * Application uses the Data Model exclusively to track changes to the ideas,
    and display of ideas happens after the Data Model has been updated
  * DRY and SRP practices are demonstrated in codebase and students can speak to implementation decisions
  * All functions are less than 10 lines
  * There are no nested if/else statements
  * There are no global variables aside from query selectors and an array for your to-dos
  * Uses event delegation correctly on dynamic elements for deleting, checking tasks off, and marking a to-do urgent
* **2:** Application correctly implements data model for the `Idea` class including all required methods
* **1:** Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
