// convert into seconds from HH:MM
export const intoSeconds = (time) => {
  const [hours, minutes] = time.split(":");
  return hours * 3600 + minutes * 60;
};

// convert seconds into hr min sec
export const intoHoursMins = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hDisplay = h > 0 ? h + (h === 1 ? " hr " : " hrs ") : "";
  const mDisplay = m > 0 ? m + (m === 1 ? " min " : " mins ") : "";
  const sDisplay = s > 0 ? s + (s === 1 ? " sec" : " sec") : "";
  return hDisplay + mDisplay + sDisplay;
};

//convert seconds into hours
export const intoHours = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const HH = String(hours).padStart(2, "0");
  const MM = String(minutes).padStart(2, "0");

  return `${HH}:${MM}`;
};

// convert into HH:MM:SS
export const convertIntoHHMMSS = (seconds) => {
  seconds = Math.floor(seconds); // Round down to remove decimal part

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const HH = String(hours).padStart(2, "0");
  const MM = String(minutes).padStart(2, "0");
  const SS = String(remainingSeconds).padStart(2, "0");

  return `${HH}:${MM}:${SS}`;
};

// convert into minuts
export const intoMinuts = (str) => {
  var parts = str.split(":");
  var minutes =
    parseInt(parts[0], 10) * 60 +
    parseInt(parts[1], 10) * 1 +
    parseInt(parts[2], 10) / 60;
  return minutes;
};

// validator for ant design
export function antValidator(scheme) {
  const yupSync = {
    async validator({ field }, value) {
      await scheme.validateSyncAt(field, { [field]: value });
    }
  };

  return yupSync;
}

// convert image to base 64
export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

// get total
export const getTotal = (amount) => {
  // console.log(amount);
  var total = 0;
  for (var i = 0; i < amount.length; i++) {
    if (parseFloat(amount[i])) total += parseFloat(amount[i]);
  }
  return total;
};

// get file name from s3 url
export const getFileName = (url) => {
  console.log("url: ", url);
  console.log("last index: ", url?.lastIndexOf("/"));
  let filename = url?.substring(url?.lastIndexOf("/") + 1);
  if (filename?.split("?").length > 0) {
    console.log("if fileName: ", filename?.split("?")[0]);
    return filename?.split("?")[0];
  } else {
    console.log("else fileName: ", filename);
    return filename;
  }
};

// bytes into mb
export const bytesToMB = (bytes) => {
  return bytes / (1024 * 1024);
};

export const nFormatter = (num, digits) => {
  if (typeof num === "string") {
    num = parseFloat(num);
  }

  if (isNaN(num)) {
    return "0";
  }

  if (num === 0) {
    return "0";
  }

  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

  let sign = num < 0 ? "-" : ""; // Check if the number is negative
  num = Math.abs(num); // Use the absolute value for comparison

  let item = [...lookup].reverse().find((item) => num >= item.value); // Use >= instead of >
  return (
    sign +
    (item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0")
  );
};

// days left function
export const countDaysLeft = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  // Get the time difference in milliseconds
  const timeDiff = endDate.getTime() - startDate.getTime();

  // Convert milliseconds to days
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysLeft;
};

// find video
export const findVideoIndex = (videoId, lessonsHasVideosArray) => {
  for (let i = 0; i < lessonsHasVideosArray.length; i++) {
    const lesson = lessonsHasVideosArray[i];
    if (lesson.video && lesson.video.length > 0) {
      for (let j = 0; j < lesson.video.length; j++) {
        if (lesson.video[j]._id === videoId) {
          return i;
        }
      }
    }
  }
  return -1; // If the video is not found
};

// get reduced  data
export const getReducedData = (courseLessons) => {
  const reducedData = Object.values(
    courseLessons.reduce((acc, curr) => {
      if (acc[curr.chapterName]) {
        acc[curr.chapterName].videos.push(...curr.video);
        acc[curr.chapterName].files.push(...curr.file);
      } else {
        acc[curr.chapterName] = {
          chapterName: curr.chapterName,
          videos: [...curr.video], // Corrected initialization
          files: [...curr.file] // Corrected initialization
        };
      }
      return acc;
    }, {})
  );
  return reducedData;
};

// paginatio function
export const paginate = (data, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  return paginatedData;
};
