gsap.registerPlugin(ScrollTrigger);

// Global Animations

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

const zoomIn = {
  opacity: 0,
  scale: 0,
  duration: 1.2,
};

const largeDevice = window.matchMedia("(min-width: 1200px)");

largeDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
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
        toggleActions: "restart none none none",
      },
    });

    // Solutions Section

    solutionsTl = gsap.timeline({
      stagger: 0.1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#solutions",
        // markers: true,
        start: "5% top",
        end: "+=4000",
        pin: true,
        scrub: 1,
      },
    });

    solutionsTl.from("#solutions h2", fadeInUp);

    socailProofs = document.querySelectorAll(".proof");

    socailProofs.forEach((proof) => {
      solutionsTl.from(proof, fadeInUp, "-=0.4");
    });

    solutionsTl
      .from("#solutions .m1", {
        opacity: 0,
        x: 20,
      })
      .from("#solutions .p1", {
        opacity: 0,
        y: 20,
      })
      .to("#solutions .m1", {
        opacity: 0,
        x: 20,
      })
      .to("#solutions .p1", {
        opacity: 0,
        y: 20,
      })
      .from("#solutions .m2", {
        opacity: 0,
        x: 20,
      })
      .from("#solutions .p2", {
        opacity: 0,
        y: 20,
      })
      .to("#solutions .m2", {
        opacity: 0,
        x: 20,
      })
      .to("#solutions .p2", {
        opacity: 0,
        y: 20,
      })
      .from("#solutions .m3", {
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
        toggleActions: "restart none none none",
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
        toggleActions: "restart none none none",
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
        toggleActions: "restart none none none",
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
        toggleActions: "restart none none none",
      },
    });

    successTl
      .from("#success .success-img", fadeInRight)
      .from("#success h2", fadeInUp, "-=0.6")
      .from("#success .b1", fadeInUp, "-=0.2")
      .from("#success .b2", fadeInUp, "-=0.2")
      .from("#success .b3", fadeInUp, "-=0.2")
      .from("#success .cta-btn", zoomIn, "-=0.2");
  }
}

// Run it initially
handleDeviceChange(largeDevice);
