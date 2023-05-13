const dateFormatter = new Intl.DateTimeFormat('id', { day: 'numeric', month: 'long', weekday: "long", year: "numeric" });

const date = new Date("2019-10-16T17:57:28.210328")

console.log(dateFormatter.format(date));