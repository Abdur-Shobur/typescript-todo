import { inputField, form, taskBox } from './domInit';

type todoItems = {
  id: number;
  name: string;
  isComplete: boolean;
};

const toDo: todoItems[] = [];
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  let input = inputField?.value;
  if (input === '' || input === undefined || input === null) return;
  const data: todoItems = {
    id: toDo.length,
    isComplete: false,
    name: input,
  };
  toDo.push(data);
  showData(data);
  inputField.value = '';
});

function showData(todo: todoItems) {
  taskBox.innerHTML = toDo
    .map(
      (todo) => `
      <li class="task">
        <label  onclick="handleChecked(${todo.id})" for="task-${todo.id}">
          <input type="checkbox" id="task-${todo.id}" ${
        todo.isComplete ? 'checked' : ''
      } />
          <p class="${todo.isComplete ? 'completed' : ''}">${todo.name}</p>
        </label>
        <div class="settings">
          <i class="uil uil-ellipsis-h">...</i>
          <ul class="task-menu">
            <li><i class="uil uil-pen"></i>Edit</li>
            <li><i class="uil uil-trash"></i>Delete</li>
          </ul>
        </div>
      </li>
    `,
    )
    .join('');
}
function handleChecked(id: number) {
  const todo = toDo.find((e) => e.id === id);
  if (todo) {
    todo.isComplete = !todo.isComplete;
    showData(todo);
  }
}
// function showData(todo: todoItems) {
//   taskBox.innerHTML = toDo
//     .map(
//       (todo) => `
//     <li class="task">
//       <label onclick="handelChecked(${todo.id})" for="${todo.name + todo.id}">
//         <input type="checkbox" id="${todo.name + todo.id}" ${
//         todo.isComplete ? 'checked' : ''
//       } />
//         <p class="${todo.isComplete ? 'completed' : ''}">${
//         todo.name + todo.id
//       }</p>
//       </label>
//       <div class="settings">
//         <i  class="uil uil-ellipsis-h">...</i>
//         <ul class="task-menu">
//           <li><i class="uil uil-pen"></i>Edit</li>
//           <li><i class="uil uil-trash"></i>Delete</li>
//         </ul>
//       </div>
//     </li>
//   `,
//     )
//     .join('');
// }
