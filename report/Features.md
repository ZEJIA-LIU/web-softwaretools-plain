# Possible Features

1. Adding new available pets with more details(default **status**: *available* ).

2. Updating status of pet by **id**.  

3. Sorting pets by **category** and/or **tag**.

4. Showing sold pets with a ranking list, redirecting to *available* page with certain search parameter by clicking **category** on the list.

#### not implemented ####

- these are pets sold recently for your reference, you can click a category icon on the best-selling ranking to look for available ones of the same category.

- Hover . jump. pointer...

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

* 

---

# Feature 2

- Updating status of pet by entering ***id**.

## Justification

- When a pet is sold, shopkeeper could update its status from *available* to *sold*, the pet would no longer be shown on the available page, which keeps the available page showing the most recent inventory.

- *sold* pets are still remaining in the website, helping shopkeeper to review business.

# Testing
这部分是通过发送http请求来实现的，因此我们使用jest对该feature进行unit test
* 如何测试：pull代码，进入web-softwaretools-plain，
  ```
  npm install
  npm run test changeStatus.test.js
  ```
* 测试文件

  web-softwaretools-plain/src/test/changeStatus.test.js

* 测试内容

    1、创建只新的宠物作为测试对象，状态为SOLD
    2、修改该宠物的状态为PENDING
    3、寻找该宠物，检查其状态是否为PEDNING

* 图片展示:
![](../static/reportImg/test-2.png)
---

# Feature 3

- Sorting pets by **category** and/or **tag** on available page.

  - One **category** and one **tag** could be chosen at the same time.

## Justification

- Most visitors have a clear purpose of which **category**/**tag** of pet they like, so they want to filter the inventory.

- It is more efficient for the shopkeeper to gain an overview and manage available pets by sorting.

- Visitors without a clear purpose could also get an overview of what **category**/**tag** of pets are on sale and browse pets with more comparability.

# Testing
* We test this feature by automated integration testing tool: cypress.

  Testing Process: 

  * install cypress

  * create testing file : 

    - web-softwaretools-plain/cypress/integration/showFliter.spec.js

  * change directory to web-softwaretools-plain

  * commands: 

    ```
    npm install
    ./node_modules/.bin/cypress run --spec ./cypress/integration/showFliter.spec.js
    ```

  * 测试文件

    

    file showFliter.spec.js?????? in where??????

  * Testing details：

    1. Sorting by **category**: 

       - whether specific kind of pets could be sorted by **category** from all available pets??. 判断是否能根据**category**寻找pets.
       - whether the sorted pets' **category** id equals???判断pet cards 的id是否都等于category

    2. Sorting by **tag**: 

       - whether specific kind of pets could be sorted by** tag** from all available pets. 判断是否能根据category寻找pets.

       - whether the sorted pets' **tags** contain the chosen **tag**

         ???判断pet cards 的id是否都等于category

    3. 判断是否能根据tag寻找pets。判断pet的tags是否包括寻找的tag

  * Testing result:
    ![](C:\Users\Chent\OneDrive\static\reportImg\test-3.png)

  
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
* 这部分使用的是intergation测试，自动测试化工具是cypress。

  * 如何测试：pull代码，进入web-softwaretools-plain，

    ```
    npm install
    ./node_modules/.bin/cypress run --spec ./cypress/integration/rankJumpShow.spec.js
    ```

  * 测试文件

    web-softwaretools-plain/cypress/integration/rankJumpShow.spec.js

  * Testing details：

    1. Redirecting to available page  with correct **category** parameter by clicking icon: 

       - when a category icon is clicked, the page redirected to is correct (By testing the redirecting url).

    2. Inputing correct **category** into the sorting form automatically after redirecting: 

       - whether specific kind of pets could be sorted by** tag** from all available pets. 判断是否能根据category寻找pets.

       - whether the sorted pets' **tags** contain the chosen **tag**

         ???判断pet cards 的id是否都等于category

    3. 判断是否能根据tag寻找pets。判断pet的tags是否包括寻找的tag

  * 测试内容：

    1. 找到宠物icon后点击，可以跳转到正确的页面。（  通过判断跳转后的url是否为正确的url）
    2. 跳转到show页面后，页面的category的input的内容为正确的宠物。有一跳转的时候会带上category=${pet}的参数，只需要检查该值是否和category的input的值相等即可

  * 图片展示:
    ![](../static/reportImg/test-4.png)

---
