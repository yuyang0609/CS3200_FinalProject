# Database Design (CS3200) Project

<ins>1. Name of Project</ins>

Music Storage Model

<ins>2. Name of the team</ins>

Named 'CS Group' on Canvas

<ins>3. Team Members / Sections</ins>

Sean Hoerl, Nick Zoarski, George Littlefield (all in 1:35pm Tue/Fri section)

<ins>4. Brief description of the project</ins>

We have come up with a basic data model for storing artists, their albums, and the songs that exist within those albums. A possible use case is a music label trying to catalog all of its artists, albums, and songs. The current model would allow artists to log in as themselves and add their own songs and albums. The data model could also be expanded to add support for featured artists (songs with multiple artists), bands, and labels.

<ins>5. Link to UML diagram</ins>

[UML Diagram](https://github.com/shoerl/db_design_project/blob/master/db_design_final_project_UML.pdf)

<ins>6. Description of the user data model</ins>

For our user data model we decided to make a artist entity, which represents a artist and also a user of the website. This made sense for the use case of artists logging in as themselves and cataloging their own music. The use case for a band would be to have one member sign up, and then represent the band. The fields we have currently in this model are the first name of the artist in string form, last name of the artist in string form, username of the artist in string form, password of the artist in string form, email of the artist in string form, date of birth of the artist in date form, and their artist name in string form.

<ins>7. Description of the two domain object data models</ins>

1. The first domain object we have is a album entity, which represents a album from a artist. This made sense for a music data model. The fields for the album are the title of the album in string form, the artwork path in string form (for displaying the artwork of album on website), and the release date of the album in date form. The album would also have a foreign key to the artist who owns the album. We considered putting a genre for the album too, but decided it fit better in the song entity as a album could have songs of differing genres.
2. The second domain object we have is a song entity, which represents a song from a album. The fields for the a song are the title of the song in string form, the length of the song in decimal form (bigdecimal in java), the genre of the song in genre form, and explicitness of the song which is a boolean (boolean in java, tinyint in sql). We chose to use tinyint to represent booleans here as it was the best option. The song would also have a foreign key to the album which the song belongs.

<ins>8. Description of the user to domain object relationship</ins>

The relationship between artists and album is our user to domain object relationship. It is a one to many relationship from artists to albums. This means that one artist can have many albums. The album holds a foreign key to the artist, which is how this relationship is accomplished. This relationship inherently makes sense in our domain. There is also a constraint on the album table for the artist foreign key. This enforces the relationship and also removes related entities in the case that a artist gets removed (so the albums get removed as well).

<ins>9. Description of domain object to domain object relationship</ins>

Our domain object to domain object relationship is the relationship between albums and songs. It is a one to many relationship from albums to songs. This means that one album can have many songs. The song holds a foreign key to the album, which is how this relationship is accomplished. This relationship again inherently makes sense in our domain, as albums have many songs. This relationship also implies that there is a one to many relationship between artists and songs. There is also a constraint on the song table for the album foreign key. This enforces the relationship and also removes related entities in the case that a album gets removed (so the songs get removed as well).

<ins>10. Description of the portable enumeration</ins>

We chose to use genre as our portable enumeration. It is implemented through the use of a genre table which has one column (the genre) and constraints on the tables which use the genre table. This means that within our song table the genre must always be a given value within the genre table, since there is a constraint. Genre made sense as an enumeration because there are a fixed set of genres, and there should always be a genre associated with a song. The values we chose for genre are: BLUES, JAZZ, ROCK, COUNTRY, SOUL, DANCE, HIPHOP, POP


<ins>11. Description of the user interface requirements</ins>
- Artist List - displays a list of all artists
- Artist Editor - displays a particular artist for editions or allows creating a new artist, and navigate to the albums for that artist
- Album List - displays a list of all albums or all albums for a particular artist
- Album Editor - displays a particular album for editing or allows creating a new album, and navigate to the songs for that album
- Song List - displays a list of all songs or all songs for a particular artist or all songs for a particular album
- Song Editor - displays a particular song for editing or allows creating a new song, and navigate to the artist/album associated

<hr/>

<ins>Problem Statement</ins>

The problem that our project is trying to solve is that of a music label attempting to tally up all of the albums for their respective artists. It also could be a music label attempting to find the genre distribution for all of the songs of their artists. This would require that the music label has a outlet to view all of their artists, the albums of their respective artists, the songs of those respective albums, and the respective metadata for those entities (album title, song length, etc.). Since these management entities are often picking up new artists and dropping others, having a interface/model which allows for easy updating/adding/removing is very important. Likewise since these artists are often making new music, it is important to have a interface/model that allows for the songs and albums to be added.

Example problem: When was the album Nevermind by Nirvana released?

<ins>Solution Statement</ins>

The solution for a music label who could not figure out all of the albums their respective artists have, or who could not figure out who all of their artists are would be a database and user interface like ours. This was solved in many steps. First we created a database using SQL. Then we created tables in our database for the domain objects we are trying to model (artist, album, song, genre). Then we made a Java Spring API for our database and implemented CRUD operations for all of the domain objects. This required us to create model classes for each of our domain objects, and then DAO classes as well for the CRUD operations. This allowed us to easily create, read, update, and delete entities remotely from any of our tables.

A web interface was then built to allow for a user interface for our CRUD operations. This was done using the React Javascript library. We decided to implement List and Edit screens for each of our main domain objects (artist, album, song). The user interface is laid out logically in respect to the database relationships. This means that to have a album there must be an artist, and to have a song there must be a artist and album. We were able to implement this data flow just using the navigation/routing.

From the web interface, you can create an artist, create albums for that artist, and create songs for those albums.

Example solution: Our group discovered that Nevermind was released on September 24th 1991. This was accomplished using the SQL database, Java Spring API, and React Javascript front end.

<ins>User</ins>

A typical user for our solution would be an employee of a music label / management entity, or one of the artists under the music label / management entity. In order for artists to use the tool properly, the interface would need to be expanded to allow for sign up/login, and to also ensure that artists can only update/add/delete from objects that relate to them (in other words they would only be able to update their own songs and albums).

An employee of a music label / management entity is our target user because they have a need to store this data. In other words those are people who would benefit from being able to catalogue and store this type of data. For example, a music label may want to figure out the average song length for all of the songs under their label. This project would give them a database / user interface that allows them to do that.

In its current form an employee of the music label would add the artists themselves, and then add the songs/albums as well. This would give them an interface to add all of the artists/albums/songs who are under their label.

<ins>Domain Objects</ins>

1. The first domain object we have is a album entity, which represents a album from a artist. This made sense for a music data model. The fields for the album are the title of the album in string form, the artwork path in string form (for displaying the artwork of album on website), and the release date of the album in date form. The album would also have a foreign key to the artist who owns the album. We considered putting a genre for the album too, but decided it fit better in the song entity as a album could have songs of differing genres.
2. The second domain object we have is a song entity, which represents a song from a album. The fields for the a song are the title of the song in string form, the length of the song in decimal form (bigdecimal in java), the genre of the song in genre form, and explicitness of the song which is a boolean (boolean in java, tinyint in sql). We chose to use tinyint to represent booleans here as it was the best option. The song would also have a foreign key to the album which the song belongs.
