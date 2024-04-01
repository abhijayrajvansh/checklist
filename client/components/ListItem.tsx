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
      <div className=" p-2 sm:p-4 flex items-center justify-between shadow-lg rounded-lg mt-2 border-2 border-default-700">
        <Checkbox defaultSelected={false} lineThrough>
          <p className="text-sm sm:text-lg">{task.title}</p>
        </Checkbox>
        <div className="space-x-5 items-end flex sm:block flex-col space-y-1">
          <Button size="sm" variant="solid" className="font-medium text-sm" color="success">Edit</Button>
          <Button size="sm" variant="solid" className="font-medium text-sm bg-red-500">Delete</Button>
        </div>
      </div>
  )
}

export default ListItem;