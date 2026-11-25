import React from 'react';

const Toaster = () => {
    return (
        <div>

            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: "#E8F5EC",
                        color: "#14532D",
                        border: "1px solid #86C99B",
                        borderRadius: "12px",
                        padding: "14px 20px",
                        fontSize: "15px",
                        fontWeight: "600",
                        minWidth: "280px",
                        boxShadow: "0 6px 20px rgba(0, 80, 40, 0.15)",
                    },
                    success: {
                        iconTheme: {
                            primary: "#078B48",
                            secondary: "#FFFFFF",
                        },
                    },
                    error: {
                        style: {
                            background: "#FEECEC",
                            color: "#991B1B",
                            border: "1px solid #F5A3A3",
                            borderRadius: "12px",
                            padding: "14px 20px",
                            fontSize: "15px",
                            fontWeight: "600",
                            minWidth: "280px",
                            boxShadow: "0 6px 20px rgba(153, 27, 27, 0.12)",
                        },
                    },
                }}
            />

        </div>
    );
};

export default Toaster;