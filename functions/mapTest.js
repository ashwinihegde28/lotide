// This function uses map

const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
const res = lighthouses.map((word => word.length));
console.log(res);

// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
