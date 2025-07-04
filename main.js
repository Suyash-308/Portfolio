const htmlEl=document.documentElement;


const skillsDiv=document.getElementById("skills-div");
const projectsDiv=document.getElementById("projects-div");


function toggleTheme(){
    htmlEl.classList.toggle("dark")
}


function displayProjects(){
    skillsDiv.classList.add("hidden-content");
    projectsDiv.classList.remove("hidden-content");

}



function displaySkills(){
    skillsDiv.classList.remove("hidden-content");
    projectsDiv.classList.add("hidden-content");
}