< !DOCTYPE html >
    <html>
        <head>
            <title>API Input and Filtered Response</title>
        </head>
        <body>
            <div>
                <h3>API Input</h3>
                <textarea id="apiInput" rows="4" cols="50"></textarea>
                <button onclick="submitData()">Submit</button>
            </div>

            <div>
                <h3>Multi Filter</h3>
                <div id="filterOptions">
                    <label><input type="checkbox" name="numbers" value="numbers"> Numbers</label>
                </div>
            </div>

            <div>
                <h3>Filtered Response</h3>
                <p id="filteredResponse"></p>
            </div>

            <script>
                function submitData() {
      const apiInput = document.getElementById("apiInput").value;
                const filterOptions = document.getElementById("filterOptions").querySelectorAll("input[type=checkbox]");

                // Assuming you have a function to send the data to your API:
                sendApiData(apiInput, filterOptions);
    }

                function sendApiData(data, filters) {
      // Replace this with your actual API call logic
      const url = "your_api_endpoint";
                const formData = new FormData();
                formData.append("data", data);

      // Append filter options to the form data
      filters.forEach(filter => {
        if (filter.checked) {
                    formData.append(filter.value, true);
        }
      });

                fetch(url, {
                    method: "POST",
                body: formData
      })
      .then(response => response.json())
      .then(response => {
                    // Update the filtered response display
                    document.getElementById("filteredResponse").textContent = response.filteredData;
      })
      .catch(error => {
                    console.error("Error:", error);
      });
    }
            </script>
        </body>
    </html>