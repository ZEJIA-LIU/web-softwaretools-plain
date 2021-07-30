# Possible Features

1.Adding new available pets with more details.

2.Updating status of pet by **id**.  

3.Sorting pets by **category** and/or **tag**.

4.Showing sold pets with a ranking list.

#### not implemented ####

- Adding new *available* pets with default **id**/**name**/**status**(*available*).

- Adding new pet without **name**.

- Updating status of pets on *available* page.

- Updating pet detail by **name**.

- Updating **available categories[]**.

- Updating **available tags[]**.

- Updating pet's **tag[]**.

- Sorting pets on *available* page by multiple **tags**.

- Redirect to *available* page with query parameters by clicking **category** on ranking list.

---

# Feature 1

- Adding new available pets with configurable information:

 - ***id**
 - ***name**
 - ***category** (e.g. dog/ cat/ fish)
 - ***status** (e.g. available/ sold)
 - **tag[]** (e.g. Brave/ Elegance/ Lazy/ Active/ Mild)


- ***id** is required because it's reserved for querying, while the back-end does not support auto increment of pet's **id**.

- ***name**, ***category**, ***status**, are required because they are necessary for every pet.

- **tag[]** are optional, just for more detailed record.
  - **tag[]** are only selectable(from **available tags[]**), they do  not support customisation insertion due to the API data structure, updating **available tags[]** could only be done in editing source code.

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

- Showing sold pets with a ranking list.

  - The ranking list ranks top 5 best selling **categories** with their sales.

## Justification

- Shopkeeper could analyse business and customers' preference by checking *sold* pets.

- knowing best selling **categories** would help shopkeeper with arranging future management like updating inventory.

- Visitors without a clear purpose could take a look and it would help them to discover their preference(**category**).

- some people tend to buy best selling **categories** driven by group psychology, and inventory of those would be exactly the most after shopkeeper's business analysis.    

# Testing

---
