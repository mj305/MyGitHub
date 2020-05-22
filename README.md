# 
# Maria&#39;s GitHub Project
https://my-github-api.herokuapp.com/

What is the convention for naming classes in CSS?

To avoid bugs and make CSS more readable we should follow some basic naming conventions such as:

1. Hyphen: Delimited strings instead of camelcase; this is a good method for smaller projects.
2. BEM Convention (Block Element Modifier): Divides the overall user interface into small reusable components; great convention for larger projects.
3. JavaScript Hooks Convention:
  1. Js-class names: to denote a relationship with the DOM element in question.
  2. Rel attribute: defines the relationship that the linked resource has to the document from which it&#39;s referenced.
  3. Don&#39;t use data attributes since they are only used to store custom data.

What is one way to stop a form from submitting with JavaScript?

You can use the return value of the function to prevent the form submission.

\&lt;form name=&quot;myForm&quot; onsubmit=&quot;return validateMyForm();&quot;\&gt;

When and how should HTML code be validated?

You can validate HTML using W3C Markup Validation Service; it&#39;s invaluable tools for spotting mistakes. The recommendation is to validate when developing the template that will become the working web page.

What is the DOM?

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

Which one is better: CSS Grid, Flexbox or just plain CSS?

I believe that no one is &quot;better&quot; than the other, but rather they have different uses. They are different ways to use CSS depending on what the project needs. If you need a more complex layout Grid would be the preferred tool, Flexbox is better than plain CSS when there are some items that need to be positioned in a specific way.