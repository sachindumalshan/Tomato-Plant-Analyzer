import React, { useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Chart } from 'chart.js/auto';

const PlantHeightGrowth = ({ extractedHeights, heightData }) => {
    const chartRef = useRef(null); // Reference to the canvas element
    const chartInstance = useRef(null); // Reference to the chart instance

    useEffect(() => {
        // Create the chart when the component mounts
        if (chartRef.current && !chartInstance.current) {
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: heightData.map(item => new Date(item.timestamp).toLocaleDateString()),
                    datasets: [{
                        label: 'Plant Height',
                        data: extractedHeights,
                        borderColor: 'rgba(220, 53, 69, 1)', // Color of the line
                        borderWidth: 2,
                        borderDash: [5, 5]
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Date',
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Plant Height (cm)',
                            },
                            beginAtZero: false, // Start the y-axis at zero
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        },
                        tooltip: {
                            enabled: true,
                        },
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
    }, [extractedHeights, heightData]);

    return (
        <Card className="mb-4">
            <Card.Header className="bg-danger">
                <Card.Title as="h5"><span className='text-white'>Plant Growth - Height</span></Card.Title>
            </Card.Header>
            <Card.Body>
                <canvas ref={chartRef} />
            </Card.Body>
        </Card>
    );
};

export default PlantHeightGrowth;
