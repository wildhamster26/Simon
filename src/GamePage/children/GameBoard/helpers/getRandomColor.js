const getRandomColor = (colors) => {
  const randomInt = Math.floor(Math.random() * 6);
  switch (randomInt) {
    case 0:
      return colors[0];
    case 1:
      return colors[1];
    case 2:
      return colors[2];
    case 3:
      return colors[3];
    case 4:
      return colors[4];
    case 5:
      return colors[5];
    default:
      console.log("random number out of range");
  }
};

export default getRandomColor;
