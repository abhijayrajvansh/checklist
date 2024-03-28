import {Button, Checkbox} from "@nextui-org/react" ;

interface ChecklistItem {
  id: string;
  user_email: string;
  title: string;
  progress: number;
  date: string;
}

interface ListItemProps {
  task: ChecklistItem;
}

const ListItem:React.FC<ListItemProps> = ({task}) => {
  return (
    <div className="py-4 flex items-center justify-between">
      <Checkbox defaultSelected={false} lineThrough>
        <p className="text-lg sm:text-2xl">{task.title}</p>
      </Checkbox>
      <div className="space-x-5">
        <Button size="sm" className="font-medium text-sm bg-yellow-400 text-black">edit</Button>
        <Button size="sm" className="font-medium text-sm bg-red-500">delete</Button>
      </div>
    </div>
  )
}

export default ListItem;