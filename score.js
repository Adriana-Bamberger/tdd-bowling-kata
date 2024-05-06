export { scoreFrame, scoreSpareFrame, scoreStrikeFrame, scoreDoubleStrikeFrame}

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

function scoreStrikeFrame(frame1, frame2) {
  // check if frame1 === 10
  // let totalStrikeFrame = 0
  // add frame2 bowls together
  // add frame1 to frame2
  // return as totalstrikeframe

  // for some reason test passes when we add the console log. WHY????
  let totalStrikeFrame = 0
  if (scoreFrame(frame1[0]) === 10) console.log(scoreFrame(frame1[0]) === 10)
  return (totalStrikeFrame += frame1[0] + scoreFrame(frame2))

  // console.log(totalStrikeFrame)
}

// function scoreDoubleStrikeFrame(frame1, frame2,... ){
  // Ran out of time to finish :(
// }
