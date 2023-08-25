document.addEventListener("DOMContentLoaded", function () {
    // Load the CSV file using Fetch API
    fetch("data.csv")
        .then(response => response.text())
        .then(data => {
            const time = [];
            const frequency = [];

            // Parse CSV data
            const rows = data.split("\n");
            for (let i = 1; i < rows.length; i++) {
                const cols = rows[i].split(",");
                time.push(cols[0]);
                frequency.push(parseInt(cols[1]));
            }

            // Create the chart
            const ctx = document.getElementById("frequencyChart").getContext("2d");
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: time,
                    datasets: [{
                        label: "Frequency vs Time",
                        data: frequency,
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "Time"
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "Frequency"
                            }
                        }
                    }
                }
            });
        });
});
