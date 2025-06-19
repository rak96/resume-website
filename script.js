// Matrix Rain Effect
class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrixCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.chars = '01アァカサタナハマヤャラワンーガザダバパイィキシチニヒミリヰィーギジヂビピウゥクスツヌフムユュルウヴケセテネヘメレエヱエーゲゼデベペオォコソトノホモヨョロヲオーゴゾドボポヴヶ';
        this.matrix = [];
        this.fontSize = 14;
        this.columns = 0;
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.matrix = Array(this.columns).fill(0);
    }
    
    init() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(1, 4, 9, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for (let i = 0; i < this.matrix.length; i++) {
            const char = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.ctx.fillText(char, i * this.fontSize, this.matrix[i] * this.fontSize);
            
            if (this.matrix[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.matrix[i] = 0;
            }
            this.matrix[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize Matrix Rain
document.addEventListener('DOMContentLoaded', () => {
    new MatrixRain();
});

// Terminal Typing Effect - One-time sequence
class TerminalTyper {
    constructor() {
        this.commands = document.querySelectorAll('.command');
        this.typeSpeed = 80;
        this.delayBetween = 1500;
        
        this.startSequence();
    }
    
    async typeText(element, text) {
        element.textContent = '';
        for (let i = 0; i < text.length; i++) {
            element.textContent += text[i];
            await this.sleep(this.typeSpeed + Math.random() * 40); // Add some natural variation
        }
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async startSequence() {
        // Type each command once in sequence
        for (let i = 0; i < this.commands.length; i++) {
            const command = this.commands[i];
            const originalText = command.textContent;
            
            // Hide the command initially
            command.style.opacity = '0';
            
            // Wait a bit, then show and type the command
            await this.sleep(i * 800);
            command.style.opacity = '1';
            await this.typeText(command, originalText);
        }
    }
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu if open
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(13, 17, 23, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(13, 17, 23, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Glitch Effect on Hover
document.addEventListener('DOMContentLoaded', () => {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'glitch 0.3s infinite';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animation = 'glitch 2s infinite';
        });
    });
});

// Terminal Cursor Blinking
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
});

// Skill Tags Interactive Effect
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Create floating text effect
            const rect = tag.getBoundingClientRect();
            const floatingText = document.createElement('div');
            floatingText.textContent = `${tag.textContent} activated!`;
            floatingText.style.position = 'fixed';
            floatingText.style.left = rect.left + 'px';
            floatingText.style.top = rect.top + 'px';
            floatingText.style.color = '#00ff41';
            floatingText.style.fontFamily = 'JetBrains Mono, monospace';
            floatingText.style.fontSize = '12px';
            floatingText.style.pointerEvents = 'none';
            floatingText.style.zIndex = '9999';
            floatingText.style.animation = 'float-up 2s ease-out forwards';
            
            document.body.appendChild(floatingText);
            
            setTimeout(() => {
                document.body.removeChild(floatingText);
            }, 2000);
        });
    });
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
`;
document.head.appendChild(style);

// Timeline Dot Pulse on Scroll
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const dot = entry.target.querySelector('.timeline-dot');
            if (dot) {
                dot.style.animation = 'pulse 1s ease-in-out infinite, glow 2s ease-in-out infinite';
            }
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});

// Add glow animation
const glowStyle = document.createElement('style');
glowStyle.textContent = `
    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 10px var(--primary-color);
        }
        50% {
            box-shadow: 0 0 20px var(--primary-color), 0 0 30px var(--primary-color);
        }
    }
`;
document.head.appendChild(glowStyle);

// Contact Items Hover Effect
document.addEventListener('DOMContentLoaded', () => {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = `translateY(-10px) rotateY(${index % 2 === 0 ? '5deg' : '-5deg'})`;
            
            // Add typing sound effect (visual)
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.animation = 'bounce 0.6s ease-in-out';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) rotateY(0deg)';
            
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.animation = '';
            }
        });
    });
});

// Add bounce animation
const bounceStyle = document.createElement('style');
bounceStyle.textContent = `
    @keyframes bounce {
        0%, 20%, 60%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        80% {
            transform: translateY(-5px);
        }
    }
`;
document.head.appendChild(bounceStyle);

// Hacker Typing Effect for Navigation Logo
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = 'rakesh_ramesh';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 150);
            } else {
                setTimeout(() => {
                    typingText.textContent = '';
                    index = 0;
                    setTimeout(typeWriter, 1000);
                }, 3000);
            }
        }
        
        typingText.textContent = '';
        typeWriter();
    }
});

// Terminal Window Boot Sequence
document.addEventListener('DOMContentLoaded', () => {
    const terminalLines = document.querySelectorAll('.terminal-line');
    const outputs = document.querySelectorAll('.output');
    
    // Initially hide all terminal content
    terminalLines.forEach(line => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
    });
    
    outputs.forEach(output => {
        output.style.opacity = '0';
    });
    
    // Show terminal lines and outputs in sequence (one-time only)
    terminalLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.transition = 'all 0.5s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
            
            // Show corresponding output after command appears
            const nextOutput = line.nextElementSibling;
            if (nextOutput && nextOutput.classList.contains('output')) {
                setTimeout(() => {
                    nextOutput.style.transition = 'opacity 0.3s ease';
                    nextOutput.style.opacity = '1';
                }, 300);
            }
        }, index * 600);
    });
});

// Page Load Glitch Effect
window.addEventListener('load', () => {
    document.body.style.animation = 'pageGlitch 0.5s ease-out';
});

// Add page glitch animation
const pageGlitchStyle = document.createElement('style');
pageGlitchStyle.textContent = `
    @keyframes pageGlitch {
        0% {
            transform: scale(1.01) skew(0.5deg);
            filter: hue-rotate(90deg);
        }
        20% {
            transform: scale(1) skew(0deg);
            filter: hue-rotate(0deg);
        }
        40% {
            transform: scale(1.01) skew(-0.5deg);
            filter: hue-rotate(-90deg);
        }
        60% {
            transform: scale(1) skew(0deg);
            filter: hue-rotate(0deg);
        }
        80% {
            transform: scale(1.01) skew(0.2deg);
            filter: hue-rotate(45deg);
        }
        100% {
            transform: scale(1) skew(0deg);
            filter: hue-rotate(0deg);
        }
    }
`;
document.head.appendChild(pageGlitchStyle);

// Add Terminal Boot Effect
document.addEventListener('DOMContentLoaded', () => {
    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
        terminalWindow.style.opacity = '0';
        terminalWindow.style.transform = 'scale(0.8)';
        terminalWindow.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            terminalWindow.style.opacity = '1';
            terminalWindow.style.transform = 'scale(1)';
        }, 500);
    }
});

// Education and Experience Cards Stagger Effect
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.education-card, .skill-category');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
});

// Initialize Terminal Typer
document.addEventListener('DOMContentLoaded', () => {
    new TerminalTyper();
}); 