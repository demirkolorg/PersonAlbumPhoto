import ExpandablePanel from "../components/ExpandablePanel";
import AlbumList from "../components/AlbumList";
import { FaTrash } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { useFetchAlbumsQuery, useRemoveUserMutation ,useFetchPhotosQuery} from "../store";

const UserItem = ({ user }) => {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);

  

  const [removeUser, results] = useRemoveUserMutation();
  const userDeleteHandle = () => {
    removeUser(user);
  };

  const header = results.isLoading ? (
    <>
      <ImSpinner9 className="animate-spin" />
      <b> {user.name}</b>siliniyor...
    </>
  ) : (
    <>
      <button className="flex items-center gap-3 " onClick={userDeleteHandle}>
        <FaTrash className="fill-amber-950  hover:fill-red-500 hover:scale-150" />
      </button>
      <span className="text-xl">
        {user.name} ({data?.length} albüm){" "}
      </span>
    </>
  );
  return (
    <>
      <ExpandablePanel header={header}>
        <AlbumList key={user.id} user={user} />
      </ExpandablePanel>
    </>
  );
};
export default UserItem;
