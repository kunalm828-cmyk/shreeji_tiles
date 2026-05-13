import React from 'react';

const LocalAreaTrust = () => {
    const areas = [
        "Akota", "Alkapuri", "Karelibaug", "Gotri", "Harni", 
        "Fatehgunj", "Nizampura", "Vasna", "Sayajigunj", 
        "Manjalpur", "Waghodia", "Pratap Nagar", "Dabhoi Road"
    ];

    return (
        <section className="local-trust section-padding bg-light" id="areas-served">
            <div className="container">
                <div className="section-header center reveal">
                    <h2>Serving Every Corner of Vadodara</h2>
                    <p>From **luxury tiles in Akota** to **premium flooring in Alkapuri**, we are the preferred choice for homeowners across Gujarat.</p>
                </div>

                <div className="areas-grid reveal">
                    {areas.map((area, idx) => (
                        <div key={idx} className="area-chip">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Best Tiles in {area}</span>
                        </div>
                    ))}
                </div>

                <div className="voice-search-content section-padding-top reveal">
                    <div className="voice-box">
                        <h3><i className="fa-solid fa-microphone"></i> People Also Ask...</h3>
                        <div className="voice-queries">
                            <p>"Which is the best tiles showroom near me in Vadodara?"</p>
                            <p>"Where to buy premium ceramic tiles in Gujarat?"</p>
                            <p>"Best bathroom tiles shop near me with anti-skid collection?"</p>
                        </div>
                        <p className="voice-answer">
                            Shreeji Tiles is the answer. We are the **top-rated tiles dealer in Vadodara**, 
                            providing **modern kitchen tiles**, **luxury floor solutions**, and **high-end bathroom fittings** 
                            to villas and bungalows from **Gotri to Waghodia**.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .areas-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    justify-content: center;
                    margin-top: 40px;
                }
                .area-chip {
                    padding: 12px 25px;
                    background: white;
                    border: 1px solid #e0e0e0;
                    border-radius: 50px;
                    font-size: 0.95rem;
                    color: #444;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s ease;
                }
                .area-chip i { color: var(--primary-color); }
                .area-chip:hover {
                    border-color: var(--primary-color);
                    background: var(--primary-color);
                    color: white;
                    transform: translateY(-3px);
                }
                .area-chip:hover i { color: white; }
                
                .voice-box {
                    background: #fff;
                    padding: 40px;
                    border-radius: 25px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.05);
                    border-left: 5px solid var(--primary-color);
                }
                .voice-box h3 {
                    font-size: 1.8rem;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .voice-queries p {
                    font-style: italic;
                    color: #666;
                    margin-bottom: 10px;
                    padding-left: 20px;
                    border-left: 2px solid #eee;
                }
                .voice-answer {
                    margin-top: 30px;
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: #333;
                }
                @media (max-width: 768px) {
                    .voice-box { padding: 25px; }
                    .area-chip { font-size: 0.85rem; padding: 10px 20px; }
                }
            `}</style>
        </section>
    );
};

export default LocalAreaTrust;
