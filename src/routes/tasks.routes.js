import { Router } from "express";
import { 
    createTask, 
    renderTasks,
    taskToggleDone,
    renderTaskEdit,
    editTask,
    deleteTask
 } from "../controllers/tasks.controllers";

const router = Router();

router.get('/', renderTasks);
router.post('/tasks/add', createTask);
router.get("/tasks/:id/toggleDone", taskToggleDone);
router.get("/tasks/:id/edit", renderTaskEdit);
router.post("/tasks/:id/edit", editTask);
router.get("/tasks/:id/delete", deleteTask);

/* Por lo general
get -> consulta en la página
put -> agregar nuevo dato
post -> agregar dato sin double input ?
delete -> eliminar dato
*/

export default router;