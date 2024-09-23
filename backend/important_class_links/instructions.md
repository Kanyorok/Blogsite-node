# Blog app - creating a data model

## Learning objectives
- Install Ruby on Rails framework.
- Use Ruby Gems as a software packages system.
- Understand what ORM is.
- Use database migration files to maintain database schema.

### Estimated time: 5 hours

## Description
In this project, you will use migration files to build your schema.

*IMPORTANT NOTE: Read **all** requirements before you start building your project.*

### General requirements

- Make sure that there are [no linter errors](https://github.com/microverseinc/linters-config).
- Make sure that you used correct flow [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md).
- Make sure that you documented your work [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md).

### Ruby requirements
- Follow our list of [best practices for Ruby](https://github.com/microverseinc/curriculum-ruby/blob/main/articles/ruby_best_practices.md).

### Project requirements

- Create a new app. Give it a meaningful name.
- Initialize your project with Git.
- Make sure that your project has Postgres database set up.
- Build your project schema.
    - Create and run the necessary migration files.
    - Table and column names should match the ERD diagram.
        - note: photo for users table should be a link to an image
    - Foreign keys should be included.
        - Pay attention that in `posts` table the column holding the foreign key to the `users` table should be named `author_id`
    - All columns that are foreign keys should have a corresponding index.
- Be sure to reference the from the sneak peek if you have any questions about table or column names or data relationships.
   <p align="center">
      <img src="../images/blog_app_erd_v1_1.png" alt="Data model"  width="500px"  />
   </p>

### Need a big picture?

Remind me about [the big picture of this project](../sneak_peek.md).


## Work and submission mode

- You should submit this activity **individually.**

## Code review

Follow [these steps](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/code-review/articles/how_to_ask_for_a_code_review.md) to request a code review of your project.

## Submit your project

After the final approval from a code reviewer, you need to submit your project.
[Read this FAQ for a reminder on how to submit your project.](https://microverse.zendesk.com/hc/en-us/articles/360061344234)
Now go to your Student Dashboard and submit your project.

------

_If you spot any bugs or issues in this activity, you can [open an issue with your proposed change](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/open_issue.md)._