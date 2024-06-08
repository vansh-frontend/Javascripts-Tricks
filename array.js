function array() {
  const arr1 = ["red", "green", "red", "yellow"];
  const arr2 = ["black", "yellow", "red", "purple"];

  const merge = [...new Set([...arr1, ...arr2])];

  document.write("array1:", arr1, "\narray2:", arr2);

  document.write("\n");

  document.write("merge array1  + array2: ");
  const mergee = [...arr1, ...arr2];
  document.write(mergee);

  document.write(merge);
}
array();
