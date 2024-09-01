import React, { useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Chart } from 'chart.js/auto';

const PlantAreaGrowth = ({ extractedAreas, areaData }) => {
    const chartRef = useRef(null); 
    const chartInstance = useRef(null);

    useEffect(() => {
        // Create the chart when the component mounts
        if (chartRef.current && !chartInstance.current) {
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: areaData.map(item => new Date(item.timestamp).toLocaleDateString()),
                    datasets: [{
                        label: 'Plant Leaves Area',
                        data: extractedAreas,
                        borderColor: 'rgba(255, 193, 7, 1)',
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
                                text: 'Plant Leaves Area (cm*cm)',
                            },
                            beginAtZero: false,
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
    }, [extractedAreas, areaData]);

    return (
        <Card className="mb-4">
            <Card.Header className="bg-warning">
                <Card.Title as="h5"> Plant Growth - Leaves Area</Card.Title>
            </Card.Header>
            <Card.Body>
                <canvas ref={chartRef} />
            </Card.Body>
        </Card>
    );
};

export default PlantAreaGrowth;

