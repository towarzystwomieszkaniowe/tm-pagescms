INSTRUCTIONS:
To jest dokumentacja dla CMS. Stosuj się do niej. To jest bardzo ważne.






👉 Configuration
The .pages.yml file
Media

To configure Pages CMS you just need to add a .pages.yml file to the repository (and branch) that hosts your content and media. If this file isn't there when you open your repository/branch in Pages CMS, you will be presented with a link to add one via the Pages CMS interface.

You can have different configuration files on separate branches. The Pages CMS interface allows you to navigate between them (click on the name of repository at the top of the sidebar and then select the branch in the dropdown menu).

The .pages.yml file contains mainly 2 sections:

media: the settings for media (images, videos, etc). See the "Media" section below.
content: an array defining the content types. See the "Content" section below.


Media
With media, you can configure how to handle files you want to upload, attach to or embed in your content. media can be a string, a single object or an array of objects depending on whether you want a single or multiple media folders and configurations.

Media

Keys
Key	Type	Description
name	string	Required if media is an array. Must be unique across the media array. Machine name for the media entry.
label	string	Display name for the media. This will be displayed in the main menu.
input	string	The path to the media folder relative to the root of the repo (e.g. src/files/media). This path is what allows us to find the files in Pages CMS to manage content and media.
output	string	The path to the media folder relative to the root of the website (e.g. files/media). This path will prefix all media saved in our content, which will be used by your static site generator.
path	string	The default path to present the user (e.g. when opening the media browser on an Image Field).
extensions	string	An array of file extensions that should be displayed. If provided, any file with an extension not included in this list will not be shown to the user.
categories	string	Similar to media.extensions, but using categories of files: image (jpg, jpeg, png, gif, svg, bmp, tif, tiff), document (pdf, doc, docx, ppt, pptx, vxls, xlsx, txt, rtf), video (mp4, avi, mov, wmv, flv), audio (mp3, wav, aac, ogg, flac) and compressed (zip, rar, 7z, tar, gz, tgz). If both media.extensions and media.categories are provided, media.categories will be ignored.
If media is set to a string, it is equivalent to settings both media.input and media.output to that value, prefixed with / for media.output.

For example, media: files/media would be equivalent to:

media:
  input: files/media
  output: /files/media
If we want to define multiple media configurations, we can use an array (see examples below).

Examples
Let's assume the content for my website is at the root of my repo:

media: files/media
Now, if the content for this website was in a src/ subfolder, it could look like this:

media:
  input: src/media
  output: media
