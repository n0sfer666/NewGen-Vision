const courses: TCourse[] = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];
const requiredRanges: TPrices[] = [
  [null, 200],
  [100, 350],
  [200, null],
];
const normilize: INormalize = (value) => {
  return [
    value[0] === null ? -Infinity : value[0],
    value[1] === null ? Infinity : value[1]
  ]
}

const compare: ICompare = (value, condition) => {
  const source = normilize(value);
  const filter = normilize(condition);
  return (source[0] <= filter[1] && source[1] >= filter[0])
}

const results: Array<TCourse[]> = [[]];
requiredRanges.forEach((requiredRange, index) => {
  if (index !== 0) results.push([]);
  
  courses.forEach((course) => {
    if (compare(course.prices, requiredRange)) results[index].push(course);
  })
})
console.log('courses:');
console.log(courses);

results.forEach((result, index) => {
  console.log('output for', requiredRanges[index]);
  console.log(result);
})