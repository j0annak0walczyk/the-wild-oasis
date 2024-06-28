import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeletingBooking, deleteBooking };
}

export default useDeleteBooking;
