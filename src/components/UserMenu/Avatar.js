function stringToColor(string) {
  let hash = 0;
  for (let i = 0; i < string.replace(/\s+/g, "").length; i += 1) {
    hash = string.replace(/\s+/g, "").charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}

export default function stringAvatar(name) {
  if (name.trim().split(" ").length > 1) {
    return {
      sx: {
        backgroundColor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  } else {
    return {
      style: {
        backgroundColor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
}
