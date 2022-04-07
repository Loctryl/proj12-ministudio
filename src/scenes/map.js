const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var cursor;
var moveok;
var dude;
var hp;
var reticle = null;
var playerBullets = null;
var time = 0;
var timer = 0;
var Maxbullets = 100; //max amunition. there's still not a realoading system so keep this var with high number so we don't run out of ammo
var enemy = [];
var isoX;
var isoY;
var ground;
var wave = 1;
var world;

const DUDE_KEY = 'dude'
var touch;

//set Score variables
var score = 0;
var highScore = [];
var scoreText;
var highScoreText;
var lifeDisp = [];

var text;
var time = 0 ;
var timerEvents = [];
var scoreMultiplicator = 1;

var damaged = [];
var shoot = [];
var voiceline = [];
var szomb = [];
var shake;
var debugGraphics;
var showCollidingTiles = true;
var showTiles = true;
var showFaces = true;
var collider;

class Map extends Phaser.Scene {
  constructor() {
    super({ key: "Map" });
    this.playerBullets
  }

  updateCounter() {
    var Spawn
    for (let i = 0; i < wave; i++) {
      Spawn = Math.floor(Math.random() * 4)
      switch (Spawn) {
        case 0:
          enemy.push(this.physics.add.sprite(0, 0, 'zombi').setDepth(1));
          break;
        case 1:
          enemy.push(this.physics.add.sprite(9216, 0, 'zombi').setDepth(1));
          break;
        case 2:
          enemy.push(this.physics.add.sprite(0, 4608, 'zombi').setDepth(1));
          break;
        case 3:
          enemy.push(this.physics.add.sprite(9216, 4608, 'zombi').setDepth(1));
          break;

        default:
          break;
      }
    }
  }

  preload() {
    this.load.image('bullet', 'src/assets/sprite/bulletg.png');
    this.load.image('target', 'src/assets/sprite/crossAim.png');
    this.load.image('fulllife', 'src/assets/sprite/full_life.png');
    this.load.image('life-1', 'src/assets/sprite/life-1.png');
    this.load.image('life-2', 'src/assets/sprite/life-2.png');
    this.load.image('life-3', 'src/assets/sprite/life-3.png');
    this.load.image('life-4', 'src/assets/sprite/life-4.png');
    this.load.audio('damaged1', ['src/assets/SFX/damaged1.mp3']);
    this.load.audio('damaged2', ['src/assets/SFX/damaged2.mp3']);
    this.load.audio('damaged3', ['src/assets/SFX/damaged3.mp3']);
    this.load.audio('damaged4', ['src/assets/SFX/damaged4.mp3']);
    this.load.audio('damaged5', ['src/assets/SFX/damaged5.mp3']);
    this.load.audio('damaged6', ['src/assets/SFX/damaged6.mp3']);
    this.load.audio('forain', ['src/assets/SFX/forain.mp3']);
    this.load.audio('kill', ['src/assets/SFX/kill.mp3']);
    this.load.audio('onepiece', ['src/assets/SFX/onepiece.mp3']);
    this.load.audio('piscine', ['src/assets/SFX/piscine.mp3']);
    this.load.audio('shoot1', ['src/assets/SFX/shoot1.mp3']);
    this.load.audio('shoot2', ['src/assets/SFX/shoot2.mp3']);
    this.load.audio('shoot3', ['src/assets/SFX/shoot3.mp3']);
    this.load.audio('shoot4', ['src/assets/SFX/shoot4.mp3']);
    this.load.audio('shoot5', ['src/assets/SFX/shoot5.mp3']);
    this.load.audio('voiceline1', ['src/assets/SFX/voiceline1.mp3']);
    this.load.audio('voiceline2', ['src/assets/SFX/voiceline2.mp3']);
    this.load.audio('voiceline3', ['src/assets/SFX/voiceline3.mp3']);
    this.load.audio('voiceline4', ['src/assets/SFX/voiceline4.mp3']);
    this.load.audio('voiceline5', ['src/assets/SFX/voiceline5.mp3']);
    this.load.audio('voiceline6', ['src/assets/SFX/voiceline6.mp3']);
    this.load.audio('walking', ['src/assets/SFX/walking.mp3']);
    this.load.audio('zomb1', ['src/assets/SFX/zomb1.mp3']);
    this.load.audio('zomb2', ['src/assets/SFX/zomb2.mp3']);
    this.load.audio('zomb3', ['src/assets/SFX/zomb3.mp3']);
    this.load.audio('zomb4', ['src/assets/SFX/zomb4.mp3']);
    this.load.audio('orchestral', ['src/assets/SFX/orchestral.mp3'])
    //this.load.spritesheet(DUDE_KEY, 'src/assets/sprite/dude.png', { frameWidth: 33, frameHeight: 56 });
    this.load.spritesheet('zombi', 'src/assets/sprite/animZ.png', { frameWidth: 33, frameHeight: 56 });
    this.load.atlas(DUDE_KEY, 'src/assets/sprite/WalkProfil.png', 'src/assets/sprite/WalkProfil.json' )
    this.load.atlas('leftKey', 'src/assets/sprite/WalkProfilLeft.png', 'src/assets/sprite/WalkProfilLeft.json' )
    this.load.image('collider', 'src/assets/sprite/col.png');
    this.load.image('gravel', 'src/assets/sprite/ground/gravel.png');
    this.load.image('grass', 'src/assets/sprite/grass.png');
    this.load.image('wall', 'src/assets/sprite/wall.png');
    this.load.image('arche', 'src/assets/sprite/archeeliza.png');
    this.load.image('wheel', 'src/assets/sprite/wheel.png');
    this.load.image('house', 'src/assets/sprite/house.png');
  }

