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

    gsap.from("#solutions h2", {
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

    // Products Reveal Animation

    // Product 1

    p1Tl = gsap.timeline({
      stagger: 0.1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#product1",
        // markers: true,
        start: "top 20%",
        end: "+=2600 95%",
        pin: true,
        scrub: 1,
      },
    });

    p1Tl
      .from("#product1 .product-title", {
        opacity: 0,
        y: 20,
      })
      .from("#product1 .mockup", {
        opacity: 0,
        x: 20,
      })
      .from("#product1 .p1", {
        opacity: 0,
        x: 20,
      })
      .from("#product1 .p2", {
        opacity: 0,
        y: 20,
      })
      .from("#product1 .p3", {
        opacity: 0,
        y: 20,
      })
      .from("#product1 .icons", {
        opacity: 0,
        y: 20,
      })

      .to("#product1 .icons", {
        opacity: 0,
        y: 20,
      })
      .to("#product1 .p3", {
        opacity: 0,
        x: 20,
      })
      .to("#product1 .p2", {
        opacity: 0,
        y: 20,
      })
      .to("#product1 .p1", {
        opacity: 0,
        y: 20,
      })
      .to("#product1 .product-title", {
        opacity: 0,
        y: 20,
      })
      .to("#product1 .mockup", {
        opacity: 0,
        x: 20,
      });

    // Product 2

    p2TL = gsap.timeline({
      stagger: 0.1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#product2",
        // markers: true,
        start: "top 20%",
        end: "+=2600 95%",
        pin: true,
        scrub: 1,
      },
    });

    p2TL
      .from("#product2 .product-title", {
        opacity: 0,
        y: 20,
      })
      .from("#product2 .mockup", {
        opacity: 0,
        x: 20,
      })
      .from("#product2 .p1", {
        opacity: 0,
        x: 20,
      })
      .from("#product2 .p2", {
        opacity: 0,
        y: 20,
      })
      .from("#product2 .p3", {
        opacity: 0,
        y: 20,
      })
      .from("#product2 .icons", {
        opacity: 0,
        y: 20,
      })

      .to("#product2 .icons", {
        opacity: 0,
        y: 20,
      })
      .to("#product2 .p3", {
        opacity: 0,
        x: 20,
      })
      .to("#product2 .p2", {
        opacity: 0,
        y: 20,
      })
      .to("#product2 .p1", {
        opacity: 0,
        y: 20,
      })
      .to("#product2 .product-title", {
        opacity: 0,
        y: 20,
      })
      .to("#product2 .mockup", {
        opacity: 0,
        x: 20,
      });

    p3TL = gsap.timeline({
      stagger: 0.1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#product3",
        // markers: true,
        start: "top 20%",
        end: "+=2600 95%",
        pin: true,
        scrub: 1,
      },
    });

    p3TL
      .from("#product3 .product-title", {
        opacity: 0,
        y: 20,
      })
      .from("#product3 .mockup", {
        opacity: 0,
        x: 20,
      })
      .from("#product3 .p1", {
        opacity: 0,
        x: 20,
      })
      .from("#product3 .p2", {
        opacity: 0,
        y: 20,
      })
      .from("#product3 .p3", {
        opacity: 0,
        y: 20,
      })
      .from("#product3 .icons", {
        opacity: 0,
        y: 20,
      })

      .to("#product3 .icons", {
        opacity: 0,
        y: 20,
      })
      .to("#product3 .p3", {
        opacity: 0,
        x: 20,
      })
      .to("#product3 .p2", {
        opacity: 0,
        y: 20,
      })
      .to("#product3 .p1", {
        opacity: 0,
        y: 20,
      })
      .to("#product3 .product-title", {
        opacity: 0,
        y: 20,
      })
      .to("#product3 .mockup", {
        opacity: 0,
        x: 20,
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

    steps = document.querySelectorAll("#plan .step");

    steps.forEach((step) => {
      planTl.from(step, fadeInUp, "-=0.2");
    });

    planTl.from("#plan .cta-btn", zoomIn, "-=0.5");

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
      .from("#failure p", fadeInUp, "-=0.4");

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
      .from("#success .cta-btn", fadeInUp, "-=0.2");
  }
}

// Run it initially
handleDeviceChange(largeDevice);
