import { useFetchUsersQuery } from "../store";
import UserItem from "../components/UserItem";

const UserList = () => {
  const { data, isError, isFetching } = useFetchUsersQuery();

  const _skeleton = data
    ?.slice(0)
    .reverse()
    .map((item, key) => {
      return (
        <>
          <div
            key={key}
            className="mb-5 rounded-lg animate-pulse flex items-center justify-between p-5 bg-amber-100"
          >
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
        </>
      );
    });

  let content;
  if (isFetching) {
    content = _skeleton;
  } else if (isError) {
    content = <div>Hata var</div>;
  } else {
    content = (
      <>
        {data
          .slice(0)
          .reverse()
          .map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
      </>
    );
  }

  return <div className="px-6 mx-auto max-w-screen-xl">{content}</div>;
};
export default UserList;
