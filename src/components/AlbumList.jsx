import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import { AiOutlinePlus } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import AlbumItem from "./AlbumItem";

const AlbumList = ({ user }) => {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const addAlbumHandle = () => {
    addAlbum(user);
  };
  const _skeleton = data?.map((item, key) => {
    return (
      <>
        <div
          key={key}
          className="mb-5 rounded-lg animate-pulse flex items-center justify-between p-5 bg-gray-100 border border-gray-400"
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
        {data.length > 0
          ? data
              .slice(0)
              .reverse()
              .map((album) => {
                return <AlbumItem key={album.id} album={album} />;
              })
          : `${user.name} isimli kullanıcının gösterilecek herhangi bir albümü yok, yeni elbüm eklemeyi deneyiniz.`}
      </>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center m-5">
        <span className="text-xl">
  
          <span className="font-semibold"> {user.name} </span> kullanıcısının albümleri
        </span>
        <div className="flex items-center lg:order-2">
          <button
            disabled={results.isLoading}
            onClick={addAlbumHandle}
            className="flex flex-wrap disabled:bg-zinc-500 disabled:cursor-not-allowed items-center text-white bg-amber-400 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
          >
            {results.isLoading ? (
              <>
                Bekleyin
                <ImSpinner9 className="ml-3 w-5 h-5 animate-spin" />
              </>
            ) : (
              <>
                Albüm Ekle
                <AiOutlinePlus className="ml-3 w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
      <div className="">{content}</div>
    </>
  );
};
export default AlbumList;
