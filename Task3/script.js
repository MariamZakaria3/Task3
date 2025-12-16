// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar scroll effect
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"
  } else {
    navbar.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe course cards and other elements
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".course-card, .offer-card, .testimonial-card, .team-card")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Course card hover effect
const courseCards = document.querySelectorAll(".course-card, .course-card-detail")
courseCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.3s ease"
  })
})

// Handle enrollment button clicks
const enrollButtons = document.querySelectorAll(".btn-enroll, .btn-cta")
enrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Thank you for your interest! Enrollment functionality will be available soon.")
  })
})

// Handle course view buttons
const viewButtons = document.querySelectorAll(".btn-course")
viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "course-detail.html"
  })
})

// Active navigation highlight
const currentLocation = window.location.pathname.split("/").pop()
const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach((link) => {
  if (
    link.getAttribute("href") === currentLocation ||
    (currentLocation === "" && link.getAttribute("href") === "index.html")
  ) {
    link.classList.add("active")
  } else {
    link.classList.remove("active")
  }
})

// Social media links
const socialIcons = document.querySelectorAll(".social-icon")
socialIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Social media links will be configured soon!")
  })
})

// Notification icon interaction
const notificationIcon = document.querySelector(".notification-icon")
if (notificationIcon) {
  notificationIcon.addEventListener("click", () => {
    alert("No new notifications")
  })
}

// Search functionality (if needed)
function searchCourses(query) {
  const courses = document.querySelectorAll(".course-card, .course-card-detail")
  const searchTerm = query.toLowerCase()

  courses.forEach((course) => {
    const title = course.querySelector("h5").textContent.toLowerCase()
    if (title.includes(searchTerm)) {
      course.style.display = "block"
    } else {
      course.style.display = "none"
    }
  })
}

// Initialize tooltips if Bootstrap tooltips are used
const bootstrap = window.bootstrap // Declare the bootstrap variable
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
