export { scoreFrame, scoreSpareFrame }

// const frames = [
//   [2, 0],

function scoreFrame(frame) {
  // Take sjust the one frame
  const sum = frame[0] + frame[1]
  // only need to call it within it's self when making tests, normally we would still need to call it.
  return sum
}

function scoreSpareFrame(frame1, frame2) {
  // take in one frame that will be a spare
  // takes in the other frame that will be normal
  // adds the first ball of the secound frame and the frist frame into "totalSpareFrame"
  // WE DID THIS ALL BY OUR SELVES!!!
  let totalSpareFrame = 0
  if (scoreFrame(frame1) === 10)
    return (totalSpareFrame = scoreFrame(frame1) + frame2[0])
}
