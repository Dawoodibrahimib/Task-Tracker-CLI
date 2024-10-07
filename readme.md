
# CLI Task Tracker

A simple command-line interface (CLI) application to manage your tasks and track your to-do list. This application allows you to add, update, delete, and list tasks, with support for marking them as done or in progress.

## Features

- Add new tasks with a description and status.
- Update existing tasks' descriptions and statuses.
- Delete tasks by ID.
- List all tasks, as well as tasks that are done, in progress, or not done.
- Automatically assigns unique IDs to tasks.

## Requirements


- Project Link : https://roadmap.sh/projects/task-tracker

- Node.js (v12 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd cli-task-tracker

Run the application using Node.js.

Usage

Add a Task

To add a new task, use the following command:

bash
Copy code
node script.js add "<description>" "<status>"
Example:

bash
Copy code
node script.js add "Finish coding project" "in-progress"
Update a Task
To update an existing task, use:

bash
Copy code
node script.js update <id> "<new-description>" "<new-status>"
Example:

bash
Copy code
node script.js update 1 "Complete coding project" "done"
Delete a Task
To delete a task, use:

bash
Copy code
node script.js delete <id>
Example:

bash
Copy code
node script.js delete 1
List Tasks
List all tasks that are done:

bash
Copy code
node script.js listdone
List all tasks that are in progress:

bash
Copy code
node script.js listinprogress
List all tasks that are not done:

bash
Copy code
node script.js listnotdone
File Storage
All tasks are stored in a file.json file in the same directory as the script. The file will be created automatically if it does not exist.

Error Handling
The application handles errors gracefully, including invalid commands and missing parameters.
If the specified task ID does not exist, appropriate error messages will be displayed.
Contributing
Feel free to submit issues or pull requests if you want to contribute to the project!

License
This project is open-source and available under the MIT License.

markdown
Copy code

### Instructions for Customization

1. **Repository URL:** Replace `<repository-url>` with the actual URL of your project repository.
2. **Additional Features:** You can add any additional features or usage instructions as needed.
3. **License Information:** If you have a specific license for your project, include that in the License section.

This README provides clear instructions on how to use your CLI task tracker and explains its features and setup. Let me know if you need further adjustments or additional sections!





