const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");

  const rangeNum = +rangeWidth.substring(0, rangeWidth.length - 2);
  const labelNum = +labelWidth.substring(0, labelWidth.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    value * (rangeNum / max) - labelNum / 2 + scale(value, min, max, 11, -11);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});

// this is basically a fxn that maps a number to another number
const scale = (num, inmin, inmax, outmin, outmax) => {
  return ((num - inmin) * (outmax - outmin)) / (inmax - inmin) + outmin;
};
