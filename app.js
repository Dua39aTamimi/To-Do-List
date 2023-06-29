

const addDetails = document.createElement("button");
addDetails.innerText ="+";
addDetails.classList.add("addDetails");
let mylists = [];
let count = 0;
let listDetails = [];
if(count!=0){
    loadLists();
}
function c(){
    document.querySelector('.newList').classList.remove('popup');
}

function addList(){
    document.querySelector('.new').classList.remove('popup');
    let list = document.createElement("div");
    list.classList.add("newList");
    list.classList.add("popup");
    let close = document.createElement("span");
    close.innerText="X";
    close.classList.add("closeList");
    

    close.onclick = function(){
        document.querySelector('.newList').classList.remove('popup');
        body.removeChild(list);
    };

    list.appendChild(close);
    createForm(list);
   
    let body = document.querySelector("body");
  
    createList(body);
  
    body.appendChild(list);
}
function createForm(list){
    let listHeader = document.createElement("h2");
    listHeader.innerText = "My List";
    listHeader.classList.add("listHeader");
    let listForm = document.createElement("form");
    listForm.classList.add("listForm");
    //for List Title
    let listTitleDiv = document.createElement("div");

    let listTitleLabel = document.createElement("label");
    listTitleLabel.innerText = "Title";
    listTitleLabel.setAttribute("for", "title");
    let listTitleText = document.createElement("input");
    listTitleText.setAttribute("type", "text");
    listTitleText.setAttribute("name", "title");
    listTitleText.setAttribute("id", "title");
    listTitleText.setAttribute("placeholder", "e.g. To-Do List...");

    listTitleText.onkeyup = function(){
        document.querySelector(".title").innerText =  document.querySelector("#title").value;
    }
    listTitleDiv.appendChild(listTitleLabel);
    listTitleDiv.appendChild(listTitleText);

    //for List Details 
   let listDetailDiv = document.createElement("div");

    let listDetailLabel = document.createElement("label");
    listDetailLabel.innerText = "Details";
    listDetailLabel.setAttribute("for", "details");

    let listDetailText = document.createElement("input");
    listDetailText.setAttribute("type", "text");
    listDetailText.setAttribute("name", "details");
    listDetailText.setAttribute("id", "details");
    listDetailText.setAttribute("placeholder", "e.g. Workouts");
    listDetailText.classList.add("listDetails");

    listDetailDiv.appendChild(listDetailLabel);
    listDetailDiv.appendChild(listDetailText);

    listDetailDiv.appendChild(addDetails);
    
    //For List Date
    let listDateDiv =  document.createElement("div");

    let listDateLabel = document.createElement("label");
    listDateLabel.innerText = "Date";
    listDateLabel.setAttribute("for", "date");

    let listDateInput = document.createElement("input");
    listDateInput.setAttribute("type", "date");
    listDateInput.setAttribute("name", "date");
    listDateInput.setAttribute("id", "date");
    listDateInput.classList.add("listDate");
    
    listDateInput.onchange = function(){
        document.querySelector(".listDate").innerText = listDateInput.value;
    }
    listDateDiv.appendChild(listDateLabel);
    listDateDiv.appendChild(listDateInput);

    //for Font style
    let listFontStyleDiv =  document.createElement("div");

    let listFontStyleLabel = document.createElement("label");
    listFontStyleLabel.innerText = "Font Style";
    listFontStyleLabel.setAttribute("for", "fontStyle");

    let listFontStyleSelect = document.createElement("Select");
    listFontStyleSelect.classList.add("selectFonts");
    listFontStyleSelect.setAttribute("name", "fontStyle");
    listFontStyleSelect.setAttribute("id", "fontStyle");
   
    let listFontStyleOption1 = document.createElement("option");
    listFontStyleOption1.setAttribute("value", "'Source Code Pro', monospace");
    listFontStyleOption1.textContent = "Source Code Pro";
    listFontStyleOption1.style.fontFamily = "Source Code Pro";

    let listFontStyleOption2 = document.createElement("option");
    listFontStyleOption2.setAttribute("value", "'Dancing Script', cursive");
    listFontStyleOption2.textContent = "Dancing Script";
    listFontStyleOption2.style.fontFamily = "Dancing Script";
    

    let listFontStyleOption3 = document.createElement("option");
    listFontStyleOption3.setAttribute("value", "'BhuTuka Expanded One', cursive");
    listFontStyleOption3.textContent = "BhuTuka Expanded One";
    listFontStyleOption3.style.fontFamily = "BhuTuka Expanded One";
    
    let listFontStyleOption4 = document.createElement("option");
    listFontStyleOption4.setAttribute("value", "'Dosis', sans-serif");
    listFontStyleOption4.textContent = "Dosis";
    listFontStyleOption4.style.fontFamily = "Dosis";

    let listFontStyleOption5 = document.createElement("option");
    listFontStyleOption5.setAttribute("value", "'Kanit', sans-serif");
    listFontStyleOption5.textContent = "Kanit";
    listFontStyleOption5.style.fontFamily = "Kanit";

    listFontStyleSelect.onchange = function(){
    
        let elements = document.querySelectorAll(".element");
        for(let i=0; i<elements.length;i++){
            elements[i].style.fontFamily =  listFontStyleSelect.value ;
        }
        
    }
    listFontStyleSelect.appendChild(listFontStyleOption1);
    listFontStyleSelect.appendChild(listFontStyleOption2);
    listFontStyleSelect.appendChild(listFontStyleOption3);
    listFontStyleSelect.appendChild(listFontStyleOption4);
    listFontStyleSelect.appendChild(listFontStyleOption5);
    

    listFontStyleDiv.appendChild(listFontStyleLabel);
    listFontStyleDiv.appendChild(listFontStyleSelect);

    //For Background Style
    let listBackgroundDiv =  document.createElement("div");
    listBackgroundDiv.classList.add("listBackground");
    let listBackgroundLabel =  document.createElement("label");
    listBackgroundLabel.innerText = "Background Style";
    listFontStyleLabel.setAttribute("for", "backgroundStyle");

    let backgroundsDiv = document.createElement("div");
    backgroundsDiv.classList.add("colors");

    let moreColorsText = document.createElement("p");
    moreColorsText.innerText = "For more colors";
    moreColorsText.classList.add("moreColors");

    let moreColorsDiv = document.createElement("div");
    moreColorsDiv.classList.add("moreColorsDiv");
   
    let moreColorsBigDiv = document.createElement("div");
    moreColorsBigDiv.classList.add("moreColorsBigDiv");

    let moreColorsDiv1 = document.createElement("div");
    moreColorsDiv1.classList.add("moreColorsDiv1");

    let back =  document.createElement("p");
    back.innerText = "Back";
    back.classList.add("moreText");


    let generate =  document.createElement("p");
    generate.innerText="I don't like it generate another colors";
    generate.classList.add("moreText");

    moreColorsDiv1.appendChild(back);
    moreColorsDiv1.appendChild(generate);
    

    let colorDiv = [];
  
    generate.onclick = function(){
        
        for(let i=0; i<49; i++){
            moreColorsDiv.removeChild(colorDiv[i]);
            colorDiv[i] = document.createElement("div");
            colorDiv[i].classList.add("background");
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
          
           
            colorDiv[i].style.backgroundColor= "rgb("+red+","+green+","+blue+")";
            colorDiv[i].onclick = function(){
                let myList = document.querySelector(".myList");
                let deleteButtons = document.querySelectorAll(".delete");

                myList.style.backgroundColor = colorDiv[i].style.backgroundColor;
                document.body.style.scrollbarTrackColor = colorDiv[i].style.backgroundColor;
                for(let i=0;i<deleteButtons.length;i++){
                    deleteButtons[i].style.color =  myList.style.backgroundColor;
                    deleteButtons[i].style.backgroundColor = "black";
                }
                let save = document.querySelectorAll(".save");
                save[0].style.color=myList.style.backgroundColor;
              
                save[1].style.color=myList.style.backgroundColor;
             
            }

            moreColorsDiv.appendChild( colorDiv[i]);
        }

    }
    back.onclick = function(){
        moreColorsBigDiv.classList.remove("popup");
        for(let i=0; i<49; i++){
            moreColorsDiv.removeChild(colorDiv[i]);
            
        }

    }
    moreColorsText.onclick = function(){
        moreColorsBigDiv.classList.add("popup");
        for(let i=0; i<49; i++){
            colorDiv[i] = document.createElement("div");
            colorDiv[i].classList.add("background");
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
           
            colorDiv[i].style.backgroundColor= "rgb("+red+","+green+","+blue+")";
            colorDiv[i].onclick = function(){
                let myList = document.querySelector(".myList");
                let deleteButtons = document.querySelectorAll(".delete");
                myList.style.backgroundColor = colorDiv[i].style.backgroundColor;
                document.body.style.scrollbarTrackColor = colorDiv[i].style.backgroundColor;
                for(let i=0;i<deleteButtons.length;i++){
                    deleteButtons[i].style.color =  myList.style.backgroundColor;
                    deleteButtons[i].style.backgroundColor = "black";
                }
                let save = document.querySelectorAll(".save");
                save[0].style.color=myList.style.backgroundColor;
              
                save[1].style.color=myList.style.backgroundColor;
             
            }

            moreColorsDiv.appendChild( colorDiv[i]);
        }
    

    }
    moreColorsBigDiv.appendChild( moreColorsDiv);
    moreColorsBigDiv.appendChild( moreColorsDiv1);
    document.querySelector("body").appendChild(moreColorsBigDiv);

    let coloumnColors = document.createElement("div");
    coloumnColors.classList.add("cols");

    
    coloumnColors.appendChild(backgroundsDiv);
    coloumnColors.appendChild(moreColorsText);

    const backgrounds = [];

    for(let i=0; i<5; i++){
        backgrounds[i] = document.createElement("div");
        backgrounds[i].classList.add("background");
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
      
       
        backgrounds[i].style.backgroundColor= "rgb("+red+","+green+","+blue+")";
        backgrounds[i].onclick = function(){
            let myList = document.querySelector(".myList");
            let deleteButtons = document.querySelectorAll(".delete");

            myList.style.backgroundColor = backgrounds[i].style.backgroundColor;
           
            for(let i=0;i<deleteButtons.length;i++){
                deleteButtons[i].style.color =  myList.style.backgroundColor;
                deleteButtons[i].style.backgroundColor = "black";
            }
            let save = document.querySelectorAll(".save");
            save[0].style.color=document.querySelector(".myList").style.backgroundColor;
            save[1].style.color=document.querySelector(".myList").style.backgroundColor;
        }
        backgroundsDiv.appendChild(backgrounds[i]);
    }



    listBackgroundDiv.appendChild(listBackgroundLabel);
    listBackgroundDiv.appendChild(coloumnColors);
   
   
    // for list form
    listForm.appendChild(listTitleDiv);
  
    listForm.appendChild(listDetailDiv);
  
    listForm.appendChild(listDateDiv);
    
    listForm.appendChild(listFontStyleDiv);
   
    listForm.appendChild(listBackgroundDiv);
    // for the list
    list.appendChild(listHeader);
    list.appendChild(listForm);
}

