# CS3200_FinalProject

Database for Reading List

Yuyang Wei / Manami Kanemura

Brief description of the project:
We created a database for reading list. This database stores users’ information, authors' information, and the information about literature. We expect that each user has different their reading styles. For instance, one likes novels, and another prefers poems. We adapted such diversity by enumerating genre. 

Link to the latest data model as a single UML class diagram

Link is https://lucid.app/lucidchart/invitations/accept/inv_b12c236b-2eda-4fbb-9d6f-1d568fda43e5.
Or you could just check the uml pdf from the files we submit

Description of user data model
User domain has the following columns: user id (int), username(str), password(str), date-of-birth(str), first name(str), and last name(str), favorite-writer(str), and email(str). User domain is connected to the writer domain as one to many. This domain stores users’ basic information and their favorite writer. For future implementation, we may be able to make a function such as suggesting books written by users’ favorite author. 

Description of the domain object data models 
Writer 
Writer domain is connected to user domain as many to one relation and stores writers’ information. It has the following columns: writer id(int), user id(int), date-of-birth(int), nationality(str). Users can add their reading list by author and choose literary work to read from their listed-writer.

Description of the domain object to domain object relationship
Literature 
Literature domain is connected to the writer domain as many to one and stores the literary work. Literature domain has the following columns: id (int), writer id (int), genre (str), and title(str). One writer can have many literatures such as books, poems, and articles, which was enabled by writer id as foreign key. 

Description of the portable enumeration(s)
We implemented the portable enumeration as genre in literature: novel, poem, bibliography, fiction. We understand that there are many kinds of genres, so it is also our future implementation to add diverse genres. 

Description of the user interface requirements
In the main page (User List), there are list of users and their information such as their usernames, passwords, and emails. The button under the title of the page will take you to another page to create a user. Another button next to each user, “writers”, will take you to a page that describes users-selected writers. If you click a user from user list, there are two buttons: edit user and delete. If you click edit user, you can edit the user information while you can delete the user if you click “delete”. 

Future implementation
There are two future implementations. The first one is creating a function that suggest users recommended books from your favorite author. This function will prevent a user from missing any publications of his favorite writer. The second one is to increase the kinds of genres. This time, we’ve made novel, fiction, poem, and bibliography. However, we do understand the diversity of genres. As we implement much more genres, we expect the number of users and diversity of users in terms of age, gender, and occupations also increase. Though we were able to create this database in the limited time, there are plenty of spaces to enlarge this database and its possibility. Someday, we hope to make such an ideal database. 
