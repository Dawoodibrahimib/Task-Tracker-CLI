const fs = require('fs');

// Getting the current Date
const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
};

// Check if the correct Command
if (process.argv.length < 3) {
    console.error('Usage: node script.js <action> [id] [description] [status]');
    process.exit(1);
}

const action = process.argv[2];
const description = process.argv[3];
const status = process.argv[4];

// Read tasks from 'file.json'

fs.readFile('file.json', 'utf-8', (err, data) => {
    let tasks = [];

    if (err) {
        if (err.code === "ENOENT") {
            console.log("file.json does not exist. Creating a new file.");
        } else {
            console.error("Error reading file:", err);
            return;
        }
    } else if (data.trim().length > 0) {
        try {
            tasks = JSON.parse(data);
        } catch (parseError) {
            console.error("Error parsing JSON data:", parseError);
            return;
        }
    }

    // Action handling
    if (action === 'add') {
        if (!description || !status) {
            console.error('For "add" action, you need to provide a description and status');
            process.exit(1);
        }

        const maxId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
        const newTask = {
            id: maxId + 1,
            description: description,
            status: status,
            createdAt: getCurrentDate(),
            updatedAt: getCurrentDate(), // Fixed the assignment operator
        };
        tasks.push(newTask);
        console.log("Task added:", newTask);

    } else if (action === 'update') {
        if (!id || !description || !status) {
            console.error('For "update" action, you need to provide an id, description, and status');
            process.exit(1);
        }

        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) { // Fixed the condition check
            tasks[taskIndex].description = description; // No need for OR operator
            tasks[taskIndex].status = status;
            tasks[taskIndex].updatedAt = getCurrentDate(); // Corrected 'UpdatedAt' to 'updatedAt'
            console.log("Task updated:", tasks[taskIndex]);
        } else {
            console.error(`Task with id ${id} not found.`);
            return;
        }

    } else if (action === 'delete') {
        if (!id) {
            console.error('For "delete" action, you need to provide an id.');
            process.exit(1);
        }

        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            const deletedTask = tasks.splice(taskIndex, 1);
            console.log("Task deleted:", deletedTask[0]);
        } else {
            console.error(`Task with id ${id} not found.`);
            return;
        }

    } else if (action === 'listdone') {
        const doneTasks = tasks.filter(task => task.status === 'done');
        if (doneTasks.length > 0) {
            console.log("Tasks that are done:");
            doneTasks.forEach(task => console.log(task));
        } else {
            console.log("No tasks are marked as done");
        }

    } else if (action === 'listinprogress') { // Fixed action name
        const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
        if (inProgressTasks.length > 0) {
            console.log('Tasks that are in progress:');
            inProgressTasks.forEach(task => console.log(task));
        } else {
            console.log("No tasks are in progress");
        }

    } else {
        console.error('Invalid action. Use "add", "update", "delete", "listdone", "listnotdone", or "listinprogress".');
        return;
    }

    // Save tasks to 'file.json' if any modification was made
    if (['add', 'update', 'delete'].includes(action)) {
        fs.writeFile('file.json', JSON.stringify(tasks, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('Tasks saved to file.json successfully!');
            }
        });
    }
});