/**
 * Given a list of people with their names and the
 * time slots when they are available in a given
 * week, and a meeting length, return the first
 * meeting time available (if possible).
 * Format the input however you’d like to receive it!
 */

// Define length of time slot is 1 hour.
const availableToken: string = "0";
const busyToken: string = "1";
const aBusyWeek = busyToken.repeat(24 * 7); // a very busy week 😱

interface Person {
  name: string;
  availableHours: string; // represents available hour-spans for the week from 1 to 168 (24*7) 😅
}

/**
 * TODO improve the availableHours format:
 *  …perhaps change the time resolution from hours to minutes.
 *  …perhaps come up with something more human readable to represent multiple days.
 */
const persons: Person[] = [
  { name: "Anne", availableHours: "7-35,45-55" },
  { name: "Bob", availableHours: "13-15,25-30,40-55" },
  { name: "Claire", availableHours: "10-14,27-29,40-48" },
];

/**
 * Converts input to a string of 0s and 1s representing the whole week.
 * I'm calling the output a Bitmap but it is just a string 😬.
 * ⚠️ this may be wasteful and might not scale well enough for higher
 * time resolutions or for durations much longer than a week.
 * 🤷‍♂️ I'm not really sure why I didn't choose arrays to represent this;
 * I just fancied practicing string manipulation this week.
 */
const convertHourSpansToBitmap = (availability: string): string => {
  const slots = availability.split(",");
  let thisWeek = aBusyWeek;
  slots.forEach((slot) => {
    // Extract the free-slot start and end times.
    let [start, end]: number[] = slot.split("-").map((x) => parseInt(x));
    // Overwrite the week availability with the free slot hours.
    thisWeek = `${thisWeek.substring(0, start)}${availableToken.repeat(
      end - start
    )}${thisWeek.substring(end)}`;
  });
  // Quick check our result string has remained the correct length.
  console.assert(thisWeek.length === 24 * 7);
  return thisWeek;
};

/**
 * Basically Logic-OR for characters in equal length strings.
 */
const bitmapsIntersection = (availability: string[]): string => {
  let intersection = "";
  for (let i = 0; i < availability[0].length; i++) {
    let count = 0;
    availability.forEach((bitmap) => {
      if (bitmap.charAt(i) === busyToken) {
        count += 1;
      }
    });
    // Check if everyone will be free or not.
    if (count === 0) {
      intersection = `${intersection}0`;
    } else {
      intersection = `${intersection}1`;
    }
  }
  return intersection;
};

// Scan through Bitmap for long enough strings of zeros.
const findTimeSlot = (meetingLength: number, availabilityBitmap: string) => {
  let count = 0;
  for (let i = 0; i < availabilityBitmap.length; i++) {
    if (availabilityBitmap.charAt(i) === availableToken) {
      count++;
    } else {
      count = 0;
    }
    // Have we found a large enough free-span?
    if (count === meetingLength) {
      // Return successful meeting-slot result.
      return `${i - meetingLength + 1}-${i + 1}`;
    }
  }
  // If no result, return empty string
  return "";
};

/**
 * ⚠️ This algorithm is a bit wasteful because it processes
 * everyone's entire week up front.
 *
 * Process the inputs for all people into a single Bitmap string
 * representing the hours everyone is free.
 * Then scan through the resulting string to find the first
 * free-span long enough for the meeting.
 */
const firstAvailableMeeting = (
  attendees: Person[],
  meetingLength: number = 1
) => {
  // Extract and convert the input data
  const availabilityBitmaps: string[] = attendees
    .map((x: Person) => x.availableHours)
    .map(convertHourSpansToBitmap);
  // Process the inputs together
  const everyoneAvailability = bitmapsIntersection(availabilityBitmaps);
  // Scan the resulting availability Bitmap
  const firstAvailable = findTimeSlot(meetingLength, everyoneAvailability);
  // Our result
  return firstAvailable;
};

////////////////////////////////////////////////////////////////////////////////
/**
 * 👨‍🔬 Let's run some tests.
 */
const expectations: [Person[], number, string][] = [
  [persons, 1, "13-14"],
  [persons, 2, "27-29"],
  [persons, 3, "45-48"],
  [persons, 4, ""],
  [persons, 5, ""],
];

expectations.forEach(([persons, meetingLength, expected]) => {
  const result = firstAvailableMeeting(persons, meetingLength);
  console.log(
    result === expected ? `✅` : `❌`,
    `Expect ${meetingLength} hour meeting slot to be "${expected}":`,
    `"${result}".`
  );
});
