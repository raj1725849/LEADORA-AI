import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const setupOverlappingEffect = (containerSelector: string, sectionSelector: string) => {
  if (typeof window === "undefined") return;

  const sections = gsap.utils.toArray(sectionSelector) as HTMLElement[];
  
  sections.forEach((section, index) => {
    if (index === sections.length - 1) return; // Last section doesn't need to be covered

    const nextSection = sections[index + 1];
    
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    // Animation for the next section sliding up and covering
    gsap.fromTo(nextSection, 
      {
        yPercent: 100,
        borderRadius: "32px 32px 0 0",
      },
      {
        yPercent: 0,
        borderRadius: "0px 0px 0 0",
        ease: "none",
        scrollTrigger: {
          trigger: nextSection,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      }
    );

    // Subtle scale down of the section being covered
    gsap.to(section, {
      scale: 0.96,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: nextSection,
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    });
  });
};

export const animateFadeUp = (element: string | HTMLElement, delay: number = 0) => {
  return gsap.from(element, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    }
  });
};

export const animateStaggerFadeUp = (elements: string | HTMLElement[], stagger: number = 0.1) => {
  return gsap.from(elements, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger,
    ease: "power2.out",
    scrollTrigger: {
      trigger: Array.isArray(elements) ? elements[0] : elements,
      start: "top 85%",
    }
  });
};

export const animateCount = (element: string | HTMLElement, endValue: number, duration: number = 2) => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    },
    onUpdate: () => {
      const el = typeof element === "string" ? document.querySelector(element) : element;
      if (el) el.textContent = Math.floor(obj.value).toString();
    }
  });
};

export { gsap, ScrollTrigger };
