gsap.registerPlugin(ScrollTrigger);

const fadeInUp = {
  opacity: 0,
  y: 10,
  duration: 0.6,
};

const fadeInDown = {
  opacity: 0,
  y: -10,
  duration: 0.6,
};

const fadeInLeft = {
  opacity: 0,
  x: 10,
  duration: 1.2,
};

const fadeInRight = {
  opacity: 0,
  x: -10,
  duration: 1.2,
};

heroTl = gsap.timeline({
  stagger: 0.1,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#hero",
    // markers: true,
    start: "top 60%",
    end: "bottom top",
    // toggleActions: "restart none none none",
  },
});

heroTl
  .from("#hero h1", fadeInUp)
  .from("#hero p", fadeInUp, "-=0.4")
  .from("#hero .cta-btn", fadeInUp, "-=0.4")
  .from("#hero .hero-img", fadeInLeft, "-=0.4");

benefitsTl = gsap.timeline({
  stagger: 0.1,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#benefits",
    // markers: true,
    start: "top bottom",
    end: "bottom top",
    // toggleActions: "restart none none none",
  },
});

benefits = document.querySelectorAll(".benefit");

benefits.forEach((benefit) => {
  benefitsTl.from(benefit, fadeInUp);
});

gsap.from("#problems h2", {
  opacity: 0,
  y: 10,
  duration: 0.6,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#problems",
    // markers: true,
    start: "top 80%",
    end: "bottom top",
    // toggleActions: "restart none none none",
  },
});

solutionsTl = gsap.timeline({
  stagger: 0.1,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#solutions",
    markers: true,
    start: "5% top",
    end: "+=4000",
    pin: true,
    scrub: 1,
  },
});

solutionsTl.from("#solutions h2", fadeInUp);

socailProofs = document.querySelectorAll(".proof");

socailProofs.forEach((proof) => {
  solutionsTl.from(proof, fadeInUp);
});

solutionsTl.from("#solutions .m1", {
  opacity: 0,
  x: 20,
});
solutionsTl.from("#solutions .p1", {
  opacity: 0,
  y: 20,
});
solutionsTl.to("#solutions .m1", {
  opacity: 0,
  x: 20,
});
solutionsTl.to("#solutions .p1", {
  opacity: 0,
  y: 20,
});
solutionsTl.from("#solutions .m2", {
  opacity: 0,
  x: 20,
});
solutionsTl.from("#solutions .p2", {
  opacity: 0,
  y: 20,
});
solutionsTl.to("#solutions .m2", {
  opacity: 0,
  x: 20,
});
solutionsTl.to("#solutions .p2", {
  opacity: 0,
  y: 20,
});
solutionsTl.from("#solutions .m3", {
  opacity: 0,
  y: 20,
});
solutionsTl.from("#solutions .p3", {
  opacity: 0,
  y: 20,
});
