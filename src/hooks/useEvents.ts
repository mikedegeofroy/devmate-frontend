import { IEvent } from "@/types/IEvent";
import { useEventsStore } from "@/store/events.store";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useEvents = () => {
  const queryClient = useQueryClient();
  const { editSelectedEvent, selectedEvent } = useEventsStore();

  const fetchEvents = async () => {
    const url = `http://localhost:5207/api/events`;
    const res = await fetch(url);

    return await res.json();
  };

  const updateEvent = async (event: IEvent) => {
    const url = `http://localhost:5207/api/events/update`;

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    return await res.json();
  };

  const createEvent = async () => {
    const url = `http://localhost:5207/api/events/create`;

    console.log(
      JSON.stringify({
        id: 11,
        userId: 0,
        title: "",
        description: "",
        startDateTime: "",
        endDateTime: "",
        total: 0,
        occupied: 0,
        price: 0,
        cover: "",
      }),
    );

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 11,
        userId: 0,
        title: "",
        description: "",
        startDateTime: "",
        endDateTime: "",
        total: 0,
        occupied: 0,
        price: 0,
        cover: "",
      }),
    });

    return await res.json();
  };

  const uploadFile = async (file: File) => {
    const form = new FormData();
    form.append("file", file);

    const options = {
      method: "POST",
      body: form,
    };

    await fetch(
      `http://localhost:5207/api/events/upload-cover?id=${selectedEvent.id}`,
      options,
    ).then((response) => response.json());
  };

  return {
    events: useQuery<IEvent[], Error>("events", fetchEvents, {
      refetchInterval: false,
      onSuccess: (data) => {
        if (data.length > 0 && selectedEvent.id < 0) editSelectedEvent(data[0]);
        const event = data.find((e) => e.id == selectedEvent.id);
        if (event) editSelectedEvent(event);
      },
    }),
    uploadFile: useMutation(uploadFile, {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
      },
    }),
    updateEvent: useMutation(updateEvent, {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
      },
    }),
    createEvent: useMutation(createEvent, {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
      },
    }),
  };
};
