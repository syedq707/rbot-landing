gsap.registerPlugin(ScrollTrigger);

// Global Animations

const fadeInUp = {
  opacity: 0,
  y: 10,
  duration: 0.8,
};

const fadeInDown = {
  opacity: 0,
  y: -10,
  duration: 0.8,
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

// Hero Section

heroTl = gsap.timeline({
  stagger: 0.1,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#hero",
    // markers: true,
    start: "top 60%",
    end: "bottom top",
    toggleActions: "restart none restart none",
  },
});

heroTl
  .from("#hero h1", fadeInUp)
  .from("#hero p", fadeInUp, "-=0.4")
  .from("#hero .cta-btn", fadeInUp, "-=0.4")
  .from("#hero .hero-img", fadeInLeft, "-=0.4");

// Benefits Section

benefitsTl = gsap.timeline({
  stagger: 0.1,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#benefits",
    // markers: true,
    start: "top bottom",
    end: "bottom top",
    toggleActions: "restart none restart none",
  },
});

benefits = document.querySelectorAll(".benefit");

benefits.forEach((benefit) => {
  benefitsTl.from(benefit, fadeInUp, "-=0.4");
});

// Problem Section

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
    toggleActions: "restart none restart none",
  },
});

// Solutions Section

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
  x: 20,
});
solutionsTl.from("#solutions .p3", {
  opacity: 0,
  y: 20,
});

// Plan Section

planTl = gsap.timeline({
  stagger: 0.1,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#plan",
    // markers: true,
    start: "top 60%",
    end: "bottom top",
    toggleActions: "restart none restart none",
  },
});

planTl.from("#plan h2", fadeInUp);

cards = document.querySelectorAll("#plan .card");

cards.forEach((card) => {
  planTl.from(card, fadeInUp, "-=0.2");
});

//  CTA Section

ctaTl = gsap.timeline({
  stagger: 0.1,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#cta",
    // markers: true,
    start: "top 60%",
    end: "bottom top",
    toggleActions: "restart none restart none",
  },
});

ctaTl
  .from("#cta h2", fadeInUp)
  .from("#cta p", fadeInUp, "-=0.2")
  .from("#cta .cta-btn", fadeInUp, "-=0.2");

//  Failure Section

failureTl = gsap.timeline({
  stagger: 0.1,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#failure",
    // markers: true,
    start: "top 60%",
    end: "bottom top",
    toggleActions: "restart none restart none",
  },
});

failureTl
  .from("#failure h2", fadeInUp)
  .from("#failure p", fadeInUp, "-=0.4")
  .from("#failure .failure-img", fadeInLeft, "-=0.4");

//  Success Section

successTl = gsap.timeline({
  stagger: 0.1,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#success",
    // markers: true,
    start: "top 60%",
    end: "bottom top",
    toggleActions: "restart none restart none",
  },
});

successTl
  .from("#success .success-img", fadeInRight)
  .from("#success h2", fadeInUp, "-=0.6")
  .from("#success .b1", fadeInUp, "-=0.2")
  .from("#success .b2", fadeInUp, "-=0.2")
  .from("#success .b3", fadeInUp, "-=0.2")
  .from("#success .cta-btn", fadeInUp, "-=0.2");
