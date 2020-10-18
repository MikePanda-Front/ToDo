import { rejects } from "assert";
import { resolve } from "dns";
import { setTimeout } from "timers";

export const fetchEvents = () =>
  new Promise((resolve, reject) => {
    const response = [
      {
        id: 1,
        name: "name 1",
        description: "description 1",
        isActive: false,
      },
      {
        id: 2,
        name: "name 2",
        description: "description 2",
        isActive: false,
      },
      {
        id: 3,
        name: "name 3",
        description: "description 3",
        isActive: false,
      },
    ];

    setTimeout(() => {
      resolve(response);
    }, 1000);
  });

export const updateEvent = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
