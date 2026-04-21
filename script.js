// i18n - Internationalization
const i18n = {
    tr: {
        hud_status: 'DURUM',hud_time: 'ZAMAN',hud_memory: 'BELLEK',nav_home: 'ANA SAYFA',nav_about: 'HAKKIMDA',nav_experience: 'DENEYIM',nav_skills: 'YETENEKLER',nav_projects: 'PROJELER',nav_blog: 'BLOG',nav_terminal: 'TERMINAL',nav_contact: 'İLETİŞİM',hero_desc: 'Modern teknolojilerle dijital deneyimler yaratan tam yığın geliştirici',btn_explore: 'ÇALIŞMALARI KEŞFET',btn_contact: 'İLETİŞİME GEÇ',about_title: 'HAKKIMDA',about_desc1: 'Ölçeklenebilir web uygulamaları, bulut altyapısı ve açık kaynak çözümleri geliştirmede uzmanlaşmış tutkulu bir yazılım mühendisiyim. Bilgisayar biliminde sağlam bir temele ve modern teknolojilerde uygulamada karşılaşılan deneyimle, karmaşık sorunları zarif, kullanıcı merkezli çözümlere dönüştürürüm.',about_desc2: 'Teknolojideki yolculuğum, şeylerin nasıl çalıştığı merakı ile başladı. Bugün, kendimi sürekli öğrenmeye, işbirlikçi geliştirmeye ve fark yaratan anlamlı dijital ürünler yaratmaya adıyorum.',exp_title: 'DENEYİM',exp_role1: 'Kıdemli Yazılım Mühendisi',exp_company1: 'Tech Company Inc. · Tam Zamanlı',exp_desc1: 'Mikro hizmetler mimarisinin geliştirmesini yönettim, sistem performansını %40 iyileştirdim ve genç geliştiricilere modern geliştirme uygulamalarında rehberlik ettim.',exp_role2: 'Tam Yığın Geliştirici',exp_company2: 'Startup XYZ · Tam Zamanlı',exp_desc2: 'Tam yığın uygulamalar geliştirdim ve devreye aldım, DevOps uygulamalarını uyguladım ve açık kaynak projelerine katkıda bulundum.',skills_title: 'YETENEKLER',skills_frontend: 'Ön Yüz',skills_backend: 'Arka Yüz',skills_tools: 'Araçlar ve Platformlar',projects_title: 'PROJELER',project1_title: 'Yapay Zeka Destekli Pano',project1_desc: 'React ve Node.js ile oluşturulmuş, günde milyonlarca veri noktası işleyen gerçek zamanlı analitik panosu.',project2_title: 'Bulut Altyapısı Yöneticisi',project2_desc: 'Kubernetes orkestrasyonu ve otomatik ölçeklendirme ile çok bulutlu dağıtımları destekleyen basitleştirilmiş bulut kaynağı yönetim aracı.',project3_title: 'Açık Kaynak Katkısı',project3_desc: 'Birden fazla açık kaynak projesine aktif katkıda bulunma, hataları düzeltme, özellik uygulama ve geliştirici topluluğu için belgeleri iyileştirme.',blog_title: 'SON BLOG YAZILARI',blog1_title: 'Ölçeklenebilir Mikro Hizmetler Oluşturma',blog1_desc: 'API tasarımı, test etme ve dağıtım için en iyi uygulamalar dahil olmak üzere Node.js ile mikro hizmetler mimarisinin ayrıntılı rehberi.',blog1_date: '3 gün önce yayınlandı',blog2_title: '2024\'te TypeScript\'i Ustalaştırma',blog2_desc: 'Ölçekte sağlam, tür-güvenli uygulamalar oluşturmak için gerekli TypeScript desenleri ve ileri teknikleri.',blog2_date: '1 hafta önce yayınlandı',terminal_title: 'ETKİLEŞİMLİ TERMINAL',terminal_welcome: 'ACH Terminal\'e hoş geldiniz',terminal_help_text: 'Mevcut komutlar için "help" yazın',contact_title: 'İLETİŞİME GEÇ',contact_desc: 'Her zaman yeni projeler ve fırsatlar hakkında duymakla ilgileniyorum. Sosyal kanallarımdan herhangi birini kullanarak iletişime geçmekten çekinmeyin veya bana bir e-posta gönderin.',contact_email: 'E-posta',contact_github: 'GitHub',contact_linkedin: 'LinkedIn',contact_twitter: 'Twitter',footer_text: '© 2024 Akif Can Hisar. Tüm hakları saklıdır.',footer_crafted: 'Sevgiyle ve saf kodla yapılmıştır'
    },
    en: {
        hud_status: 'STATUS',hud_time: 'TIME',hud_memory: 'MEMORY',nav_home: 'HOME',nav_about: 'ABOUT',nav_experience: 'EXPERIENCE',nav_skills: 'SKILLS',nav_projects: 'PROJECTS',nav_blog: 'BLOG',nav_terminal: 'TERMINAL',nav_contact: 'CONTACT',hero_desc: 'Full-stack developer crafting digital experiences with modern technologies',btn_explore: 'EXPLORE WORK',btn_contact: 'GET IN TOUCH',about_title: 'ABOUT ME',about_desc1: 'I\'m a passionate software engineer with expertise in building scalable web applications, cloud infrastructure, and open-source solutions. With a strong foundation in computer science and hands-on experience in modern technologies, I transform complex problems into elegant, user-centric solutions.',about_desc2: 'My journey in tech started with a curiosity about how things work. Today, I dedicate myself to continuous learning, collaborative development, and creating meaningful digital products that make a difference.',exp_title: 'EXPERIENCE',exp_role1: 'Senior Software Engineer',exp_company1: 'Tech Company Inc. · Full-time',exp_desc1: 'Led development of microservices architecture, improved system performance by 40%, and mentored junior developers in modern development practices.',exp_role2: 'Full Stack Developer',exp_company2: 'Startup XYZ · Full-time',exp_desc2: 'Developed and deployed full-stack applications, implemented DevOps practices, and contributed to open-source projects.',skills_title: 'SKILLS',skills_frontend: 'Frontend',skills_backend: 'Backend',skills_tools: 'Tools & Platforms',projects_title: 'PROJECTS',project1_title: 'AI-Powered Dashboard',project1_desc: 'A real-time analytics dashboard with AI-driven insights, built with React and Node.js, processing millions of data points daily.',project2_title: 'Cloud Infrastructure Manager',project2_desc: 'Simplified cloud resource management tool supporting multi-cloud deployments with Kubernetes orchestration and automated scaling.',project3_title: 'Open Source Contribution',project3_desc: 'Active contributor to multiple open-source projects, fixing bugs, implementing features, and improving documentation for developer communities.',blog_title: 'LATEST BLOG POSTS',blog1_title: 'Building Scalable Microservices',blog1_desc: 'An in-depth guide to architecting microservices with Node.js, including best practices for API design, testing, and deployment.',blog1_date: 'Published 3 days ago',blog2_title: 'Mastering TypeScript in 2024',blog2_desc: 'Essential TypeScript patterns and advanced techniques for building robust, type-safe applications at scale.',blog2_date: 'Published 1 week ago',terminal_title: 'INTERACTIVE TERMINAL',terminal_welcome: 'Welcome to ACH Terminal',terminal_help_text: 'Type "help" for available commands',contact_title: 'GET IN TOUCH',contact_desc: 'I\'m always interested in hearing about new projects and opportunities. Feel free to reach out through any of my social channels or send me an email.',contact_email: 'Email',contact_github: 'GitHub',contact_linkedin: 'LinkedIn',contact_twitter: 'Twitter',footer_text: '© 2024 Akif Can Hisar. All rights reserved.',footer_crafted: 'Crafted with <3 and pure code'
    }
};
let currentLanguage = localStorage.getItem('language') || 'tr';
function initLanguage() { setLanguage(currentLanguage); }
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => { btn.classList.remove('active'); });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n[lang][key]) { element.textContent = i18n[lang][key]; }
    });
}
function initBoot() {
    return new Promise((resolve) => {
        const bootScreen = document.getElementById('bootScreen');
        if (bootScreen) {
            setTimeout(() => {
                bootScreen.classList.add('hidden');
                setTimeout(() => { bootScreen.style.display = 'none'; resolve(); }, 1000);
            }, 2400);
        } else { resolve(); }
    });
}
function initCursor() {
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursor-ring');
    if (!cursor || !cursorRing) return;
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 4 + 'px';
        cursor.style.top = e.clientY - 4 + 'px';
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
    });
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
        cursorRing.style.transform = 'scale(0.8)';
    });
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        cursorRing.style.transform = 'scale(1)';
    });
}
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    for (let i = 0; i < 50; i++) { particles.push(new Particle()); }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => { particle.update(); particle.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
}
function initHUD() {
    const hudTime = document.getElementById('hud-time');
    if (!hudTime) return;
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        hudTime.textContent = `${hours}:${minutes}:${seconds}`;
    }
    updateTime();
    setInterval(updateTime, 1000);
}
function initTerminal() {
    const terminal = document.getElementById('terminal');
    const terminalInput = document.getElementById('terminal-input');
    if (!terminal || !terminalInput) return;
    const commands = {
        help: 'Available commands: about, whoami, skills, projects, experience, blog, contact, social, date, lang, matrix, clear',
        about: 'Full-stack developer with expertise in modern web technologies and cloud infrastructure.',
        whoami: 'Akif Can Hisar - Software Engineer | akiifcaann1@gmail.com',
        skills: 'React, TypeScript, Node.js, Python, PostgreSQL, AWS, Docker, Kubernetes, and more...',
        projects: 'AI-Powered Dashboard, Cloud Infrastructure Manager, Open Source Contributions',
        experience: 'Senior Software Engineer at Tech Company Inc. | Full Stack Developer at Startup XYZ',
        blog: 'Latest: Building Scalable Microservices, Mastering TypeScript in 2024',
        contact: 'Email: akiifcaann1@gmail.com | GitHub: akifcanhisar | LinkedIn: akif-can-hisar',
        social: 'GitHub: github.com/akifcanhisar | Twitter: @akifcanhisar',
        date: () => new Date().toString(),
        lang: `Current language: ${currentLanguage === 'tr' ? 'Turkish (TR)' : 'English (EN)'}`,
        matrix: '✓ Loading neural matrix...',
        clear: ''
    };
    terminalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const input = terminalInput.value.trim().toLowerCase();
            if (input === 'clear') { terminal.innerHTML = ''; terminalInput.value = ''; return; }
            const userLine = document.createElement('div');
            userLine.className = 'terminal-line';
            userLine.innerHTML = `<span class="terminal-prompt">&gt;</span> ${input}`;
            terminal.appendChild(userLine);
            let response = commands[input];
            if (typeof response === 'function') { response = response(); }
            else if (!response) { response = `Command not found: ${input}. Type 'help' for available commands.`; }
            const responseLine = document.createElement('div');
            responseLine.className = 'terminal-line';
            responseLine.style.color = 'var(--cyan)';
            responseLine.textContent = response;
            terminal.appendChild(responseLine);
            terminal.scrollTop = terminal.scrollHeight;
            terminalInput.value = '';
        }
    });
}
function initScrollReveal() {
    const reveals = document.querySelectorAll('.card');
    const revealOptions = { threshold: 0.15, rootMargin: '0px 0px -100px 0px' };
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } });
    }, revealOptions);
    reveals.forEach(reveal => revealOnScroll.observe(reveal));
}
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) { current = section.getAttribute('id'); }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) { link.classList.add('active'); }
        });
    });
}
document.addEventListener('DOMContentLoaded', async () => {
    initLanguage();
    initCursor();
    initParticles();
    initHUD();
    initTerminal();
    initNavigation();
    await initBoot();
    initScrollReveal();
});
window.addEventListener('load', () => {
    const bootScreen = document.getElementById('bootScreen');
    if (bootScreen) { bootScreen.style.display = 'none'; bootScreen.classList.add('hidden'); }
});
