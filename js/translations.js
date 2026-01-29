// ================= TRANSLATIONS =================
const translations = {
  en: {
    home: {
      title: "Mechatronics Engineer",
      subtitle: "Building intelligent systems where hardware meets code",
      description:
        "I’m a Mechatronics Engineer passionate about building real-world systems that merge mechanics, electronics, and embedded software.",
      scrollDown: "Scroll down"
    },

    about: {
      description:
        "I am a Mechatronics Engineer pursuing a Bachelor of Mechatronics Engineering with Honors at Asia Pacific University (APU). I enjoy building practical systems that connect mechanics, electronics, and embedded software.<br><br>" +
        "I have worked on multidisciplinary projects involving sensor integration, control logic, and prototyping. I enjoy testing, debugging, and refining systems until they perform reliably.<br><br>" +
        "Driven by curiosity and continuous learning, I aim to contribute to professional teams that value thoughtful engineering and real-world results."
    },

    qualification: {
      educationDate0: "2020 - 2026"
    },

    /*
      PROJECT ORDER (FINAL & EXACT):

      1) Biodegradable thermally regulated orthopedic cast
      2) Pneumatic soft gripper for pick and place
      3) Legion AI desktop assistant
      4) Mashed potato maker
      5) REMOVED
      6) REMOVED
      7) Meat blender
      8) CNC turning simulation
    */

    projects: {
      cards: [
        {
          // Project 1 (index 0)
          title: "Biodegradable Thermally-Regulated Orthopedic Cast",
          desc:
            "Designed a biodegradable orthopedic cast with integrated temperature sensing and active heating and cooling to improve patient comfort during limb fracture recovery."
        },
        {
          // Project 2 (index 1)
          title: "Pneumatic Soft Gripper for Pick and Place",
          desc:
            "Developed a pneumatic soft robotic gripper for pick-and-place tasks, focusing on compliant gripping, pressure control, and safe handling of delicate objects."
        },
        {
          // Project 3 (index 2)
          title: "Legion AI Desktop Assistant",
          desc:
            "An AI-powered desktop assistant that automates everyday tasks using natural language commands, including scheduling, file handling, and system-level control."
        },
        {
          // Project 4 (index 3)
          title: "Mashed Potato Maker",
          desc:
            "Designed and built a compact food-processing device to automate mashed potato preparation, emphasizing mechanical design, safety, and ease of use."
        },
        {
          // Project 5 — REMOVED (index 4)
          title: "",
          desc: ""
        },
        {
          // Project 6 — REMOVED (index 5)
          title: "",
          desc: ""
        },
        {
          // Project 7 — MEAT BLENDER (index 6) ✅
          title: "Meat Blender Engineering",
          desc:
            "Designed a meat blender and calculated key mechanical parameters such as torque, power requirements, and material selection to ensure efficient and safe operation."
        },
        {
          // Project 8 — CNC (index 7)
          title: "CNC Turning Process Simulation",
          desc:
            "Simulated CNC turning operations using CNC Simulator Pro, including tool selection, material setup, and G-code programming to optimize machining accuracy."
        }
      ]
    },

    footer: {
      subtitle: "Mechatronics Engineer",
      rights: "© Astro-5444. All rights reserved"
    }
  }
};

// ================= PAGE UPDATE LOGIC =================
function translatePage() {
  const t = translations.en;

  // HOME
  document.querySelector(".home__title").textContent = t.home.title;
  document.querySelector(".home__subtitle").textContent = t.home.subtitle;
  document.querySelector(".home__description").textContent = t.home.description;
  document.querySelector(".home__scroll-name").textContent = t.home.scrollDown;

  // ABOUT
  document.querySelector(".about__description").innerHTML = t.about.description;

  // EDUCATION DATE
  const eduDate = document.querySelector(
    '[data-i18n="qualification.education.0.date"]'
  );
  if (eduDate) eduDate.textContent = t.qualification.educationDate0;

  // PROJECTS (STRICT INDEX MAPPING)
  const titles = document.querySelectorAll(".portfolio__title");
  const descs = document.querySelectorAll(".portfolio__description");

  t.projects.cards.forEach((card, i) => {
    if (titles[i]) titles[i].textContent = card.title;
    if (descs[i]) descs[i].textContent = card.desc;
  });

  // FOOTER
  document.querySelector(".footer__subtitle").textContent =
    t.footer.subtitle;
  document.querySelector(".footer__copy").textContent =
    t.footer.rights;
}

// INIT
document.addEventListener("DOMContentLoaded", translatePage);
