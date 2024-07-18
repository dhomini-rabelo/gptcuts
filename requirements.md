# GPTCuts

Site that has shortcuts for GPT prompts.

## Features

- [ ] It should be possible to register and authenticate users.
- [ ] It should be possible to create, edit and save shortcuts inside a folder.

## Business rules

- [ ] Folder paths must start and end with /
- [ ] Folders should be public or private.

## Development requirements

- [ ] Use AWS S3 to deploy your frontend code. (React)
- [ ] Use AWS EC2 to deploy your backend code. (Django)
- [ ] Use AWS CloudFront for CDN
- [ ] Create a custom VPC with one private subnet and put your EC2 in it.
- [ ] Postgres as database

## Entities

- User => username, password
- Folder => name, description, is_private, user_id
- Shortcut => text, is_pinned, folder_id
