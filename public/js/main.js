// LCARS Timeline Main JavaScript
import anime from 'animejs/lib/anime.es.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('LCARS Timeline initialized');
    initializeTimeline();
    initializeAnimations();
});

function initializeTimeline() {
    const timeline = document.querySelector('.timeline-container');
    const infoPanel = document.querySelector('.info-container');
    
    // TODO: Add timeline data loading
    timeline.innerHTML = 'Timeline ready for data loading...';
    
    // Example event handling
    timeline.addEventListener('click', (e) => {
        infoPanel.textContent = 'Timeline element clicked. Event details will be displayed here.';
        animateInfoPanel();
    });
}

function initializeAnimations() {
    // Initial entrance animation
    anime({
        targets: '.lcars-section',
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200),
        easing: 'easeOutElastic(1, .8)'
    });
}

function animateInfoPanel() {
    anime({
        targets: '.info-container',
        backgroundColor: ['rgba(255,153,0,0.2)', 'rgba(255,153,0,0)'],
        duration: 800,
        easing: 'easeOutExpo'
    });
} 