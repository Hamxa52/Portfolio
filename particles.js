particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50, /* Adjust the number of particles */
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FF520E" /* Set the stroke color of the hexagon */
        },
        "shape": {
            "type": "polygon", /* Hexagonal shape */
            "stroke": {
                "width": 1, /* Stroke width */
                "color": "#FF520E" /* Color of the stroke */
            },
            "polygon": {
                "nb_sides": 6 /* Number of sides for hexagonal shape */
            }
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 10, /* Adjust the size of hexagons */
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": false /* Disable lines between particles */
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" /* Particles repel when hovered */
            },
            "onclick": {
                "enable": true,
                "mode": "push" /* Add particles on click */
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});
