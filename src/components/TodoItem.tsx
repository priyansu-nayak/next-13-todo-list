type TodoItemProps ={

    id:string
    title:string
    complete:Boolean
}


export function TodoItem({id,title,complete}:TodoItemProps){
  return <li className="flex gap-1 items-center">
    <input type="checkbox" className="cursor-pointer peer" id={id} />
    <label htmlFor={id} className="cursor-pointer peer-checked:line-through">{title}</label>
  </li>   
}