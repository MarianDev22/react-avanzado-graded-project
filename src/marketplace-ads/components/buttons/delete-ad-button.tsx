import { deleteAdAction } from "@/app/dashboard/ads/new/actions";

interface DeleteAdButtonProps {
  adId: number;
}

export const DeleteAdButton = ({ adId }: DeleteAdButtonProps) => {
  return (
    <form action={deleteAdAction}>
      <input type="hidden" name="AdId" value={adId} />
      <button
        type="submit"
        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50"
        title="Eliminar anuncio"
      >
        🗑️
      </button>
    </form>
  );
};
