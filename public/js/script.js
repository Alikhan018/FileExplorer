class Operations {
  constructor() {
    this.viewModal();
    this.closeModal();
    this.toggleDetails();
    this.toggleTreeView();
  }
  closeModal() {
    const closeBtn = document.getElementsByClassName("close");
    for (let i = 0; i < closeBtn.length; i++) {
      closeBtn[i].addEventListener("click", function () {
        document.getElementById("modal").classList.remove("view-modal");
        document
          .getElementById("edit-modal-background")
          .classList.remove("view-modal");
      });
      const cancelbtn = document.getElementById("cancel");
      cancelbtn.addEventListener('click', function() {
        document.getElementById("modal").classList.remove("view-modal");
      })
      const discardbtn = document.getElementById("discard");
      discardbtn.addEventListener('click', function() {
        document.getElementById("edit-modal-background").classList.remove("view-modal");
      })
    }
  }
  viewModal() {
    const addFolderBtns = document.getElementsByClassName("addFolder");
    for (let i = 0; i < addFolderBtns.length; i++) {
      addFolderBtns[i].addEventListener("click", (e) => {
        const addFolderParent = addFolderBtns[i].parentElement;
        const parentOfElementToAppend = addFolderParent.parentElement;
        const idOfElement = parentOfElementToAppend.getAttribute("id");
        document.getElementById("parentId").value = idOfElement;
        const modal = document.getElementById("modal");
        modal.classList.add("view-modal");
        document.getElementById("heading-modal").innerText = "Append Explorer";
        document.getElementById("save").innerText = "Add";
        document.getElementById("cancel").innerText = "Cancel";
      });
    }
    const editBtn = document.getElementsByClassName("edit");
    for (let i = 0; i < editBtn.length; i++) {
      editBtn[i].addEventListener("click", (e) => {
        const editBtnParent = editBtn[i].parentElement;
        const nameSpan = editBtnParent.previousElementSibling;
        const parentOfElementToAppend = editBtnParent.parentElement;
        const idOfElement = parentOfElementToAppend.getAttribute("id");
        document.getElementById("id").value = idOfElement;
        document.getElementById("prev-name").value = nameSpan.innerText;
        const modal = document.getElementById("edit-modal-background");
        modal.classList.add("view-modal");
      });
    }
  }

  getAllNextSiblings(elem) {
    let siblings = [];
    elem = elem.nextElementSibling;
    while ((elem)) {
      siblings.push(elem);
      elem = elem.nextElementSibling;
    }
    return siblings;
  }
  toggleTreeView() {
    const arrowToggle = document.getElementsByClassName("twister");
    for (let i = 0; i < arrowToggle.length; i++) {
      arrowToggle[i].addEventListener("click", () => {
        try {
          if (arrowToggle[i]) {
            const targetElemChild = arrowToggle[i].parentElement;
            const targetElem = targetElemChild.parentElement;
            const child = this.getAllNextSiblings(targetElem);
            for (let ch of child) {
              ch.classList.toggle("hidden");
            }
            if (arrowToggle[i].classList.contains("fa-angle-right")) {
              arrowToggle[i].classList.add("fa-angle-down");
              arrowToggle[i].classList.remove("fa-angle-right");
            } else if(arrowToggle[i].classList.contains("fa-angle-down")){
              arrowToggle[i].classList.add("fa-angle-right");
              arrowToggle[i].classList.remove("fa-angle-down");
              console.log(1);
            }
          } else {
            throw "Unkown Error";
          }
        } catch (err) {
          console.error(err);
        }
        
      });
    }
  }
  toggleDetails() {
    const files = document.getElementsByClassName("filespan");
    for (let file of files) {
      file.addEventListener("click", () => {
        const details = document.getElementById("details");
        details.innerHTML = "";
        const h2 = `<h2>File Details</h2>`;
        const nameSpan = `<span>File Name: ${file.innerText}</span>`;
        const typeSpan = `<span>Type: file</span>`;
        let filter1 = file.childNodes[0]
          .getAttribute("style")
          .replace(/;/g, "");
        let filter2 = filter1.replace(/c/g, "C");
        filter2 = filter2.replace(/#A22C29/g, "Red") 
        filter2 = filter2.replace(/#D5896F/g, "Brown") 
        filter2 = filter2.replace(/#7FB069/g, "Green") 
        const colorSpan = `<span>${filter2}</span>`;

        details.innerHTML = `${h2} <br/> ${nameSpan} <br/> ${typeSpan} <br/> ${colorSpan}`;
      });
    }
    const folders = document.getElementsByClassName("folderspan");
    for (let folder of folders) {
      folder.addEventListener("click", () => {
        const folderContainer = folder.parentElement;
        const details = document.getElementById("details");
        details.innerHTML = "";
        const h2 = `<h2>Folder Details</h2>`;
        const nameSpan = `<span>File Name: ${folder.innerText}</span>`;
        const typeSpan = `<span>Type: Directory</span>`;
        let filter1 = folder.childNodes[2]
          .getAttribute("style")
          .replace(/;/g, "");
        let filter2 = filter1.replace(/c/g, "C");
        filter2 = filter2.replace(/#1D84B5/g, "Blue") 
        filter2 = filter2.replace(/#A22C29/g, "Red") 
        filter2 = filter2.replace(/#D5896F/g, "Brown") 
        filter2 = filter2.replace(/#7FB069/g, "Green") 
        const colorSpan = `<span>${filter2}</span>`;

        const siblings = this.getAllNextSiblings(folderContainer);
        const childNodes = siblings.length;
        const nodesSpan = `<span>This folder has ${childNodes} items </span>`

        details.innerHTML = `${h2} <br/> ${nameSpan} <br/> ${typeSpan} <br/> ${colorSpan} <br/> ${nodesSpan}`;
      });
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  new Operations();
});
