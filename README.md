# resource-list

This is a project of the Service Design Lab, part of the Office of Design & Delivery at CTM

This project is initialy focused on the aims our Living Resource Project. However, we've identified that the problems of this project occur often enough that there is great potential for avoiding reduplication of effort by building a modular technology solution that can address those common needs. 

- We have a list of resources, stored on the city's Socrata data portal. This gets us a nice API to work with, but the interface Socrata provides to view and update data is very data centric and not persona centric.

### Personas

Primary targeted persona at the moment is a caseworker who is relativley new. 

## Intial spike/proof of Concept: A caseworker-focused interface of the living resource guide

- The city’s data portal will serve as the backend for the data
    - This saves a tremendous amount of current and future effort towards developing a backend for this application, not to mention deploying and maintaining that system. Socrata gives us a place to store the data that is already managed and paid for, with an API we don’t have to write. 

### Three pages/views:

(TODO: flesh these out into Github issues as user stories)

- List
  - As a caseworker, I want to see an up to date list of all available resources so I can find what my client needs and share that information.
  Get the data into the site as a data template 
- Detail
  - As a caseworker, I want to be get details on a specific resources so that I can help them get the specifics of the resource
    Get the data into the site as a data template, provide different info an alternate layout 
- Update
  - As a caseworker, I want to be able to easily update information on a resource or add a new resource so that this information stays up to date for myself and everyone
  Embed socrata form, eventually with validation
  
- The List & Detail views will also have printable versions 
- The List view will dynamically load the data from Socrata so it will always be up to date
- This data can be filtered by the user, and the filter and query actions taken by the user will update the relevant filter parameters in the URL of the page. 
- The user can then bookmark or save these URLs to share with others, re-run the same queries at a later date, or to later print the same version of a list but have it be up to date. 


