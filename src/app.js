const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const getCurrentMonth = (date = new Date()) => {
    const currentMonth = date.getMonth();

    return months[currentMonth];
};

const isAdmin = (userId) => userId === "admin" || userId === "sudo";

const isValidName = (noms) => {
    const nomOk = [];
    for (const element of noms) {
        if (!element.includes("x") && !element.includes("X")) {
            nomOk.push(element);
        }
    }

    return nomOk;
};

try {
    document.getElementById("month").innerText = getCurrentMonth();
} catch (err) {
    console.error(JSON.stringify(err));
}

exports.getCurrentMonth = getCurrentMonth;
exports.isAdmin = isAdmin;
exports.isValidName = isValidName;
