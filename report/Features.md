# Possible Features

1.Adding new available pets with more details(default **status**: *available* ).

2.Updating status of pet by **id**.  

3.Sorting pets by **category** and/or **tag**.

4.Showing sold pets with a ranking list, redirecting to *available* page with certain search parameter by clicking **category** on the list.

#### not implemented ####

- 

- Deleting???? At which page???  Alert??

- Adding tips after cursor.
----

- Copying **id** to clipboard by clicking pet's **id**.

- Adding new *available* pets with default **id**.  ~~/**name**/~~(useless, banned), ~~**status**(*available*)~~(done).

- Sorting pets on *available* page by multiple **tags**.

- Updating **available categories[]** which is selected while adding pets.

- Updating **available tags[]** which is selected while adding pets.

- Updating pet's **tag[]**.(To be discussed).

- Administrator authorization. 

- Booking/order system. 

- Updating status of pets on *available* page.(Could be implemented after implementing administrator authorization)

- Updating pet detail by **name**.(Not possible due to API).

- ~~Adding new pet without **name**.~~(useless, banned).

---

# Feature 1

- Adding new available pets with configurable information:

 - ***id**
 - ***name**
 - ***category** (e.g. dog/ cat/ fish)
 - ***status** (e.g. available/ sold **default: *available***)
 - **tag[]** (e.g. Brave/ Elegance/ Lazy/ Active/ Mild)


- ***id** is required because it's reserved for querying, while the back-end does not support auto increment of pet's **id**.

- ***name**, ***category**, ***status**, are required because they are necessary for every pet.

- **tag[]** are optional, just for more detailed record.
  - **tag[]** are only selectable(from **available tags[]**), they do not support customisation insertion due to the API data structure, updating **available tags[]** could only be done in editing source code.

## Justification

- When adding new available pets onto the website, besides pet ***name**, shopkeeper would like to upload more information about them, such as ***category**, ***status** and **tag[]**.

- This feature helps shopkeeper to manage pets in inventory with more details.

- This feature let visitors see more detailed information and distinguish different pets.

# Testing

---

# Feature 2

- Updating status of pet by entering ***id**.

## Justification

- When a pet is sold, shopkeeper could update its status from *available* to *sold*, the pet would no longer be shown on the available page, which keeps the available page showing the most recent inventory.

- *sold* pets are still remaining in the website, helping shopkeeper to review business.

# Testing

---

# Feature 3

- Sorting pets by **category** and/or **tag** on available page.

  - One **category** and one **tag** could be chosen at the same time.

## Justification

- Most visitors have a clear purpose of which **category**/**tag** of pet they like, so they want to filter the inventory.

- It is more efficient for the shopkeeper to gain an overview and manage available pets by sorting.

- Visitors without a clear purpose could also get an overview of what **category**/**tag** of pets are on sale and browse pets with more comparability.

# Testing

---

# Feature 4

- Showing sold pets with a ranking list, redirect to *available* page by clicking **category** on the list.

  - The ranking list ranks top 5 best-selling **categories** with their sales.
  
  - When clicking on the icon of a **category**, page will redirect to *available* page with request parameter of the clicked **category**, which will be automatically filled into the sorting form.

## Justification

- Shopkeeper could analyse business and customers' preference by checking *sold* pets.

- knowing best-selling **categories** would help shopkeeper with arranging future management like updating inventory.

- Visitors without a clear purpose could take a look, and it would help them to discover their preference(**category**).

- some people tend to buy best-selling **categories** driven by group psychology, and inventory of those would be exactly the most after shopkeeper's business analysis.  

- Redirecting to **available** page with request parameter gives all users much convenience in finding certain kind of *available* pets the want.

# Testing

---