function createList(body){
   

    let myList = document.createElement("div");
    myList.classList.add("myList");
    myList.classList.add("popup");
    let listTitle = document.createElement("h1");
    listTitle.classList.add("title");
    listTitle.innerText ="";
    let listDate = document.createElement("h5");
    listDate.classList.add("listDate");
    listDate.innerText="";
    let listDiv = document.createElement("Div");
    listDiv.classList.add("lists");
    let lists = document.createElement("ul");
    

   addDetails.onclick = function(){
    
        let text = document.querySelector(".listDetails");
        let listContent = document.createElement("div");
        listContent.classList.add("listContent");
        let listElement = document.createElement("li");
        listElement.classList.add("listElement");
        let element = document.createElement("p");
        element.classList.add("element");

        element.style.fontFamily = document.querySelector(".selectFonts").value;
        listElement.appendChild(element);
        element.innerText= text.value;
        let listDelete = document.createElement("button");
        listDelete.classList.add("delete");
       
        listDelete.innerHTML = "<i class='fa-sharp fa-solid fa-trash'></i>";
        listDelete.style.color =  myList.style.backgroundColor;

        listContent.appendChild(listElement);
        listContent.appendChild(listDelete);
       
        lists.appendChild(listContent);

        listDelete.onclick = function(){
            lists.removeChild(listContent);
            return false;
        }
        return false;
    }
    let saveDiv = document.createElement("Div");
    saveDiv.classList.add("saveDiv");

    let saveButton = document.createElement("Button");
    saveButton.innerText = "Save";
    saveButton.classList.add("save");
    

    saveButton.onclick = function(){
        let title = document.querySelector(".title").textContent;
        let date = document.querySelector(".listDate").textContent;
        let details = document.querySelectorAll(".element");

        let fontStyle = document.querySelector(".selectFonts").value;
        let backgroundColor = document.querySelector(".myList").style.backgroundColor;

       
       mylists[count] = new Mylists(count,title, date, fontStyle, backgroundColor);
        
        for(let s=0;s<details.length;s++){
            listDetails[s] = new ListDetails(details[s].textContent, count,false);
        }
       


        document.querySelector('.newList').classList.remove('popup');
        document.body.removeChild( document.querySelector('.newList'));
        document.querySelector('.myList').classList.remove('popup');
        document.body.removeChild( document.querySelector('.myList'));
        count++;
        loadLists();
    }

    let dontSaveButton = document.createElement("Button");
    dontSaveButton.classList.add("save");
    dontSaveButton.innerText = "Don't Save";
  
    saveDiv.appendChild(saveButton);
    saveDiv.appendChild(dontSaveButton);

    listDiv.appendChild(lists);
    myList.appendChild(listTitle);
    myList.appendChild(listDate);
    myList.appendChild(listDiv);
    myList.appendChild(saveDiv);
    body.appendChild(myList);

}

