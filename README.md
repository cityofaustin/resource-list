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

This inital proof of concept version is based off of an [open-source project](https://github.com/City-Bureau/chi-covid-resources) created by by [City Bureau](https://www.citybureau.org/). 

## Setup

You'll need [Node](https://nodejs.org/en/) installed and an [Airtable](https://airtable.com/) account set up with the fields in [`src/pages/index.js`](./src/pages/index.js).

The quickest and easiest way to make sure you have the fields required is to:

1. Clone this repository to a location of your choosing: `git clone https://github.com/City-Bureau/chi-covid-resources.git`

1. Make a copy of this Airtable [COVID Resource Finder base template](https://airtable.com/universe/expTcZwYlcgfz7c3U/covid-resource-finder-template). 

1. Copy the `.env.sample` to `.env` and fill in the values with your Airtable [API key](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-) and information about your base. The minimum requirements to build the site correctly are values for AIRTABLE_BASE, AIRTABLE_KEY, and AIRTABLE_TABLE. You can also provide a value for the view, like so:
    ```
    AIRTABLE_BASE="appkz5EStpFHaq9jv"
    AIRTABLE_KEY="yourairtableapikey"
    AIRTABLE_TABLE="Directory"
    AIRTABLE_VIEW="Approved"
    REPORT_ERROR_PATH=
    ```
    Fetching and populating this data relies on the [gatsby-source-airtable](https://www.gatsbyjs.org/packages/gatsby-source-airtable/). 

1. To make sure that form submissions will work correctly,replace the `form-id` keys in `src/intl/` with the Airtable IDs of your forms. You can find the form ID at the end of the URL displayed in the "Share form" control of your form view `https://airtable.com/{FORM_ID}`.

1. Once you've set up the prerequisites, you can install dependencies and start a server at [localhost:8000](http://localhost:8000) with:

    ```bash
    npm install
    npm start
    ```

### Reporting Resource Errors

If you want to use the functionality for reporting errors with resources, you'll need to deploy an AWS Lambda function using the [`serverless-airtable-button`](https://github.com/City-Bureau/serverless-airtable-button) repo. Alternatively you can replace the custom form modal with an Airtable embed using the `AirtableEmbedModal` component and setting the `prefill_Resource` param in the `queryParams` property to prefill the flagged resource.

### Internationalization

Multilingual support is provided through [`gatsby-plugin-intl`](https://github.com/wiziple/gatsby-plugin-intl). Translated phrases are located in JSON files in the [`src/intl/`](./src/intl/) directory, and translated Markdown pages are in [`src/markdown/static`](./src/markdown/static/).

Some of the content is specific to City Bureau, but the majority of the translated phrases are not. You can configure which languages are displayed by modifying the `languages` array in [`gatsby-config.js`](./gatsby-config.js).

The Python script [`scripts/load_i18n.py`](./scripts/load_i18n.py) is used to load translated content directly from a publicly viewable Google Sheet with this structure:

| ID    | English | Spanish   |
|-------|---------|-----------|
| home  | Home    | Inicio    |
| about | About   | Acerca de |

To load the Spanish column's translations for all of the keys in the `KEYS` list, you'll need to set the `SPREADSHEET_ID` environment variable to the Google Sheet ID (found in the URL) and run:

```bash
make src/intl/i18n.csv
cat src/intl/i18n.csv | python scripts/load_i18n.py Spanish > src/intl/es.json
```

You can replace "Spanish" in the command with the column name that has completed translations.

## Deploy

To deploy the AWS S3 and Cloudfront, create an S3 bucket that allows static site hosting and a Cloudfront distribution pointing to the bucket's web hosting endpoint. Set the `S3_BUCKET` and `CLOUDFRONT_ID` environment variables with your bucket and distribution ID, and then with GNU Make and the [AWS CLI](https://aws.amazon.com/cli/) installed run `make deploy`.


