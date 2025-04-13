import React from 'react';
import { animate, stagger } from 'animejs';
import '../styles/App.scss';

const App = () => {
    React.useEffect(() => {
        // Initial animation
        animate({
            targets: '.lcars-section',
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 800,
            delay: stagger(200),
            easing: 'easeOutElastic(1, .8)'
        });
    }, []);

    return (
        <main className="lcars-layout">
            <section id="console" className="lcars-section">
                <header className="lcars-header">
                    <h1>LCARS Timeline</h1>
                </header>
            </section>
            
            <section id="timeline" className="lcars-section">
                <div className="timeline-container">
                    Loading timeline...
                </div>
            </section>
            
            <section id="info-panel" className="lcars-section">
                <div className="info-container">
                    Select an event to view details
                </div>
            </section>
        </main>
    );
};

export default App; 