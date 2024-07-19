#!/bin/bash
set -e

# Replace {YOUR_GIT_REOPO_URL} with your actual Git repository URL
GIT_REPO_URL="https://github.com/dhomini-rabelo/gptcuts.git"

# If using Private Repo
#GIT_REPO_URL="https://<your_username>:<your_PAT>@github.com/codewithmuh/django-aws-ec2-autoscaling.git"

# Replace {YOUR_PROJECT_MAIN_DIR_NAME} with your actual project directory name
PROJECT_MAIN_DIR_NAME="gptcuts"

# Clone repository
git clone "$GIT_REPO_URL" "/home/ubuntu/$PROJECT_MAIN_DIR_NAME"

cd "/home/ubuntu/$PROJECT_MAIN_DIR_NAME/server/app/project"

# Make all .sh files executable
chmod +x scripts/*.sh

# Execute scripts for OS dependencies, Python dependencies, Gunicorn, Nginx, and starting the application
touch filenamel_00.txt
./scripts/instance_os_dependencies.sh
touch filenamel_0.txt
./scripts/python_dependencies.sh
touch filenamel_1.txt
./scripts/gunicorn.sh
touch filenamel_2.txt
./scripts/nginx.sh
touch filenamel_3.txt
./scripts/start_app.sh
touch filenamel_5.txt
