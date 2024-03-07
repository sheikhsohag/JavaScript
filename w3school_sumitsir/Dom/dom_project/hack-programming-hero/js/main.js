const milestonesData = JSON.parse(data).data;

function loadMileStones(){
  const milestones = document.querySelector(".milestones");
  console.log(milestones)

  milestones.innerHTML = `${milestonesData.map(function(milestone){
    return ` <div class="milestones">
    <div class="milestone border-b" id ="${milestone._id}">
      <div class="flex">
        <div class="checkbox" onclick="markMilestone(this, ${milestone._id})"><input type="checkbox" /></div>
        <div onclick="openMilestone(this, ${milestone._id})">
          <p>
           ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      
      <div class="hidden_panel">
        ${milestone.modules.map(function(module){
          return `<div class="module border-b">
          <p>${module.name}</p>
        </div>`;
        }).join("")}
      </div>
    </div>
  </div>
  
  <div class="doneList">
          <!-- done list will load here -->
  </div>`
     
  }).join("")}`; 
}

function openMilestone(milestoneElement, id){
       const currentPanel = milestoneElement.parentNode.nextElementSibling
       const shownPanel = document.querySelector(".show");
       const shownPanels = document.querySelector(".active");
       

       if(!currentPanel.classList.contains("active") && shownPanels)
           shownPanels.classList.remove("active");

      milestoneElement.classList.toggle("active");

       if(!currentPanel.classList.contains("show") && shownPanel)
          shownPanel.classList.remove("show");
       currentPanel.classList.toggle("show");

       showImage(id);
}

function showImage(id){
  const milestoneImage = document.querySelector(".milestoneImage");
  const name = document.querySelector(".title");
  const detials = document.querySelector(".details");

  milestoneImage.computedStyleMap.opacity = "0";

  milestoneImage.src = milestonesData[id].image;
  name.innerText = milestonesData[id].name;
  detials.innerText = milestonesData[id].description;
}

const milestonesImage = document.querySelector(".milestoneImage");

milestonesData.onload = function () {
  this.style.opacity = "1";
}

function markMilestone(checkbox, id){
      const doneList = document.querySelector(".doneList");
      const milestoneList = document.querySelector(".milestones");
      const item = document.getElementById(id);
      
      if(checkbox.checked){
        milestoneList.removeChild(item);
        doneList.appendChild(item);
      }
      else{
        milestoneList.appendChild(item);
        doneList.removeChild(item);
      }

}

loadMileStones();