import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import {Card} from "react-bootstrap"; // Import Chart from chart.js

const PlantSoilMoistureLevel = () => {
    const chartRef = useRef(null); // Reference to the canvas element
    const chartInstance = useRef(null); // Reference to the chart instance

    useEffect(() => {
        // Create the chart when the component mounts
        if (chartRef.current && !chartInstance.current) {
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [
                        "Day-01", "Day-02", "Day-03", "Day-04", "Day-05", "Day-06", "Day-07", "Day-08", "Day-09", "Day-10", "Day-11", "Day-12", "Day-13", "Day-14", "Day-15", "Day-16", "Day-17", "Day-18", "Day-19", "Day-20", "Day-21",
                    ],
                    datasets: [{
                        label: 'Plant Height (cm)',
                        data: [67, 15, 14, 24, 28, 35, 35, 43, 23, 11, 37, 10, 19, 39, 37, 30, 28, 35, 49, 42, 54, 50],
                        borderColor: 'rgba(75, 192, 192, 1)', // Color of the line
                        borderWidth: 2,
                        borderDash: [5, 5], // Dashed line
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: false,
                                text: 'Year'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Moisture Level'
                            }
                        }
                    }
                }
            });
        }

        // Destroy the chart when the component unmounts
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }
        };
    }, []);

    return (
        <Card>
            <Card.Header>
                <Card.Title as="h5"><i className="fas fa-chart-line text-success mr-2"></i> Plant Growth - Soil Moisture Level </Card.Title>
            </Card.Header>
            <Card.Body>
                <canvas ref={chartRef} />
            </Card.Body>
            <Card.Footer>
                <div className="stats">
                    <i className="fas fa-history"></i>
                    Updated 1 day ago
                </div>
            </Card.Footer>
        </Card>
    );
}

export default PlantSoilMoistureLevel;
