let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let about = document.getElementById("about");
let h5 = document.getElementById("h5");
let text1 = document.getElementById("text1");
let text3 = document.getElementById("text3");
let contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setlanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick =()=>{
    setlanugage("english");
    localStorage.setItem("Lang","english");
};

onload =()=>{
    setlanugage(localStorage.getItem("Lang"));
};
function setlanugage(getlanugage){
    if(getlanugage === "arabic"){
        title.innerHTML="موقع ريم";
        text1.innerHTML="أهلا بكم في موقع ريم";
        about.innerHTML="عني ";
        h5.innerHTML="رحلة تعلم ريم";
        text3.innerHTML="أنا اتعلم بسرعةاريد تقدما سريعا";
        contact.innerHTML="تواصل معي";
    }else if (getlanugage === "english"){
        title.innerHTML="Reem Translator";
        text1.innerHTML=" Welcome to Reem Translator";
        about.innerHTML=" About me:";
        h5.innerHTML="Reem Learning journy";
        text3.innerHTML="I am a fast learner I want to make fast progress  .";
        contact.innerHTML="contact me";
}
}