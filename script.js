var inp = document.getElementById("dis")
        function percentage() {
            var n = prompt("What do you want to take % of");
            var ans = n * (inp.value/100)
            inp.value = ans;
        }