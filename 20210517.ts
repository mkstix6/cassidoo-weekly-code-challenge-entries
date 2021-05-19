/**
 * Given a list of people with their names and the
 * time slots when they are available in a given
 * week, and a meeting length, return the first
 * meeting time available (if possible).
 * Format the input however you’d like to receive it!
 */

// Define length of time slot is 1 hour.
const freeToken: string = "0";
const busyToken: string = "1";
const aBusyWeek = busyToken.repeat(24 * 7);

interface Person {
  name: string;
  availableHours: string;
}

const persons: Person[] = [
  { name: "Annabelle", availableHours: "7-14,21-35,45-55" },
  { name: "Bob", availableHours: "13-15,25-30,40-55" },
  { name: "Claire", availableHours: "10-14,27-29,40-48" },
];

const timeStringToBitmap = (timeString: string): string => {
  const slots = timeString.split(",");
  let thisWeek = aBusyWeek;
  slots.forEach((slot) => {
    // Extract the free-slot start and end times.
    let [start, end]: number[] = slot.split("-").map((x) => parseInt(x));
    // Edit the week timestring with the free slots.
    thisWeek = `${thisWeek.substring(0, start)}${"0".repeat(
      end - start
    )}${thisWeek.substring(end)}`;
  });
  console.assert(thisWeek.length === 24 * 7);
  return thisWeek;
};

const timeStringIntersection = (timeString: string[]): string => {
  let intersection = "";
  for (let i = 0; i < timeString[0].length; i++) {
    let count = 0;
    timeString.forEach((bitmap) => {
      if (bitmap.charAt(i) === "1") {
        count += 1;
      }
    });
    // Check if everyone was free or not.
    if (count > 0) {
      intersection = `${intersection}1`;
    } else {
      intersection = `${intersection}0`;
    }
  }
  return intersection;
};

const findTimeSlot = (meetingLength: number, timeString: string) => {
  let count = 0;
  for (let i = 0; i < timeString.length; i++) {
    if (timeString.charAt(i) === "0") {
      count++;
    } else {
      count = 0;
    }
    if (count === meetingLength) {
      return `${i - meetingLength + 1}-${i + 1}`;
    }
  }
  return "";
};

const firstAvailableMeeting = (meetingLength: number, attendees: Person[]) => {
  const timeStrings: string[] = attendees.map((x: Person) => x.availableHours);
  const timeString = timeStrings.map(timeStringToBitmap);
  const everyoneFreeTimeString = timeStringIntersection(timeString);
  const firstAvailable = findTimeSlot(meetingLength, everyoneFreeTimeString);
  return firstAvailable;
};

console.log(`expect 1 hour meeting = 13-14`, firstAvailableMeeting(1, persons));
console.log(`expect 2 hour meeting = 27-29`, firstAvailableMeeting(2, persons));
console.log(`expect 3 hour meeting = 45-48`, firstAvailableMeeting(3, persons));
console.log(`expect 4 hour meeting = false`, firstAvailableMeeting(4, persons));
console.log(`expect 5 hour meeting = false`, firstAvailableMeeting(5, persons));
