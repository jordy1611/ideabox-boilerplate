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
* Project management tool: https://github.com/leighlars/ideabox-boilerplate/projects

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


![screenshot of desktop layout](/assets/it0-desktop-layout.png)

### Iteration 1 - Mobile Layout
4/9-10/20: We refactored our CSS and used media queries for responsive mobile layout, which included adding JS for a drop down menu.  We also collaborated with Mod 4 student Kim McCaskill to complete this iteration.   

Full mobile layout:

![Mobile Layout](/assets/it1-MobileView.png)

Full mobile layout with open navigation:

![Mobile Layout with Dropdown](/assets/it1-MobileViewDropMenu.png)

### Iteration 2

4/11-12/20: This is where we really started to get into our JavaScript as we were now able to display some functionality to our webpage as well as the mobile view. Our first process was to be able to type into both the title and input fields, clicking the save button and having our idea appear on the idea card section. We were able to create a function with an HTML template to produce new cards. We also needed the text input fields to clear after we created our idea which was implemented as well. Another part we had implemented with JS is when you hover over the save button, it should only be deemed clickable if both our title and body idea input forms are filled out. We also created a nice little addition that alerted you if you are trying to create the same idea twice.

Desktop layout:

![Desktop layout with cards](/assets/it2-desktopview.png)

Mobile layout with duplication prevention alert:

![Mobile Layout with duplication alert](/assets/it2-mobileview.png)


### Iteration 3

4/12/20  We completed functionality for delete and favorite buttons.  Mod4 student Grayson Palmer reviewed our code for SRP / DRY opportunities.  We also made the opacity / overlay visible in the mobile view.

### Iteration 4

4/15/20 We completed up to bullet point 3 of Iteration 4.  This includes: when the page is refreshed, the idea card remains in the idea list; when two cards are created and one is deleted, one idea card remains after refresh; and finally, when an idea card is favorited and the page is refreshed, that card is still in the "favorite" state with the filled in star icon.  We reviewed entire code with Mod4 and Mod2 students Grayson Palmer and Elliot Mackinnon.  We also spent a significant amount of time refactoring our code by reducing lines of code, removing white spacing and type-Os.   
