function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  // ERRO
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Invalid input");
  }

  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
  let degreeSign = "C";

  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9 / 5 + 32;
    degreeSign = "F";
  }

  return formula(updateDegree) + degreeSign;
}

try {
  console.log(transformDegree("10C"));
  console.log(transformDegree("50F"));
  transformDegree('50Z');
} catch (e) {
  console.log(e);
}