  create() {
    this.UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


    //Sound part
    this.sound.pauseOnBlur = false;
    damaged.push(this.sound.add('damaged1'));
    damaged.push(this.sound.add('damaged2'));
    damaged.push(this.sound.add('damaged3'));
    damaged.push(this.sound.add('damaged4'));
    damaged.push(this.sound.add('damaged5'));
    damaged.push(this.sound.add('damaged6'));
    this.forain = this.sound.add('forain');
    this.kill = this.sound.add('kill');
    this.onepiece = this.sound.add('onepiece');
    this.piscine = this.sound.add('piscine');
    this.walking = this.sound.add('walking');
    shoot.push(this.sound.add('shoot1'));
    shoot.push(this.sound.add('shoot2'));
    shoot.push(this.sound.add('shoot3'));
    shoot.push(this.sound.add('shoot4'));
    shoot.push(this.sound.add('shoot5'));
    voiceline.push(this.sound.add('voiceline1'));
    voiceline.push(this.sound.add('voiceline2'));
    voiceline.push(this.sound.add('voiceline3'));
    voiceline.push(this.sound.add('voiceline4'));
    voiceline.push(this.sound.add('voiceline5'));
    voiceline.push(this.sound.add('voiceline6'));
    szomb.push(this.sound.add('zomb1'));
    szomb.push(this.sound.add('zomb2'));
    szomb.push(this.sound.add('zomb3'));
    szomb.push(this.sound.add('zomb4'));
    this.orchestral = this.sound.add('orchestral');
    this.orchestral.play();
    this.orchestral.setVolume(0.1);
    this.orchestral.setLoop(true);

  
    //Spawn player
    dude = this.physics.add.sprite(500, 500, DUDE_KEY)
    CreatePlayer();

    //bullets settings
    playerBullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
    this.input.on('pointerdown', function (pointer, time, lastFired) {
      if (dude.active === false)
        return;
      // Get bullet from bullets group
      var bullet = playerBullets.get().setActive(true).setVisible(true);
      if (bullet) {

        bullet.fire(dude, reticle);
        shoot[Math.floor(Math.random() * 5)].play();
      }
    }, this);
    reticle = this.physics.add.sprite(700, 500, 'target');
    cursor = this.input.keyboard.createCursorKeys();
    reticle.setDepth(1);

  
    //display map
    for (let r = 0; r < map.length; r++) {
      for (let c = 0; c < map[0].length; c++) {
        switch (map[r][c]) {
          case 0:
            ground = this.add.sprite(0, 0, 'gravel');
            break;
          case 1:
            ground = this.add.sprite(0, 0, 'gravel');
            //world = this.physics.add.sprite(600, 400, 'wheel');
            world = this.physics.add.sprite(100, 100, 'house');
            world.body.pushable = false;
            break;
          case 2:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(0, 0, 'arche');
            world.body.pushable = false;
            break;
          case 3:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(700, 600, 'wheel');
            world.body.pushable = false;
            break;
          case 4:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(300,400, 'arche');
            world.body.pushable = false;
            break;
          case 5:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(0, 0, 'arche');
            world.body.pushable = false;
            break;
          case 6:
            ground = this.add.sprite(0, 0, 'gravel');
            world = this.physics.add.sprite(0, 0, 'arche');
            world.body.pushable = false;
            break;
          default:
            break;
        }
        isoX = (550 + r * 20) - (0 + c * 20);
        isoY = ((-630 + r * 23) + (0 + c * 23)) / 2;

        //collide with world
        this.physics.add.collider(dude, world, function () {
          moveok = false;
        });
        Phaser.Display.Align.In.TopCenter(ground, this.add.zone(isoX, isoY, 0, 0));
      }
    }      
    

    //Zombies settings
    touch = 1;
    for (let i = 0; i < 5; i++) {
      enemy[i] = this.physics.add.sprite(Math.random() * 500, Math.random() * 500, 'zombi').setDepth(1);
      this.physics.moveToObject(enemy[i], dude, 100)
    }
    this.physics.add.collider(dude, enemy, function () {
      if (touch == 1) {
        hp--;
        touch = 0;
        damaged[Math.floor(Math.random()*6)].play();
        shake =1; 
      }
    }); 
    this.physics.add.collider(enemy, enemy, function () {}); //collide between zombies

    //Collide between Zombies and bullets
    this.physics.add.overlap(enemy, playerBullets, function (enemy, playerBullets) {
      playerBullets.destroy();
      enemy.destroy();
      
      //update score
      score += 10 * scoreMultiplicator;
      scoreText.setText('Score: ' + score);
    });

    //Camera settings
    this.cameras.main.startFollow(dude, true, 0.09, 0.09);
    this.cameras.main.setZoom(1.7);
   
    //Print Score & Timer
    score = 0;
    timerEvents = [];
    scoreMultiplicator = 1;

    var style = { font: "bold 25px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    scoreText = this.add.text(250, 165, 'Score: 0', style).setScrollFactor(0);
    lifeDisp.push(this.add.image(250 , 350, 'fulllife').setScrollFactor(0));
    lifeDisp.push(this.add.image(250 , 350, 'life-1').setScrollFactor(0));
    lifeDisp.push(this.add.image(250 , 350, 'life-2').setScrollFactor(0));
    lifeDisp.push(this.add.image(250 , 350, 'life-3').setScrollFactor(0));
    lifeDisp.push(this.add.image(250 , 350, 'life-4').setScrollFactor(0));
    lifeDisp[1].setVisible(0);
    lifeDisp[2].setVisible(0);
    lifeDisp[3].setVisible(0);
    lifeDisp[4].setVisible(0);
    scoreText.setDepth(99); 
    text = this.add.text(1080/2-120, 165,'',style).setScrollFactor(0);
    timerEvents.push(this.time.addEvent({ delay: Phaser.Math.Between(5000, 5000), loop: true }));
    timerEvents.push(this.time.addEvent({ delay: Phaser.Math.Between(3000, 3000), loop: true }));
    text.setDepth(99);

    // Pointer lock will only work after mousedown
    game.canvas.addEventListener('mousedown', function () {
      game.input.mouse.requestPointerLock();
    });

    // Exit pointer lock when Q or escape (by default) is pressed.
    this.input.keyboard.on('keydown_Q', function (event) {
      if (game.input.mouse.locked)
        game.input.mouse.releasePointerLock();
    }, 0, this);

  this.input.on('pointermove', function (pointer) {
    if (this.input.mouse.locked) {
      reticle.x += pointer.movementX;
      reticle.y += pointer.movementY;
    }
  }, this);
}

  update() {
    // Constrain position of constrainReticle
    constrainReticle(reticle);
    if(shake == 1){ 
      this.cameras.main.shake(200,0.005);
      shake = 0;
    }

    //movement
    const speedWalk = 200;
    let dudeVelocity = new Phaser.Math.Vector2();

    if (this.LEFT.isDown) {
      dudeVelocity.x = -1;
      dude.flipX;
      dude.anims.play('left', true)
    }
    else if (this.RIGHT.isDown) {
      dudeVelocity.x = 1;

      dude.anims.play('right', true)
    }
    else{
      dude.anims.play('idle', true)
    }
     if (this.UP.isDown) {
      dudeVelocity.y = -1;

    }
    else if (this.DOWN.isDown) {
      dudeVelocity.y = 1;

    }
    
      
    dudeVelocity.scale(speedWalk);
    dude.setVelocity(dudeVelocity.x, dudeVelocity.y);

    //timer reinitialize
    var output = [];
    if (timerEvents[0].getProgress().toString().substr(0, 5) == 0.9)  {
      voiceline[Math.floor(Math.random()*5)].play();
      scoreMultiplicator += 1;
      this.updateCounter()
      if (wave == 10) {
        wave = 10;
      }  
      else{
        wave++;
      }  
    }
    if (timerEvents[1].getProgress().toString().substr(0, 5) == 0.9)  {
      touch = 1;
    }
    
    text.setText(output);
    
    if(hp == 5){
      lifeDisp[0].setVisible(1);
      lifeDisp[4].setVisible(0);
    }
    if(hp == 4){
      lifeDisp[0].setVisible(0);
      lifeDisp[1].setVisible(1);
    }
    if(hp == 3){
      lifeDisp[1].setVisible(0);
      lifeDisp[2].setVisible(1);
    }
    if(hp == 2){
      lifeDisp[2].setVisible(0);
      lifeDisp[3].setVisible(1);
    }
    if(hp == 1){
      lifeDisp[3].setVisible(0);
      lifeDisp[4].setVisible(1);
    }

    if(hp == 0){
      for (let i = 0; i < enemy.length; i++) {
        enemy[i] = 0;
      }
      wave = 0;
      if (Math.floor(Math.random() * 2) == 1) {
        this.piscine.play();
        this.piscine.setVolume(3);
      } else {
        this.onepiece.play();
        this.onepiece.setVolume(3);
      }
      this.orchestral.stop();
      getScore();
      this.scene.start("GameOver");
    }

    //zombies movement
    for (let i = 0; i < enemy.length; i++) {
      if (enemy[i].active == true) {
        this.physics.moveToObject(enemy[i], dude, 100);
      }
    }
  }
}

function CreatePlayer() {
  hp = 5;
  dude.setDepth(5);

  dude.anims.create({
    key: 'idle',
    frames: [{ key: DUDE_KEY, frame: 'WalkProfil1.png'  }],
  })

  dude.anims.create({
    key: 'right',
    frames: [{
      key: DUDE_KEY,
      frame: 'WalkProfil1.png'
    }, {
      key: DUDE_KEY,
      frame: 'WalkProfil2.png'
    },{
      key: DUDE_KEY,
      frame: 'WalkProfil3.png'
    },{
      key: DUDE_KEY,
      frame: 'WalkProfil4.png'
    },{
      key: DUDE_KEY,
      frame: 'WalkProfil5.png'
    }],
    frameRate: 1,
    repeat: -1
  })

  dude.anims.create({
    key: 'left',
    frames: [{
      key: 'leftKey',
      frame: 'WalkProfilLeft1.png'
    }, {
      key: 'leftKey',
      frame: 'WalkProfilLeft2.png'
    },{
      key: 'leftKey',
      frame: 'WalkProfilLeft3.png'
    },{
      key: 'leftKey',
      frame: 'WalkProfilLeft4.png'
    },{
      key: 'leftKey', 
      frame: 'WalkProfilLeft5.png'
    }],
    frameRate: 1,
    repeat: -1
  })
  
} 