class Mylists{
    title ;
    date;
    font;
    background;
    id;
    constructor(id,title, date, font, background){
        this.id = id;
        this.title= title;
        this.date = date;
        this.font = font;
        this.background = background;
    }
}

class ListDetails{
    name;
    isCompleted = false;
    listID ;
    constructor(name,listID, isCompleted){
        this.name = name;
        this.isCompleted = isCompleted;
        this.listID = listID;
    }


}
function loadLists(){
    
    let l = document.createElement("Div");
    let lname = document.createElement("h3");
    let da = document.createElement("p");
    l.classList.add("listDiv");
    l.classList.add(mylists.length-1);
    lname.innerText = mylists[mylists.length-1].title;
    da.innerText = mylists[mylists.length-1].date;
    l.style.backgroundColor = mylists[mylists.length-1].background;
    l.appendChild(lname);
    l.appendChild(da);
    l.onclick = function(){

        let index = l.className;
        let r = index.split(" ");
     
        let detail = [];
       
        for(let i=0;i<listDetails.length;i++){
            console.log(parseInt(r[1])+" "+listDetails[i].listID);
            if(parseInt(r[1])==listDetails[i].listID){
                detail[i] = new ListDetails(listDetails[i].name,listDetails[i].isCompleted,listDetails[i].listID);
           
            }
        }

        let m = document.createElement("Div");
        m.classList.add("mine");
        m.classList.add("popup");
        let close1 = document.createElement("span");
        close1.innerText="X";
        close1.classList.add("closeList");
    

    close1.onclick = function(){
        document.querySelector('.mine').classList.remove('popup');
        document.body.removeChild(m);
    };
    m.appendChild(close1);

        m.style.backgroundColor =  l.style.backgroundColor;
        let mTitle = document.createElement("h1");
        mTitle.classList.add("title");
        mTitle.innerText = mylists[parseInt(r[1])].title;
        let mDate = document.createElement("p");
        mDate.classList.add("listDate");
        mDate.innerText = mylists[parseInt(r[1])].date;

        m.appendChild(mTitle);
        m.appendChild(mDate);

        let listElements = document.createElement("Div");
        listElements.classList.add("lists");
        
        let ulLists =  document.createElement("ul");
        
        for(let j =0; j<detail.length;j++){
            let listContent1 = document.createElement("Div");
            listContent1.classList.add("listContent");
            
            
            let listElement1 = document.createElement("li");
            listElement1.classList.add("listElement");
         
            let element1 = document.createElement("p");
            element1.classList.add("element");
            element1.innerText = detail[j].name;
            element1.style.fontFamily =  mylists[parseInt(r[1])].font;

            let completeCheckBox = document.createElement("input");
            completeCheckBox.setAttribute("type", "checkbox");
            completeCheckBox.classList.add("checkBox");
            
            let click = 0;

            completeCheckBox.onchange = function(){
                  
                   if(click == 0){
                    console.log(click);
                    element1.style.textDecoration = "line-through";
                    click =1;

                   }
                   else if(click == 1){
                    element1.style.textDecoration = "none";
                    click =0;
                   }
            }
           
            listElement1.appendChild(element1);
            
            listContent1.appendChild(listElement1);
            listContent1.appendChild(completeCheckBox);
            ulLists.appendChild(listContent1);
        }
       
      listElements.appendChild(ulLists);
        m.appendChild(listElements);
        document.body.appendChild(m);
    }
    document.querySelector(".listsArea").appendChild(l);

}