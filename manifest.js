/* ============================================================
   OAO Course Overviews — manifest
   ------------------------------------------------------------
   To add a course:
     1. Drop its PDF into the pdfs/ folder
        (lowercase-with-hyphens.pdf, e.g. grade-4-science.pdf)
     2. Add one entry below:
        { title: "Course Name", grades: ["4"], file: "pdfs/grade-4-science.pdf" }
   Grade values: "K", "1" ... "12".
   A course may list several grades (e.g. an elective for 6–8:
   grades: ["6","7","8"]) and it will appear under each one,
   tagged "Grades 6–8" on its row. The tag is auto-generated as
   first–last; add band: "..." to override it (e.g. a course for
   every grade: grades: ["K","1",...,"12"], band: "All grades").
   Then commit + push. The widget updates itself from this list.
   ============================================================ */
window.COURSE_MANIFEST = {
  updated: "2026-06-06",
  courses: [
    { title: "Kindergarten English Language Arts", grades: ["K"], file: "pdfs/kindergarten-ela.pdf" },
    { title: "Grade 3 Mathematics", grades: ["3"], file: "pdfs/grade-3-mathematics.pdf" },
    { title: "M/J World History", grades: ["6"], file: "pdfs/mj-world-history.pdf" },
    { title: "M/J Critical Thinking Skills", grades: ["6", "7", "8"], file: "pdfs/mj-critical-thinking-skills.pdf" },
    { title: "Biology I", grades: ["9"], file: "pdfs/biology-1.pdf" },
    { title: "English IV — The Enduring Quest", grades: ["12"], file: "pdfs/english-4-enduring-quest.pdf" }
  ]
};
