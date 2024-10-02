document.getElementById("paste-container").addEventListener("paste", function (e) {
    e.preventDefault();

    if (e.clipboardData && e.clipboardData.items) {
        var items = e.clipboardData.items;

        for (var i = 0; i < items.length; i++) {
            if (items[i].type.indexOf("image") !== -1) {
                var file = items[i].getAsFile();

                // You can upload the 'file' to the server using XMLHttpRequest or fetch API
                // Example: Upload the file using the fetch API
                var formData = new FormData();
                formData.append("image", file);

                fetch("https://belajar.codee.my.id/ss/upload.php", {
                    method: "POST",
                    body: formData,
                })
                    .then(response => response.text())
                    .then(data => {
                        console.log(data);
                        var resultElement = document.getElementById("result");
                        resultElement.textContent = data;
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
            }
        }
    }
});