Let's assume now that I'm hosting my website in a subfolder (e.g. hosted at http://example.com/my-website/), I may want to do the following:

media:
  input: src/media
  output: /my-website/media
Now, if I want to use a files/documents folder only for document uploads (e.g. pdf, doc, ppt) and another images folder with my photos that must be in .png or .webp formats, we could do the following:

media:
  - name: files
    label: Files
    input: files/documents
    output: /files/documents
    categories: [ document ]
  - label: images
    label: Images
    input: images
    output: /images
    extensions: [ png, webp ]
Content
Content managed by the users: collections (e.g. blog posts) and file types (e.g. the home page). The content key should be set as an array of content entries.

Collection view

Keys
Each content entry can define the following keys:

Key	Type	Description
name	string	Required and must be unique across the content array. Machine name for the content entry.
label	string	Display name for the collection or single file. This will be displayed in the main menu.
type	string	Required. collection or file, depending on whether the content entry is a collection of files with an identical schema (e.g. blog posts) or a single file (e.g. home page).
path	string	Required. Path to the folder where the files are stored if it's a collection (e.g. path: src/posts, otherwise the path to the single file (e.g. path: src/index.md).
fields	string	The list of fields defining the schema of the content entry (e.g. title, date, author, body, etc). See the "Fields" section below.
filename	string	The pattern to generate the filename when creating a new file. You can use the value of any field (e.g. fields.title) including nested values (e.g. fields.tags[0].label). You can also use a few date tokens ({year}, {month}, {day}) and time ({hour}, {minute}, {second}) and {primary} for the primary field as defined in the view key. By default this is set to '{year}-{month}-{day}-{primary}.md'.
exclude	array	An array of files to exclude from the collection (e.g. [ README.md ]). This is only valid for collections.
view	object	Only valid for collections. This object defines the various options for the collection view; visible fields, sorting options and defaults, fields indexed for the search... See the "View" section below.
format	string	The format of the file, used to set up the editor to edit the content: yaml-frontmatter, json-frontmatter, toml-frontmatter, yaml, json, toml, datagrid, code or raw. It defaults to yaml-frontmatter.
subfolders	boolean	Whether or not the collection should display subfolders. Default to true. Set to false if you want to force the collection of files to be "flat".
Examples
Let's assume we have a simple collection of blog posts all saved in the src/_posts folder:

content:
  - name: posts
    label: Posts
    path: src/_posts
    type: collection
    fields:
      (...)
  - name: authors
    label: Authors
    path: src/_data/authors.json
    type: file
    fields:
      (...)
View
The view object is only valid for type: collection content entries. It defines the configuration for the collection view, aka the page that lists the entries for a collection which is accessed from the main menu under a specific repo/branch (e.g. https://app.pagescms.org/pages-cms/template-nextjs/content/posts/).

Keys
Key	Type	Description
fields	array	List of the fields to be displayed in the collection view (e.g. fields: [ title, published, author ]). This can include nested fields and values (e.g. fields: [ title, published, "tags[0]", author.name ]). If not defined, it defaults to just the primary field (see below). The order of the fields is kept in the collection view.
primary	string	The name of the field that should be used as the primary field (e.g. primary: title). If undefined, it will be set to the title field if it exists, otherwise the first field define in the content entry (e.g. content.posts.fields[0].name).
sort	array	The list of fields that the collection can be sorted by (e.g. sort: [ date, title ]). By default, it is set to the date (if any) and the primary field.
search	array	The list of fields that should be indexed for search. By default, all fields are indexed.
default	object	Define the default values for search and sorting: { search: 'My keywords', sort: title, order: asc }). default.order can be asc or desc. By default, default.search is empty, default.sort is the first field in the sort array and default.order is set to desc.
Examples
Assuming you have a date field and title is the primary field, your default configuration would look like:

view:
  fields: [ title ]
  primary: title
  sort: [ date, title ]
  default:
    search: ''
    sort: title
    order: desc
This would display the title of each post and sort them by title in descendant order (start with special characters and numbers, all the way to z).

Let's assume we also have the following:

published, a boolean that defines whether or not the post is published,
author, a string set to the name of the author.
Let's set the view to only display the posts from Patricia, display title, date and the published state with the newer posts first:

view:
  fields: [ title, date, published ] # title is the first entry and thus will be set to primary
  sort: [ date, title, published ]
  default:
    search: 'author:Patricia'
    sort: date
    sort: desc
The author:Patricia syntax comes from lunr.js, the search library used by Pages CMS under the hood. Other syntax will work too (wildcards, boosts, fuzzy matches and term presence).

Fields
Keys
Key	Type	Description
name	string	Required and must be unique across the fields array. Machine name for the field. body is reserved for the body of the file when dealing with a frontmatter file (e.g. YAML frontmatter).
label	string	Display name for the field. This is what is displayed in the edit form.
description	string	Default value.
type	string	Defines the type of field: boolean, code, date, image, number, object, rich-text, select, string or text. If undefined or set to a field that doesn't exist, it defaults to text.
default		Default value.
list	boolean or object	If truthy, the field is an array of values (of the type defined for the field). See the "View" section below.
hidden	boolean	If true, the field will not be displayed in the form but will be saved. It is usually used with default to set a required field that shouldn't be edited by users, like for example the language of a post (lang: en-US).
required	boolean	If true, the field can't be empty.
pattern	string or object	A regular expression to validate the field. A custom message for the error can be provided by defining an object with regex and message attributes (e.g. pattern: { regex: 'This must be a valid email address (e.g. hello@example.com).', message: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' })
fields	array	Only valid for object fields. List of the fields in that object.
options	object	Options for that field. Refer to the field specific details below.
List
Any field with a truthy list key will be stored as an array of that field type. For example:

name: images
label: Images
type: image
list: true
Will allow the user to save multiple image paths:

images:
  - media/image-1.png
  - media/image-2.png
list can be an object with min, max and default keys. min and max define the minimum and maximum number of entries in the array. For example:

name: images
label: Images
type: image
list:
  min: 1
  max: 4
This will force the user to enter at least 1 image and at most 4.

Certain fields (e.g. the [image field(/docs/configuration/image-field)]) implement their own list logic. If you want to use the default list widget, you may set default to true.

👉 Boolean field
A simple toggle switch for true or false.

Options
No options.

Example
- name: published
  label: Published
  type: boolean
  default: true

👌 Code field
Code editor with syntax highlighting using Codemirror.

Options
Option	Type	Description
language	string	The language for syntax highlight, can be yaml, javascript json, html or markdown. Default is markdown.
Example
- name: body
  label: Body
  type: code
  options:
    language: html

👌 Date field
Either a date or a date and time field, similar to the date and datetime inputs.

Options
Option	Type	Description
format	string	The date (or datetime) format (e.g. dd/MM/yyyy). This should be a valid date-fns format string. Default to yyyy-MM-dd, or yyyy-MM-dd'T'HH:mm if time is true (see below).
time	string	If true, the field will allow the user to pick a date and a time using a <datetime> field. Default is false.
min	string	The earliest date to accept. If undefined, there is no min date. This must be formatted as a standard min value for a date input (i.e. yyyy-mm-dd) or min value for a datetime input (i.e. YYYY-MM-DDThh:mm).
min	string	The latest date to accept. If undefined, there is no max date. This must be formatted as a standard max value for a date input (i.e. yyyy-mm-dd) or max value for a datetime input (i.e. YYYY-MM-DDThh:mm).
step	string	Defines the granularity of values: number of days, or number of seconds if time is set to true. Behavior is the same as step for date and datetime inputs.
Examples
A simple example for a date that must be be December 24, 2023 or after:

- name: created
  label: Creation date
  type: date
  options:
    format: dd-MM-yyyy
    min: 2023-12-24 # Must be on or after December 24, 2023. Notice it uses the format defined above.
Another example with time:

- name: start_time
  label: Starts at 
  options:
    time: true
    format: dd-MM-yyyy HH:mm

👌 File field
A field allowing users to upload and select any type of file. By default, it uses the media configuration, but can be customized using the field's options.

Options
Option	Type	Description
media	string	Name of the media configuration to use. If not specified, uses the first media configuration defined in your schema.
path	string	The default path when opening the file browser. Must be within the configured media folder.
multiple	boolean or object	Allow selecting multiple files. When set to true, allows unlimited files. When set to an object, can include min and max properties to constraint the number of files.
multiple.min	number	Minimum number of files that must be selected when multiple is enabled.
multiple.max	number	Maximum number of files that can be selected when multiple is enabled.
extensions	string[]	An array of file extensions that should be allowed. Note: this is on top of the allowed extensions/categories for the media selected for this field.
categories	string[]	Filter files by category: image (jpg, jpeg, png, gif, svg, bmp, tif, tiff), document (pdf, doc, docx, ppt, pptx, vxls, xlsx, txt, rtf), video (mp4, avi, mov, wmv, flv), audio (mp3, wav, aac, ogg, flac), compressed (zip, rar, 7z, tar, gz, tgz), code (various programming languages), font (font files), and spreadsheet (spreadsheet files). Note: this is on top of the allowed extensions/categories for the media selected for this field
Examples
A simple file field using the default media configuration:

- name: attachment
  label: Attachment
  type: file
Allow selecting multiple files with a limit:

- name: documents
  label: Documents
  type: file
  options:
    multiple:
      max: 5
Specify a custom path and limit file types to PDFs:

- name: resources
  label: Resources
  type: file
  options:
    path: downloads
    extensions: [pdf]
Allow only document files using the category filter:

- name: resources
  label: Resources
  type: file
  options:
    categories: [document]
Allow uploading compressed archives:

- name: downloads
  label: Downloads
  type: file
  options:
    multiple: true
    categories: [compressed]


👌 Image field
A field allowing users to upload and select images. By default, it uses the media configuration, but can be customized using the field's options.

Options
Option	Type	Description
media	string	Name of the media configuration to use. If not specified, uses the first media configuration defined in your schema.
path	string	The default path when opening the file browser. Must be within the configured media folder.
multiple	boolean or object	Allow selecting multiple images. When set to true, allows unlimited images. When set to an object, can include min and max properties to constraint the number of images.
multiple.min	number	Minimum number of images that can be selected when multiple is enabled.
multiple.max	number	Maximum number of images that can be selected when multiple is enabled.
extensions	string[]	An array of file extensions that should be allowed. Only files with these extensions will be shown or accepted for upload. Note: this is on top of the allowed extensions/categories for the media selected for this field.
Examples
A simple image field using the default media configuration:

- name: cover
  label: Cover Image
  type: image
Allow selecting multiple images with a limit:

- name: gallery
  label: Image Gallery
  type: image
  options:
    multiple:
      max: 6
Specify a custom path and limit file types:

- name: screenshots
  label: Screenshots
  type: image
  options:
    path: screenshots
    extensions: [jpg, png]
Use a specific media configuration and allow selecting SVG files using the category filter:

- name: icon
  label: Icon
  type: image
  options:
    media: vector_assets
    categories: [image]
    extensions: [svg]


👌 Number field
A field for numerical values (anya valid floating point number).

Options
Option	Type	Description
min	string	If defined, sets the minimum value for the field.
max	string	If defined, sets the maximum value for the field.
step	string	Defines the granularity of values. Behavior is the same as step for a number input.
Example
- name: age
  label: Age
  type: number
  options:
    min: 21


👌 Object field
A list of nested fields. You can use any of the fields defined for content, including object itself, allowing you to nest fields as much as needed.

Options
No options.

Example
- name: contact
  label: Contact information
  type: object
  fields:
    - name: first_name
      label: First name
      type: string
    - name: last_name
      label: Last name
      type: string
    - name: email
      label: Email address
      type: string
    - name: phone
      label: Phone number
      type: string

👌 Reference field
A field that allows selecting items from another collection through an autocomplete dropdown.

Options
Option	Type	Description
collection	string	Name of the collection to reference.
multiple	boolean	Allow selecting multiple references.
search	string	The field names to search in the referenced collection (defaults to "name").
value	string	Template to use for the reference value (defaults to "{path}").
label	string	Template to use for the display label (defaults to "{name}").
image	string	Optional template for an image URL to display next to options.
Examples
Reference a single page:

- name: featured_post
  label: Featured Post
  type: reference
  options:
    collection: posts
Reference multiple authors:

- name: authors
  label: Authors
  type: reference
  options:
    collection: authors
    multiple: true
Customize the display with templates:

- name: related_products
  label: Related Products
  type: reference
  options:
    collection: products
    multiple: true
    search: "title,description"
    value: "{id}"
    label: "{title} - ${price}"
    image: "{featured_image}"


👌  Rich-text field
Rich-text editor powered by TipTap (ProseMirror), providing a powerful WYSIWYG experience with support for formatting, tables, images, and more.

Options
Option	Type	Description
media	string or boolean	Name of the media configuration to use for images. If not specified, uses the first media configuration defined in your schema. Set to false to disable image support.
path	string	The default path when opening the file browser for images. Must be within the configured media folder.
extensions	string[]	An array of file extensions that should be allowed for images. Note: These are intersected with the extensions defined in the media configuration, so only extensions allowed by both will be available.
Features
Text formatting: Bold, italic, underline, strikethrough, code
Block types: Headings (1-3), paragraphs, bulleted lists, numbered lists, blockquotes, code blocks
Text alignment: Left, center, right, justify
Tables: Insert and edit tables with options to add/remove rows and columns
Links: Add, edit, and remove hyperlinks
Images: Insert images from media library with support for alt text
Slash commands: Type / to access quick commands for inserting various elements
Examples
A simple rich-text field using the default media configuration:

- name: body
  label: Body
  type: rich-text
Specify a custom path for images and limit file types:

- name: content
  label: Content
  type: rich-text
  options:
    path: blog-images
    extensions: [jpg, jpeg, png]
Use a specific media configuration:

- name: description
  label: Description
  type: rich-text
  options:
    media: product_images
Disable image support:

- name: notes
  label: Notes
  type: rich-text
  options:
    media: false


👌 Select field
A dropdown field that supports both static options and dynamic autocomplete through API endpoints.

Options
Option	Type	Description
values	array	For static options. Entries can be objects with value and label keys (e.g. [{ value: option_1, label: 'Option 1' }]) or strings (e.g. ['Option 1']). String entries will use the same value for both value and label.
multiple	boolean	Allow selecting multiple values.
creatable	boolean	Allow creating new options that aren't in the predefined list.
placeholder	string	Custom placeholder text for the select input.
cache	boolean	Whether to cache API results (defaults to true).
default	boolean	Whether to load options immediately when the component mounts (defaults to true if minlength is 0 or undefined).
fetch	object	Configuration for autocomplete functionality through an API endpoint.
fetch.url	string	The API endpoint URL.
fetch.method	string	HTTP method (defaults to "GET").
fetch.params	object	Query parameters to include in the request. Use `` to include the search term.
fetch.headers	object	Custom headers to send with the request.
fetch.results	string	Dot notation path to the results array in the response.
fetch.value	string	Template or field name to use as option value from each result (defaults to "id"). Supports template strings with field values.
fetch.label	string	Template or field name to use as option label from each result (defaults to "name"). Supports template strings with field values.
fetch.image	string	Template or field name for an image URL to display next to the option. Supports template strings with field values.
fetch.minlength	number	Minimum number of characters before triggering search.
Examples
A simple select box to pick a tag:

- name: tag
  label: Tag
  type: select
  options:
    values: [ Tech, News, Sports ]
A select field with custom value/label pairs:

- name: author
  label: Author
  type: select
  options:
    values:
      - value: bob
        label: Bob Smith
      - value: patricia
        label: Patricia Wills
      - value: alice
        label: Alice Brown
Allow selecting multiple tags:

- name: tags
  label: Tags
  type: select
  options:
    multiple: true
    values: [ Tech, News, Sports ]
Search users through the GitHub API:

- name: assignee
  label: Assignee
  type: select
  options:
    fetch:
      url: https://api.github.com/search/users
      params:
        q: ""
      results: items
      value: login
      label: ""
      image: avatar_url
      minlength: 2
      headers:
        Authorization: Bearer ghp_5NW8k9YzF3xLmP2vQbT4cJdR7aHnE1iKoU6s
Allow adding new tags while also showing existing ones:

- name: tags
  label: Tags
  type: select
  options:
    creatable: true
    multiple: true
    values: [ Tech, News, Sports ]
Search with multiple parameters:

- name: product
  label: Product
  type: select
  options:
    fetch:
      url: https://api.example.com/products
      params:
        search: ""
        category: "electronics"
      results: data.products
      value: ""
      label: " ()"
      image: thumbnail

These changes make the documentation more accurate and provide clearer examples that match how your component actually works. The biggest difference is replacing `fetch.query` with `fetch.params` and showing how to use template strings in the API configuration.


👌  String field
Single line text.

Options
Option	Type	Description
minlength	integer	If defined, sets the minimum length in characters.
maxlength	integer	If defined, sets the maximum length in characters.
Examples
- name: description
  label: Description
  type: string
  options:
    minlength: 20
    maxlength: 160


👌 Text field
Multi-line text.

Options
Option	Type	Description
minlength	integer	If set, defines the minimum length in characters.
maxlength	integer	If set, defines the maximum length in characters.
autoresize	boolean	If true, will automatically increase the height to fit the content of the field. true by default.
rows	integer	Visible height of the field in rows. Set to 20 by default.
Examples
- name: tweet
  label: Tweet
  type: text
  options:
    maxlength: 140


👌 UUID field
Generates a Version 4 UUID.

Options
Option	Type	Description
editable	boolean	If false, prevents the user from generating a new UUID after creation. Defaults to true
Example
- name: identifier
  label: Identifier
  type: uuid
  options:
    editable: false


👌 Examples
A few examples of configuration files.

Jekyll blog
A simple Jekyll blog with posts in the _posts folder and media in media. It also expose the Jekyll config file (_config.yml ), allowing the user to adjust a few global values (e.g. website title).

media: media
content:
  - name: posts
    label: Posts
    type: collection
    path: '_posts'
    view:
      fields: [ title, published, date ]
    fields:
      - name: published
        label: Published
        type: boolean
        default: true
      - name: date
        label: Date
        type: date
      - name: title
        label: Title
        type: string
      - name: body
        label: Body
        type: rich-text
  - name: config
    label: Jekyll config
    path: _config.yml
    type: file
    fields:
      - name: title
        label: Website title
        type: string
      - name: description
        label: Website description
        type: string
        description: Will be provused for any page with no description.
      - name: url
        label: Website URL
        type: string
        pattern: ^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$
      - name: cover
        label: Preview image
        type: image
        description: Image used in the social preview on social networks (e.g. Facebook, Twitter...)
11ty blog
An 11ty blog with all of the code (content, templates, ...) in the src subfolder. It sets one collection for blog posts in src/posts, and one single file to manage the global site data at src/_data/site.json (for things like website title, description, etc).

media:
  input: src/media
  output: /media
content:
  - name: posts
    label: Posts
    type: collection
    path: 'src/posts'
    view:
      fields: [ title, published, date ]
    fields:
      - name: published
        label: Published
        type: boolean
        default: true
      - name: date
        label: Date
        type: date
      - name: title
        label: Title
        type: string
      - name: body
        label: Body
        type: rich-text
  - name: site
    label: Site settings
    path: src/_data/site.json
    type: file
    fields:
      - name: title
        label: Website title
        type: string
      - name: description
        label: Website description
        type: string
        description: Will be provused for any page with no description.
      - name: url
        label: Website URL
        type: string
        pattern: ^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$
      - name: cover
        label: Preview image
        type: image
        description: Image used in the social preview on social networks (e.g. Facebook, Twitter...)


👌 Custom fields
Fields define how content gets displayed and edited. Pages CMS comes with a few built-in fields, but you can also add your own custom fields.

The fields folder
All fields are saved in the src/fields folder:

fields/
├─ core/
│  ├─ boolean/
│  ├─ code/
│  ├─ date/
│  ├─ image/
│  ├─ number/
│  ├─ ...
├─ custom/
│  ├─ README.md
├─ registry.js
core/ is where all the built-in fields are saved (e.g. boolean, code, date). The names of the fields subfolders match the types used in the configuration file (e.g. type: boolean).

custom/ (empty by default) is used to host the subfolders for custom fields.

registry.js is a helper function to create registries for the fields.

Individual fields
Each field folder (e.g. fields/core/boolean) should include an index.ts or index.tsx file that can export:

schema: a Zod schema used to process the field when saving. This is used for validation and format coertion.
supportsList: a boolean defining whether or not the field handles lists internally rather than using the default list behavior. Check fields/core/image for an example.
read: a function used to convert the field value when reading from a file (e.g. fields/core/date will convert from the format defined for that date field to a standard ISO 8601 date/datetime).
write: a function used to convert the field value when writing to a file (e.g. fields/core/date will convert from a standard ISO 8601 date/datetime to the format defined for that date field).
EditComponent: a React component used to edit the field.
ViewComponent: a React component used to display the field in a collection.
defaultValue: defines the default value for the field.
Example: fields/core/boolean
Let's have a look at the fields/core/boolean folder, which defines boolean fields:

fields/
├─ core/
│  ├─ boolean/
│  │  ├─ edit-component.tsx
│  │  ├─ index.tsx
│  │  ├─ view-component.tsx
Edit component
edit-component.tsx is the React component used in the editor (for both creating or editing content). It is called by components/entry/entry-form.tsx via the editComponents registry.

In the case of the boolean field, it is a simple toggle switch:

"use client";

import { forwardRef } from "react";
import { Switch } from "@/components/ui/switch";

const EditComponent = forwardRef((props: any, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div>
      <Switch
        {...props}
        ref={ref}
        checked={props.value}
        onCheckedChange={props.onChange}
      />
    </div>
  );
});

export { EditComponent };
View component
view-component.tsx is the React component used to display the field value in collections. It is called by components/collection/collection-view.tsx via the viewComponents registry.

For boolean fields, we displayed a colored chip with the labels "True" or "False" if the value is defined, or nothing otherwise (undefined or null):

"use client";

const ViewComponent = ({ value }: { value: boolean}) => {
  return (
    <>
      {value == null
        ? null
        : value
          ? <span className="inline-block rounded-md bg-primary text-primary-foreground px-2 py-0.5 text-xs font-medium">True</span>
          : <span className="inline-block rounded-md border bg-muted px-2 py-0.5 text-xs font-medium">False</span>
      }
    </>
  );
};

export { ViewComponent };
Field registration
index.tsx registers the field. It is required for your field to work.

For the boolean field, this means exporting the edit/view components, the default value and the schema:

import { z } from "zod";
import { Field } from "@/types/field";
import { EditComponent } from "./edit-component";
import { ViewComponent } from "./view-component";

const defaultValue = false;

const schema = (field: Field) => {
  let zodSchema = z.coerce.boolean();

  return zodSchema;
};

export { EditComponent, ViewComponent, defaultValue, schema };
Notice that we define a default value (false) and coerce the field to a boolean in the schema function. This will ensure we're saving a boolean in the file, and not a string.

In some cases (e.g. the image field), we may also indicate support for lists with supportsList, and define read and write functions to convert the input and output values (when reading from or writing to the file).