# Background

## Table of contents

- [Abstract](#jump1)

- [Objectives](#jump2)

- [Architecture and design](#jump3)

- [Full description of all features](#jump4)


### <span id="jump1">Abstract</span>

With the current ongoing covid epidemic, people's lives have been affected to some
extent. Many people have had to switch to working from home and attending
classes. Longer home time and less social interaction has led many people,
especially those living alone, to consider acquiring a pet to keep them company
during this special time.

The epidemic has also made it less convenient and safe to go offline to buy a pet.
By going online, pet lovers can choose the pet of their choice without having
to take any risks. For pet shop owners, displaying their pets online is not
limited by the size of their premises, and subsequent management and sales
analysis is easier and more powerful.

The owner of one of our local pet shops was looking to set up his own pet website. This
project is the result of our team helping the local pet shop owner to set up a
website to showcase his pet shop online.

### <span id="jump2">Objectives</span>

The pet shop website we built is based on the two main objectives of the pet shop owner to manage the pet data in the back office and to showcase the pets. Accordingly, the website will attempt to implement the following requirements.

- Add back office pet data including: name, species, sale status, personality tag

- Modify the current sale status of pets: available, pending, sold

- Display all the pets in the shop and support customers to search by type and personality tag

- Rank the most recent popular pets by sales

#### High level goals

In addition to the above key features, the high level goals of the project are

- Apply agile development principles to the development of the site

- Develop teamwork skills and improve the efficiency of our teamwork

- Develop team members' proficiency with git

### <span id="jump3"> Architecture and design</span>

At the beginning of the project, the team created a user survey to study the habits of
potential customers and their user profile in relation to online pet shopping. Based on the feedback we received from 20 of our local friends, we identified the most requested features and discussed the initial framework of our website.

#### User research questionnaires

1. Male / Female

2. Age range 18-25 26-30 31-40 over 40

3. Previously have pets? Yes/No How many?

4. Plan to adopt a new pet? Yes/No

5. Have you surfed online pet store? Yes/No Which platform did you look at?

6. What features do you want to see on online pet stores?
   
   a. Search bar  

   b. Picture presenting
   
   c. Filtering of available items
   
   d. Bookmark favorite items
   
8. Others features you want to add? ___
   
9. Would buy pets based on what?

   a. Popularity according to past sales

   b. Pets characteristics

   c. Photos

   d. Others ____



#### Design of the website

![image](../static/reportImg/ui-4.png)

The first interface "Available Pets！" shows the pets that are currently available. We can also make queries using the category and tag filter functions.

![image](../static/reportImg/ui-5.png)

The second interface "Best-selling!", the pets's sales rank. By clicking on the category icon it jumps to available pets in this category.

![image](../static/reportImg/ui-3.png)

The third interface is for the management of the pet website. Where we can set the id,
name, category, status and character tag for the new coming pet or change a existing pet's status.

### <span id="jump4"> Full description of all features</span>


