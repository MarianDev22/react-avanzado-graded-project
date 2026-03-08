"use client";
import { deleteAdAction } from "@/app/dashboard/ads/new/actions";
import { useActionState } from "react";

interface DeleteAdButtonProps {
  adId: number;
}
const initialState = { success: false, message: "", requestId: 0 };

export const DeleteAdButton = ({ adId }: DeleteAdButtonProps) => {
  const [state, formAction] = useActionState(deleteAdAction, initialState);
  return (
    <div className="flex flex-col items-end gap-1">
      <form action={formAction}>
        <input type="hidden" name="adId" value={adId} />
        <button
          type="submit"
          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50"
        >
          🗑️
        </button>
      </form>
      {state.message && !state.success && (
        <span className="text-[10px] text-red-600 bg-red-50 px-2 py-1 rounded-md animate-pulse">
          {state.message}
        </span>
      )}
    </div>
  );
};
