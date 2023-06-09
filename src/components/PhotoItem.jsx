import { FaTrash } from "react-icons/fa";
import { useRemovePhotoMutation } from "../store";
import { ImSpinner9 } from "react-icons/im";

const PhotoItem = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation();
  const albumDeleteHandle = () => {
    removePhoto(photo);
  };

  const content = results.isLoading ? (
    <>
      <ImSpinner9 className="animate-spin w-10 h-10 fill-white" />
    </>
  ) : (
    <>
      <button
        className="flex items-center gap-3 "
        onClick={albumDeleteHandle}
      >
        <FaTrash
          size={32}
          className="opacity-50 hover:opacity-100 fill-white  hover:fill-red-500 hover:scale-150"
        />
      </button>
    </>
  );

  return (
    <div className="relative">
      <img
        key={photo.id}
        src={photo.url}
        alt=""
        className="border-2 border-amber-500"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-10 -translate-y-5 ">{content}</div>
    </div>
  );
};
export default PhotoItem;
