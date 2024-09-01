import React, { useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Chart } from 'chart.js/auto';

const PlantSoilMoistureLevel = ({ extractedSoils, soilData }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        // Create the chart when the component mounts
        if (chartRef.current && !chartInstance.current) {
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: soilData.map(item => new Date(item.timestamp).toLocaleDateString()),
                    datasets: [{
                        label: 'Plant Soil Level',
                        data: extractedSoils,
                        borderColor: 'rgba(13, 202, 240, 1)',
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
                                text: 'Soil Level',
                            },
                            beginAtZero: true,
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
    }, [extractedSoils, soilData]);

    return (
        <Card className="mb-4">
            <Card.Header className="bg-info">
                <Card.Title as="h5">Plant - Soil Moisture Level</Card.Title>
            </Card.Header>
            <Card.Body>
                <canvas ref={chartRef} />
            </Card.Body>
        </Card>
    );
};

export default PlantSoilMoistureLevel;

