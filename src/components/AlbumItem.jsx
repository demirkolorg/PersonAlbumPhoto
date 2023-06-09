import { ImSpinner9 } from "react-icons/im";
import { useFetchPhotosQuery, useRemoveAlbumMutation } from "../store";
import { FaTrash } from "react-icons/fa";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "../components/PhotoList";

const AlbumItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const { data, isError, isFetching } = useFetchPhotosQuery(album);

  const albumDeleteHandle = () => {
    removeAlbum(album);
  };

  const header = results.isLoading ? (
    <>
      <ImSpinner9 className="animate-spin" />
      <b> {album.title}</b>albümü siliniyor...
    </>
  ) : (
    <>
      <button className="flex items-center gap-3 " onClick={albumDeleteHandle}>
        <FaTrash className="fill-amber-950  hover:fill-red-500 hover:scale-150" />
      </button>
      {album.title} Albümü ({data && data.length} fotoğraf)
      
    </>
  );
  return (
    <>
      <ExpandablePanel header={header}>
        <PhotoList key={album.id} album={album} />
      </ExpandablePanel>
    </>
  );
};
export default AlbumItem;
