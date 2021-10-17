const bar = document.getElementById("bar");
const torr = document.getElementById("torr");
const atm = document.getElementById("atm");
const kpa = document.getElementById("kpa");
const pa = document.getElementById("pa");
const psi = document.getElementById("psi");

const inputs = document.getElementsByClassName("form-control");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);

        switch (e.target.name) {
            case "bar":
                torr.value = ((value * 750.06) / 1).toFixed(6);
                atm.value = ((value * 0.98692) / 1).toFixed(6);
                kpa.value = ((value * 100) / 1).toFixed(6);
                pa.value = ((value * 100000) / 1).toFixed(6);
                psi.value = ((value * 14.504) / 1).toFixed(6);
                break;
            case "torr":
                bar.value = ((value * 1) / 750.06).toFixed(6);
                atm.value = ((value * 0.98692) / 750.06).toFixed(6);
                kpa.value = ((value * 100) / 750.06).toFixed(6);
                pa.value = ((value * 100000) / 750.06).toFixed(6);
                psi.value = ((value * 14.504) / 750.06).toFixed(6);
                break;
            case "atm":
                bar.value = ((value * 1) / 0.98692).toFixed(6);
                torr.value = ((value * 750.06) / 0.98692).toFixed(6);
                kpa.value = ((value * 100) / 0.98692).toFixed(6);
                pa.value = ((value * 100000) / 0.98692).toFixed(6);
                psi.value = ((value * 14.504) / 0.98692).toFixed(6);
                break;
            case "kpa":
                bar.value = ((value * 1) / 100).toFixed(6);
                torr.value = ((value * 750.06) / 100).toFixed(6);
                atm.value = ((value * 0.98692) / 100).toFixed(6);
                pa.value = ((value * 100000) / 100).toFixed(6);
                psi.value = ((value * 14.504) / 100).toFixed(6);
                break;
            case "pa":
                bar.value = ((value * 1) / 100000).toFixed(6);
                torr.value = ((value * 750.06) / 100000).toFixed(6);
                atm.value = ((value * 0.98692) / 100000).toFixed(6);
                kpa.value = ((value * 100) / 100000).toFixed(6);
                psi.value = ((value * 14.504) / 100000).toFixed(6);
                break;
            case "psi":
                bar.value = ((value * 1) / 14.504).toFixed(6);
                torr.value = ((value * 750.06) / 14.504).toFixed(6);
                atm.value = ((value * 0.98692) / 14.504).toFixed(6);
                kpa.value = ((value * 100) / 14.504).toFixed(6);
                pa.value = ((value * 100000) / 14.504).toFixed(6);
        }
    });
}
